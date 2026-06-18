import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-candy-500 shadow-candy transition-transform group-hover:-rotate-6">
        <svg viewBox="0 0 80 52" className="w-5" fill="#FFF4E6" aria-hidden="true">
          <circle cx="24" cy="32" r="15" />
          <circle cx="44" cy="23" r="20" />
          <circle cx="60" cy="33" r="13" />
          <rect x="18" y="30" width="48" height="17" rx="8.5" />
        </svg>
      </span>
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {SITE.name}
      </span>
    </Link>
  );
}
