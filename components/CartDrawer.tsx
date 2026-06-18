'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, Loader2 } from 'lucide-react';
import { useCart } from './CartProvider';
import { formatPrice } from '@/lib/utils';
import { SITE } from '@/lib/site';

export function CartDrawer() {
  const {
    isOpen,
    setOpen,
    detailed,
    subtotalCents,
    shippingCents,
    totalCents,
    setQty,
    remove,
    count,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: detailed.map((d) => ({ slug: d.product.slug, qty: d.qty })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Le paiement n’est pas encore configuré.');
        setLoading(false);
      }
    } catch {
      setError('Une erreur est survenue. Réessaie dans un instant.');
      setLoading(false);
    }
  }

  const remaining = SITE.freeShippingThresholdCents - subtotalCents;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panneau */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-2xl font-extrabold">
            Mon panier {count > 0 && <span className="text-candy-500">({count})</span>}
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {detailed.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-4xl">🛒</div>
            <p className="text-ink/60">Ton panier est vide pour l’instant.</p>
            <Link
              href="/boutique"
              onClick={() => setOpen(false)}
              className="font-extrabold text-candy-600 hover:underline"
            >
              Découvrir les nougats →
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {subtotalCents < SITE.freeShippingThresholdCents && (
                <div className="mb-4 rounded-2xl bg-abricot-100 px-4 py-3 text-sm font-bold text-ink">
                  Plus que <span className="text-candy-600">{formatPrice(remaining)}</span> pour la
                  livraison offerte ! 🎉
                </div>
              )}
              <ul className="space-y-4">
                {detailed.map((d) => (
                  <li
                    key={d.product.slug}
                    className="flex gap-3 rounded-3xl bg-white p-3 shadow-soft"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.product.image}
                      alt={d.product.name}
                      className="h-16 w-16 shrink-0 rounded-2xl bg-cream object-contain"
                    />
                    <div className="flex flex-1 flex-col">
                      <span className="font-display font-extrabold leading-tight">
                        {d.product.name}
                      </span>
                      <span className="text-xs text-ink/50">{d.product.weight}</span>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border-2 border-ink/10">
                          <button
                            onClick={() => setQty(d.product.slug, d.qty - 1)}
                            className="grid h-7 w-7 place-items-center rounded-full hover:bg-ink/5"
                            aria-label="Moins"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center text-sm font-extrabold">{d.qty}</span>
                          <button
                            onClick={() => setQty(d.product.slug, d.qty + 1)}
                            className="grid h-7 w-7 place-items-center rounded-full hover:bg-ink/5"
                            aria-label="Plus"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-extrabold">{formatPrice(d.lineTotalCents)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="mb-1 flex justify-between text-sm text-ink/60">
                <span>Sous-total</span>
                <span>{formatPrice(subtotalCents)}</span>
              </div>
              <div className="mb-3 flex justify-between text-sm text-ink/60">
                <span>Livraison</span>
                <span>{shippingCents === 0 ? 'Offerte 🎉' : formatPrice(shippingCents)}</span>
              </div>
              <div className="mb-4 flex justify-between font-display text-xl font-extrabold">
                <span>Total</span>
                <span>{formatPrice(totalCents)}</span>
              </div>

              {error && (
                <p className="mb-3 rounded-2xl bg-candy-50 px-4 py-2 text-sm text-candy-700">
                  {error}
                </p>
              )}

              <button
                onClick={checkout}
                disabled={loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-candy-500 font-extrabold text-white shadow-candy transition-all hover:bg-candy-600 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5" />
                    Commander
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-ink/40">
                Paiement sécurisé via Stripe
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
