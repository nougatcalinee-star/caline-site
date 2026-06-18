import type { Accent } from './products';

// Classes Tailwind complètes (écrites en clair pour ne pas être purgées au build).
export const COLOR_MAP: Record<
  Accent,
  { soft: string; chip: string; text: string; dot: string }
> = {
  candy: {
    soft: 'bg-candy-50',
    chip: 'bg-candy-100 text-candy-700',
    text: 'text-candy-600',
    dot: 'bg-candy-500',
  },
  pistache: {
    soft: 'bg-pistache-100',
    chip: 'bg-pistache-100 text-pistache-600',
    text: 'text-pistache-600',
    dot: 'bg-pistache-500',
  },
  abricot: {
    soft: 'bg-abricot-100',
    chip: 'bg-abricot-100 text-abricot-600',
    text: 'text-abricot-600',
    dot: 'bg-abricot-500',
  },
};
