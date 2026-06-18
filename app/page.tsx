import Link from 'next/link';
import { Section, SectionHeading } from '@/components/Section';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { FAQ } from '@/components/FAQ';
import { PRODUCT, PRODUCTS } from '@/lib/products';
import { Truck, Leaf, Heart, Sparkles, Check } from 'lucide-react';

const faqItems = [
  {
    q: 'C’est livré comment et en combien de temps ?',
    a: 'On expédie en 24–48 h partout en France via Colissimo. Livraison offerte dès 35 € (les packs de 12 et 24 sont donc livrés gratuitement). Tes nougats voyagent dans un emballage soigné et recyclable.',
  },
  {
    q: 'Ça se conserve longtemps ?',
    a: 'Nos nougats se gardent environ 3 mois à l’abri de la chaleur, dans leur emballage. Mais soyons honnêtes : ils ne survivent jamais aussi longtemps. 😋',
  },
  {
    q: 'C’est vraiment fait main ?',
    a: 'Oui ! On cuit Le Classique en petites fournées à Bordeaux, avec du miel français et des pistaches. Pas de conservateurs, pas d’huile de palme, pas d’arôme artificiel.',
  },
  {
    q: 'Je peux l’offrir ?',
    a: 'Carrément. Le pack de 24 est parfait à offrir — joliment présenté, idéal à glisser sous le sapin ou à poser sur la table des fêtes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-abricot-300/50 blur-3xl" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-pistache-400/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-candy-200/50 blur-3xl" />
        </div>

        <div className="container relative grid items-center gap-12 pb-16 pt-12 md:grid-cols-2 md:pb-24 md:pt-20">
          <div>
            <div className="eyebrow mb-5 animate-fade-up">
              <Sparkles className="h-4 w-4" /> Le nougat tout doux
            </div>
            <h1 className="heading-hero mb-6 animate-fade-up" style={{ animationDelay: '60ms' }}>
              Le nougat,<br />
              <span className="bg-candy-gradient bg-clip-text text-transparent">en plus doux.</span>
            </h1>
            <p
              className="mb-8 max-w-md text-lg text-ink/70 leading-relaxed animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Ultra-moelleux, généreux en pistaches, lié au bon miel français. Une seule recette,
              faite main en petites fournées. Celle qu’on a voulu réussir avant tout le reste.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '180ms' }}>
              <Button href="/boutique" size="lg" arrow>
                Goûter maintenant
              </Button>
              <Button href="/notre-histoire" variant="secondary" size="lg">
                Notre histoire
              </Button>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="overflow-hidden rounded-[3rem] bg-white shadow-candy">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PRODUCT.heroImage}
                alt="Le Classique — nougat pistache & miel"
                className="h-auto w-full max-w-md animate-float"
              />
            </div>
            <span className="pill absolute -left-3 top-8 bg-white text-ink shadow-soft">
              🍯 Miel français
            </span>
            <span className="pill absolute -right-2 bottom-10 bg-white text-ink shadow-soft">
              🌿 Vraies pistaches
            </span>
          </div>
        </div>
      </section>

      {/* BANDEAU ARGUMENTS */}
      <div className="border-y-2 border-ink/5 bg-white">
        <div className="container grid gap-6 py-8 sm:grid-cols-3">
          {[
            { icon: Leaf, label: 'Miel 100% français', sub: 'Sans huile de palme' },
            { icon: Heart, label: 'Fait main à Bordeaux', sub: 'En petites fournées' },
            { icon: Truck, label: 'Livraison 24–48 h', sub: 'Offerte dès 35 €' },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-candy-50 text-candy-600">
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display font-extrabold leading-tight">{f.label}</div>
                <div className="text-sm text-ink/50">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LE PRODUIT */}
      <Section bg="cream">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid place-items-center rounded-[2.5rem] bg-pistache-100 p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PRODUCT.heroImage} alt="Le Classique" className="w-full max-w-sm" />
          </div>
          <div>
            <div className="eyebrow mb-4">Notre nougat signature</div>
            <h2 className="heading-section mb-6">
              Le Classique,<br />pistache &amp; miel.
            </h2>
            <p className="mb-6 text-lg text-ink/70 leading-relaxed">{PRODUCT.pitch}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {PRODUCT.ingredients.map((ing) => (
                <li key={ing} className="flex items-center gap-2 text-ink/70">
                  <Check className="h-4 w-4 shrink-0 text-pistache-600" /> {ing}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/boutique" size="lg" arrow>
                Choisir mon pack
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* PACKS */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Les formats"
          title="Choisis ta dose de douceur"
          subtitle="Un seul nougat, trois formats. Plus le pack est grand, plus le prix à la barre est doux."
          align="center"
        />
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* OFFRIR */}
      <Section bg="cream">
        <div className="overflow-hidden rounded-[2.5rem] bg-candy-gradient">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-14">
            <div className="text-white">
              <div className="pill mb-4 bg-white/25 text-white">🎁 Le cadeau parfait</div>
              <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                Le pack de 24, à offrir
              </h2>
              <p className="mt-4 max-w-md text-white/90 leading-relaxed">
                Le grand format, joliment présenté : parfait pour faire plaisir à quelqu’un…
                ou à toi-même, on ne juge pas. Livraison offerte.
              </p>
              <div className="mt-6">
                <Button
                  href="/produit/pack-24"
                  className="bg-white !text-candy-600 hover:bg-cream"
                  size="lg"
                  arrow
                >
                  Je craque pour le grand format
                </Button>
              </div>
            </div>
            <div className="grid place-items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/pack-24.png"
                alt="Pack de 24"
                className="w-full max-w-xs animate-float rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <SectionHeading eyebrow="Les questions" title="On te répond" align="center" />
        <FAQ items={faqItems} />
      </Section>

      {/* CTA FINAL */}
      <Section bg="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Prêt à craquer ?</h2>
          <p className="mt-5 text-lg text-white/70">
            Choisis ton pack, on s’occupe du reste. Livré chez toi en 24–48 h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/boutique" size="lg" arrow>
              Voir les packs
            </Button>
            <Link
              href="/notre-histoire"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 font-extrabold text-white hover:bg-white/10"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
