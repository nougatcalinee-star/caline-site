import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  bg = 'cream',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: 'cream' | 'white' | 'dark';
  id?: string;
}) {
  const bgClass = {
    cream: 'bg-cream',
    white: 'bg-white',
    dark: 'bg-ink text-white',
  }[bg];
  return (
    <section id={id} className={cn('section', bgClass, className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="heading-section">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-lg text-ink/70 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
