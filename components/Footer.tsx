import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-white/60 leading-relaxed">
              {SITE.baseline} Fabriqué avec amour, livré partout en France.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-candy-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-candy-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold mb-4">Boutique</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/boutique" className="hover:text-white">Nos packs</Link></li>
              <li><Link href="/produit/pack-24" className="hover:text-white">Le pack à offrir</Link></li>
              <li><Link href="/panier" className="hover:text-white">Mon panier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold mb-4">Infos</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/notre-histoire" className="hover:text-white">Notre histoire</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} {SITE.name}. Tous droits réservés. Fait main, fait avec le cœur.
        </div>
      </div>
    </footer>
  );
}
