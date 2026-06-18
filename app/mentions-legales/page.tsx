import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations sur la vente.',
};

export default function MentionsPage() {
  return (
    <section className="section bg-white min-h-[60vh]">
      <div className="container max-w-2xl">
        <h1 className="heading-section mb-8">Mentions légales</h1>
        <div className="space-y-6 text-ink/70 leading-relaxed">
          <p className="rounded-2xl bg-abricot-100 px-4 py-3 text-sm font-bold text-ink">
            ⚠️ Modèle à compléter. Remplace les champs entre crochets par tes informations
            réelles avant la mise en ligne (statut juridique, SIRET, adresse, hébergeur…).
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-extrabold text-ink">Éditeur du site</h2>
            <p>
              {SITE.name} — [Statut juridique, ex. micro-entreprise]<br />
              [Prénom Nom des gérants]<br />
              [Adresse complète]<br />
              SIRET : [numéro] · Email : {SITE.email}
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-extrabold text-ink">Hébergement</h2>
            <p>
              Ce site est hébergé par [nom de l’hébergeur, ex. Vercel Inc.], [adresse de
              l’hébergeur].
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-extrabold text-ink">Paiement</h2>
            <p>
              Les paiements sont traités de manière sécurisée par Stripe. Aucune donnée
              bancaire n’est stockée sur nos serveurs.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-extrabold text-ink">
              Données personnelles
            </h2>
            <p>
              Les informations recueillies lors d’une commande servent uniquement au
              traitement et à la livraison de celle-ci. Conformément au RGPD, tu disposes
              d’un droit d’accès, de rectification et de suppression de tes données en
              écrivant à {SITE.email}.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-extrabold text-ink">
              Livraison & rétractation
            </h2>
            <p>
              S’agissant de denrées alimentaires périssables, le droit de rétractation de 14
              jours ne s’applique pas (article L221-28 du Code de la consommation). En cas de
              problème avec ta commande, contacte-nous : on trouve toujours une solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
