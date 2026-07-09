'use client';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { books } from '@/lib/data';
import { BookCard } from '@/components/book-card';
import { SectionHeading } from '@/components/ui';
export default function WishlistPage() { return <main className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-20"><SectionHeading eyebrow="Saved for later" title="Your wishlist" copy="Keep the books you’re thinking about close by." /><div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-7">{books.slice(0, 4).map((book) => <BookCard key={book.id} book={book} />)}</div><div className="mt-16 flex items-center justify-center gap-2 rounded-2xl bg-linen py-10 text-center"><Heart size={18} className="text-wine" /><p className="text-sm text-ink/60">Sign in to sync your wishlist across devices. <Link href="/dashboard" className="font-semibold text-wine underline">Go to account</Link></p></div></main>; }
