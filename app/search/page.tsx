'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { books } from '@/lib/data';
import { BookCard } from '@/components/book-card';
import { SectionHeading } from '@/components/ui';
function SearchResults() { const query = useSearchParams().get('q') ?? ''; const results = books.filter((book) => [book.title, book.author, book.genre, book.publisher, book.isbn].some((value) => value.toLowerCase().includes(query.toLowerCase()))); return <main className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-20"><SectionHeading eyebrow="Search" title={query ? `Results for “${query}”` : 'Search the catalogue'} copy="Look by title, author, genre, publisher, or ISBN." />{query && <p className="mt-10 text-sm text-ink/50">{results.length} result{results.length === 1 ? '' : 's'}</p>}{results.length ? <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-7">{results.map((book) => <BookCard key={book.id} book={book} />)}</div> : query ? <div className="mt-12 border-y border-line py-20 text-center"><p className="display-title text-4xl">Nothing found yet.</p><p className="mt-3 text-sm text-ink/55">Try a different title, author, or genre.</p></div> : <div className="mt-12 text-sm text-ink/55">Use the search field above to get started.</div>}</main>; }
export default function SearchPage() { return <Suspense fallback={<main className="mx-auto max-w-[1440px] px-5 py-20">Loading search…</main>}><SearchResults /></Suspense>; }
