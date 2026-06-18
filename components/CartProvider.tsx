'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { PRODUCTS, type Product } from '@/lib/products';
import { SITE } from '@/lib/site';

export type CartLine = {
  slug: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
  shippingCents: number;
  totalCents: number;
  detailed: Array<{ product: Product; qty: number; lineTotalCents: number }>;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'caline-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Charger le panier depuis le navigateur au démarrage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  function add(slug: string, qty = 1) {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { slug, qty }];
    });
    setOpen(true);
  }

  function remove(slug: string) {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }

  function setQty(slug: string, qty: number) {
    if (qty <= 0) return remove(slug);
    setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty } : l)));
  }

  function clear() {
    setLines([]);
  }

  const detailed = useMemo(() => {
    return lines
      .map((l) => {
        const product = PRODUCTS.find((p) => p.slug === l.slug);
        if (!product) return null;
        return {
          product,
          qty: l.qty,
          lineTotalCents: product.priceCents * l.qty,
        };
      })
      .filter(Boolean) as Array<{ product: Product; qty: number; lineTotalCents: number }>;
  }, [lines]);

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const subtotalCents = useMemo(
    () => detailed.reduce((n, d) => n + d.lineTotalCents, 0),
    [detailed]
  );
  const shippingCents =
    subtotalCents === 0 || subtotalCents >= SITE.freeShippingThresholdCents
      ? 0
      : SITE.shippingCents;
  const totalCents = subtotalCents + shippingCents;

  const value: CartContextValue = {
    lines,
    add,
    remove,
    setQty,
    clear,
    count,
    subtotalCents,
    shippingCents,
    totalCents,
    detailed,
    isOpen,
    setOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart doit être utilisé dans un CartProvider');
  return ctx;
}
