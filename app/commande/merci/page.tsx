'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Button';
import { useCart } from '@/components/CartProvider';

export default function MerciPage() {
  const { clear } = useCart();

  // Vider le panier une fois la commande passée
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <section className="section bg-cream min-h-[70vh]">
      <div className="container max-w-xl text-center">
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-candy-gradient text-5xl shadow-candy animate-float">
          🎉
        </div>
        <h1 className="heading-section mb-4">Merci pour ta commande !</h1>
        <p className="text-lg text-ink/70">
          On a bien reçu ta commande et on prépare tes nougats avec amour.
          Tu vas recevoir un email de confirmation, puis ton colis sous 24–48 h.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/boutique" size="lg" arrow>
            Continuer mes emplettes
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Retour à l’accueil
          </Button>
        </div>
      </div>
    </section>
  );
}
