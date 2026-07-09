'use client';
import { Heart, Check, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Book } from '@/lib/data';
import { useCart } from './cart-provider';

export function WishlistButton({ book }: { book: Book }) { const [saved, setSaved] = useState(false); return <button onClick={() => setSaved(!saved)} aria-label={saved ? `Remove ${book.title} from wishlist` : `Save ${book.title} to wishlist`} className="shrink-0 p-1 text-ink/40 transition hover:text-wine"> <Heart size={17} fill={saved ? 'currentColor' : 'none'} /> </button>; }
export function AddToCartButton({ book, compact = false }: { book: Book; compact?: boolean }) { const { add } = useCart(); const [added, setAdded] = useState(false); useEffect(() => { const handler = (event: Event) => { const custom = event as CustomEvent<Book>; if (custom.detail.id === book.id) { add(book); setAdded(true); window.setTimeout(() => setAdded(false), 1300); } }; window.addEventListener('chapterone-add', handler); return () => window.removeEventListener('chapterone-add', handler); }, [add, book]); return <button onClick={() => { add(book); setAdded(true); window.setTimeout(() => setAdded(false), 1300); }} aria-label={`Add ${book.title} to cart`} className={`inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold transition hover:border-wine hover:text-wine ${compact ? '' : 'px-5'} ${added ? 'border-moss text-moss' : ''}`}>{added ? <Check size={14} /> : <ShoppingBag size={14} />}{added ? 'Added' : compact ? 'Add' : 'Add to cart'}</button>; }
