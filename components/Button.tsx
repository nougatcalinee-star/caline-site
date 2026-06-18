import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'sun';
  size?: 'md' | 'lg';
  className?: string;
  arrow?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  arrow = false,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-extrabold transition-all duration-150 rounded-full whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = {
    md: 'h-11 px-6 text-[15px]',
    lg: 'h-14 px-8 text-[17px]',
  };
  const variants = {
    primary: 'bg-candy-500 text-white shadow-candy hover:bg-candy-600 hover:-translate-y-0.5 active:translate-y-0',
    sun: 'bg-abricot-500 text-ink hover:bg-abricot-600 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-ink border-2 border-ink/10 hover:border-candy-400 hover:text-candy-600',
    ghost: 'text-ink hover:bg-ink/5',
  };

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, sizes[size], variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {content}
    </button>
  );
}
