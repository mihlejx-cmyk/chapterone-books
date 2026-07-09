'use client';

import { cn } from '@/lib/utils';

export function Button({ children, className, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  return <button className={cn('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors active:scale-[.97]', variant === 'primary' && 'bg-ink text-white hover:bg-wine', variant === 'secondary' && 'border border-ink/20 bg-white text-ink hover:border-ink', variant === 'ghost' && 'px-2 text-ink hover:text-wine', className)} {...props}>{children}</button>;
}

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: React.ReactNode }) {
  return <div className="flex flex-col gap-3 border-t border-ink pt-5 md:flex-row md:items-end md:justify-between"><div>{eyebrow && <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-wine">{eyebrow}</p>}<h2 className="display-title text-4xl leading-none md:text-5xl">{title}</h2>{copy && <p className="mt-3 max-w-lg text-sm leading-6 text-ink/65">{copy}</p>}</div>{action}</div>;
}

export function StarRating({ rating, count }: { rating: number; count?: number }) { return <span className="inline-flex items-center gap-1 text-xs text-ink/60"><span className="tracking-[.14em] text-wine">★★★★★</span><span>{rating.toFixed(1)}</span>{count !== undefined && <span>({count})</span>}</span>; }
