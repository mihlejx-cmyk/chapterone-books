import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import type { Book } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { AddToCartButton, WishlistButton } from './book-actions';
import { StarRating } from './ui';

const toneColors: Record<string, string> = { cream: '#e8e5dd', black: '#252522', moss: '#405a46', sand: '#d9cdb9', wine: '#8f2d33', olive: '#7d8554', blue: '#536b7a', ochre: '#b78643', navy: '#30384d', terracotta: '#a85f4d', sun: '#d6a45c', lavender: '#8c8196' };
export function BookCover({ book, large = false }: { book: Book; large?: boolean }) { return <div style={{ backgroundColor: toneColors[book.tone] ?? '#f5f3ef' }} className={`book-cover relative aspect-[3/4.25] overflow-hidden rounded-[10px] shadow-book ${large ? 'w-full' : 'w-full'}`}><Image src={book.cover} alt={`Cover of ${book.title}`} fill sizes={large ? '(max-width: 768px) 80vw, 38vw' : '(max-width: 768px) 45vw, 220px'} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/45 to-transparent p-4 pt-20 text-white"><p className="display-title text-lg leading-none">{book.title}</p><p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/70">{book.author}</p></div></div>; }

export function BookCard({ book }: { book: Book }) { return <article className="group min-w-0"><Link href={`/book/${book.slug}`} className="block"><BookCover book={book} /></Link><div className="flex items-start justify-between gap-3 pt-4"><div className="min-w-0"><Link href={`/book/${book.slug}`} className="display-title block truncate text-xl leading-tight hover:text-wine">{book.title}</Link><p className="mt-1 truncate text-xs text-ink/55">{book.author}</p><div className="mt-2"><StarRating rating={book.rating} count={book.reviews} /></div></div><WishlistButton book={book} /></div><div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-2 text-sm font-semibold">{book.salePrice ? <><span>{formatPrice(book.salePrice)}</span><span className="text-xs font-normal text-ink/35 line-through">{formatPrice(book.price)}</span></> : formatPrice(book.price)}</div><AddToCartButton book={book} compact /></div></article>; }
