'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import type { Product } from '@/lib/products';
import { COLOR_MAP } from '@/lib/colors';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from './CartProvider';

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const c = COLOR_MAP[product.color];

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-4xl border-2 bg-white p-5 shadow-soft transition-transform hover:-translate-y-1',
        product.popular ? 'border-candy-300' : 'border-ink/5'
      )}
    >
      {product.popular && (
        <span className="pill absolute -top-3 left-1/2 z-10 -translate-x-1/2 bg-candy-500 text-white">
          ★ Le plus aimé
        </span>
      )}

      <Link
        href={`/produit/${product.slug}`}
        className={cn('relative grid place-items-center overflow-hidden rounded-3xl', c.soft)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={`${product.name} — ${product.flavor}`}
          className="aspect-square w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <span className={cn('text-xs font-extrabold uppercase tracking-wide', c.text)}>
          {product.flavor}
        </span>
        <Link href={`/produit/${product.slug}`}>
          <h3 className="mt-1 font-display text-xl font-extrabold leading-tight hover:text-candy-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-ink/60 leading-relaxed">{product.shortDesc}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="font-display text-xl font-extrabold">
              {formatPrice(product.priceCents)}
            </div>
            <div className="text-xs text-ink/50">
              {product.weight} · {formatPrice(product.perBarCents)}/barre
            </div>
          </div>
          <button
            onClick={() => add(product.slug)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white transition-all hover:bg-candy-500 hover:scale-110 active:scale-95"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
