'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/Button';
import { formatPrice } from '@/lib/utils';
import { SITE } from '@/lib/site';

export default function PanierPage() {
  const { detailed, subtotalCents, shippingCents, totalCents, setQty, remove, count } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: detailed.map((d) => ({ slug: d.product.slug, qty: d.qty })) }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else {
        setError(data.error || 'Le paiement n’est pas encore configuré.');
        setLoading(false);
      }
    } catch {
      setError('Une erreur est survenue. Réessaie dans un instant.');
      setLoading(false);
    }
  }

  return (
    <section className="section bg-cream min-h-[60vh]">
      <div className="container max-w-4xl">
        <h1 className="heading-section mb-8">Mon panier</h1>

        {detailed.length === 0 ? (
          <div className="rounded-4xl bg-white p-12 text-center shadow-soft">
            <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-cream text-4xl">
              🛒
            </div>
            <p className="mb-6 text-ink/60">Ton panier est vide. Il est temps de craquer !</p>
            <Button href="/boutique" size="lg" arrow>
              Découvrir les nougats
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
            {/* Lignes */}
            <ul className="space-y-4">
              {detailed.map((d) => (
                <li key={d.product.slug} className="flex gap-4 rounded-3xl bg-white p-4 shadow-soft">
                  <Link
                    href={`/produit/${d.product.slug}`}
                    className="block h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-cream"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.product.image}
                      alt={d.product.name}
                      className="h-full w-full object-contain"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/produit/${d.product.slug}`}
                          className="font-display text-lg font-extrabold leading-tight hover:text-candy-600"
                        >
                          {d.product.name}
                        </Link>
                        <div className="text-sm text-ink/50">{d.product.weight}</div>
                      </div>
                      <button
                        onClick={() => remove(d.product.slug)}
                        className="grid h-8 w-8 place-items-center rounded-full text-ink/40 hover:bg-candy-50 hover:text-candy-600"
                        aria-label="Retirer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border-2 border-ink/10">
                        <button
                          onClick={() => setQty(d.product.slug, d.qty - 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-ink/5"
                          aria-label="Moins"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center font-extrabold">{d.qty}</span>
                        <button
                          onClick={() => setQty(d.product.slug, d.qty + 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-ink/5"
                          aria-label="Plus"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-display text-lg font-extrabold">
                        {formatPrice(d.lineTotalCents)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Récap */}
            <div className="h-fit rounded-4xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl font-extrabold">Récapitulatif</h2>
              <div className="mt-4 space-y-2 text-ink/70">
                <div className="flex justify-between">
                  <span>Sous-total ({count} articles)</span>
                  <span>{formatPrice(subtotalCents)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shippingCents === 0 ? 'Offerte 🎉' : formatPrice(shippingCents)}</span>
                </div>
              </div>
              {subtotalCents < SITE.freeShippingThresholdCents && (
                <p className="mt-3 rounded-2xl bg-abricot-100 px-4 py-2 text-sm font-bold">
                  Plus que {formatPrice(SITE.freeShippingThresholdCents - subtotalCents)} pour la
                  livraison offerte !
                </p>
              )}
              <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 font-display text-2xl font-extrabold">
                <span>Total</span>
                <span>{formatPrice(totalCents)}</span>
              </div>

              {error && (
                <p className="mt-3 rounded-2xl bg-candy-50 px-4 py-2 text-sm text-candy-700">
                  {error}
                </p>
              )}

              <button
                onClick={checkout}
                disabled={loading}
                className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-candy-500 font-extrabold text-white shadow-candy transition-all hover:bg-candy-600 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5" /> Passer commande
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-ink/40">Paiement sécurisé via Stripe</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
