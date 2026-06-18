'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border-2 border-ink/5 bg-white"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-lg font-extrabold">{item.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-candy-100 text-candy-600">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-ink/70 leading-relaxed">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
