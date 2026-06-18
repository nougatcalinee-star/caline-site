import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <section className="section bg-cream min-h-[70vh]">
      <div className="container max-w-lg text-center">
        <div className="mb-6 text-7xl animate-wiggle">🍬</div>
        <h1 className="heading-section mb-4">Oups, page introuvable</h1>
        <p className="mb-8 text-lg text-ink/70">
          Cette page a fondu… Mais nos nougats, eux, sont bien là.
        </p>
        <Button href="/boutique" size="lg" arrow>
          Retour à la boutique
        </Button>
      </div>
    </section>
  );
}
