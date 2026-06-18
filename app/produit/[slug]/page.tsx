import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Truck } from 'lucide-react';
import { PRODUCT, PRODUCTS, getProduct } from '@/lib/products';
import { COLOR_MAP } from '@/lib/colors';
import { formatPrice, cn } from '@/lib/utils';
import { AddToCart } from '@/components/AddToCart';
import { ProductCard } from '@/components/ProductCard';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Produit introuvable' };
  return { title: `${product.name} — ${product.flavor}`, description: product.shortDesc };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const c = COLOR_MAP[product.color];
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <section className="bg-white">
        <div className="container py-8">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink/60 hover:text-candy-600"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à la boutique
          </Link>
        </div>

        <div className="container grid items-start gap-10 pb-16 md:grid-cols-2 md:pb-24">
          {/* Visuel */}
          <div className={cn('grid place-items-center rounded-[2.5rem] p-6', c.soft)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} — ${product.flavor}`}
              className="w-full max-w-md animate-float"
            />
          </div>

          {/* Infos */}
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span key={b} className={cn('pill', c.chip)}>
                  {b}
                </span>
              ))}
            </div>
            <span className={cn('text-sm font-extrabold uppercase tracking-wide', c.text)}>
              {product.flavor}
            </span>
            <h1 className="mt-1 font-display text-4xl font-extrabold md:text-5xl">{product.name}</h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold">
                {formatPrice(product.priceCents)}
              </span>
              <span className="text-ink/50">
                · {product.weight} · {formatPrice(product.perBarCents)}/barre
              </span>
            </div>

            <p className="mt-6 text-lg text-ink/70 leading-relaxed">{product.longDesc}</p>

            <div className="mt-8">
              <AddToCart slug={product.slug} />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-ink/60">
              <Truck className="h-4 w-4 text-pistache-600" />
              {product.priceCents >= 3500
                ? 'Livraison offerte · expédié sous 24–48 h'
                : 'Expédié sous 24–48 h · livraison offerte dès 35 €'}
            </div>

            <div className="mt-8 rounded-3xl bg-cream p-6">
              <h3 className="font-display text-lg font-extrabold">Les ingrédients</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {PRODUCT.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-ink/70">
                    <Check className="h-4 w-4 shrink-0 text-pistache-600" /> {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <h2 className="mb-10 text-center font-display text-3xl font-extrabold">
            Un autre format ?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
