import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-candy-500 shadow-candy transition-transform group-hover:rotate-6">
        <svg viewBox="0 0 100 100" className="h-5 w-5" aria-hidden="true">
          <ellipse cx="43" cy="50" rx="9" ry="22" transform="rotate(-18 43 50)" fill="#FFF4E3" />
          <ellipse cx="57" cy="50" rx="9" ry="22" transform="rotate(18 57 50)" fill="#FFF4E3" />
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
