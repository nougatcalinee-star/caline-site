import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Une question, une envie de commande spéciale ? Écris-nous.',
};

export default function ContactPage() {
  return (
    <Section bg="cream" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <div className="eyebrow mb-4 justify-center">Contact</div>
        <h1 className="heading-section mb-4">On adore discuter</h1>
        <p className="text-lg text-ink/70">
          Une question sur une commande, une envie de gros volume pour un événement, ou juste
          envie de dire bonjour ? On répond vite et avec le sourire.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
        <a
          href={`mailto:${SITE.email}`}
          className="flex flex-col items-center gap-3 rounded-4xl bg-white p-6 text-center shadow-soft transition-transform hover:-translate-y-1"
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-candy-50 text-candy-600">
            <Mail className="h-6 w-6" />
          </span>
          <span className="font-display font-extrabold">Email</span>
          <span className="text-sm text-ink/60">{SITE.email}</span>
        </a>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-4xl bg-white p-6 text-center shadow-soft transition-transform hover:-translate-y-1"
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-dragee-100 text-dragee-600">
            <Instagram className="h-6 w-6" />
          </span>
          <span className="font-display font-extrabold">Instagram</span>
          <span className="text-sm text-ink/60">{SITE.instagramHandle}</span>
        </a>

        <div className="flex flex-col items-center gap-3 rounded-4xl bg-white p-6 text-center shadow-soft">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-corail-100 text-corail-600">
            <MapPin className="h-6 w-6" />
          </span>
          <span className="font-display font-extrabold">Fabriqué à</span>
          <span className="text-sm text-ink/60">Bordeaux, France 🇫🇷</span>
        </div>
      </div>
    </Section>
  );
}
