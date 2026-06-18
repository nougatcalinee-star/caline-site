'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-3 rounded-full border-2 border-ink/10 bg-white px-2 py-1">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5"
          aria-label="Moins"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-extrabold">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5"
          aria-label="Plus"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        onClick={() => add(slug, qty)}
        className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-candy-500 px-8 font-extrabold text-white shadow-candy transition-all hover:bg-candy-600 hover:-translate-y-0.5"
      >
        <ShoppingBag className="h-5 w-5" />
        Ajouter au panier
      </button>
    </div>
  );
}
