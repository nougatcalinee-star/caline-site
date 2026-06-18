'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { useCart } from './CartProvider';

const links = [
  { href: '/boutique', label: 'Boutique' },
  { href: '/notre-histoire', label: 'Notre histoire' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-ink/5">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-bold text-ink/70 hover:text-candy-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCartOpen(true)}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-white border-2 border-ink/10 hover:border-candy-400 transition-colors"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag className="h-5 w-5 text-ink" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-candy-500 px-1 text-[11px] font-extrabold text-white">
                {count}
              </span>
            )}
          </button>

          <div className="hidden md:block">
            <Button href="/boutique" size="md">
              Commander
            </Button>
          </div>

          <button
            className="md:hidden grid h-11 w-11 place-items-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/5 bg-cream">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-bold py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/boutique" size="md" className="w-full mt-2">
              Commander
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
