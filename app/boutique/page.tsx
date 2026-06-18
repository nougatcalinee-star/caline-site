import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { Section } from '@/components/Section';
import { PRODUCTS } from '@/lib/products';
import { Leaf, Heart, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'La boutique',
  description:
    'Le Classique, notre nougat ultra-moelleux pistache & miel, en packs de 6, 12 ou 24 barres.',
};

export default function BoutiquePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute right-10 top-0 h-64 w-64 rounded-full bg-abricot-300/40 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-pistache-400/40 blur-3xl" />
        </div>
        <div className="container relative py-16 text-center md:py-20">
          <div className="eyebrow mb-4 justify-center">La boutique</div>
          <h1 className="heading-section mb-4">Le Classique, à ta façon</h1>
          <p className="mx-auto max-w-xl text-lg text-ink/70">
            Un seul nougat — pistache &amp; miel, ultra-moelleux — en trois formats. Plus le pack
            est grand, plus le prix à la barre est doux.
          </p>
        </div>
      </section>

      <Section bg="cream">
        <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3">
          {[
            { icon: Leaf, label: 'Miel 100% français' },
            { icon: Heart, label: 'Fait main à Bordeaux' },
            { icon: Truck, label: 'Livraison offerte dès 35 €' },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 rounded-3xl bg-white p-6 text-center shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-candy-50 text-candy-600">
                <f.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-bold text-ink/70">{f.label}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
