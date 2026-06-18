import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Notre histoire',
  description: 'Un frère, une sœur, du miel français et l’envie de dépoussiérer le nougat.',
};

const steps = [
  {
    emoji: '💡',
    title: 'Une envie de gourmandise',
    text: 'Tout commence entre frère et sœur, avec une question simple : et si on rendait le nougat moderne, fondant et vraiment irrésistible ?',
  },
  {
    emoji: '🍯',
    title: 'Le bon, rien que le bon',
    text: 'Du miel 100% français, de vraies pistaches, des amandes. Pas de conservateurs, pas d’huile de palme, pas d’arôme artificiel. Que des vrais ingrédients.',
  },
  {
    emoji: '🌿',
    title: 'Une obsession : le moelleux',
    text: 'On a repris la recette traditionnelle et on l’a retravaillée jusqu’à obtenir LA texture : ultra-moelleuse, tendre, qui fond en bouche. C’est notre signature.',
  },
  {
    emoji: '📦',
    title: 'Fait à Bordeaux, livré chez toi',
    text: 'Estelle cuit Le Classique en petites fournées à Bordeaux. Julien s’occupe du reste depuis Paris. Et hop — direction ta boîte aux lettres.',
  },
];

export default function HistoirePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-pistache-400/30 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-abricot-300/40 blur-3xl" />
        </div>
        <div className="container relative py-16 text-center md:py-24">
          <div className="eyebrow mb-4 justify-center">Notre histoire</div>
          <h1 className="heading-hero mx-auto max-w-3xl">
            Du nougat,<br />
            <span className="bg-candy-gradient bg-clip-text text-transparent">avec du cœur.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
            On est deux — un frère, une sœur — et la même obsession : le bon goût, sans prise de
            tête. Voici comment Câline est né.
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 rounded-4xl border-2 border-ink/5 bg-cream p-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-white text-4xl shadow-soft">
                {s.emoji}
              </div>
              <div>
                <h2 className="font-display text-xl font-extrabold">{s.title}</h2>
                <p className="mt-2 text-ink/70 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold">Envie d’y goûter ?</h2>
          <p className="mt-5 text-lg text-white/70">
            La meilleure façon de comprendre notre histoire, c’est encore de croquer dedans.
          </p>
          <div className="mt-8">
            <Button href="/boutique" size="lg" arrow>
              Découvrir la boutique
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
