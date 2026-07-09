import { NextResponse } from 'next/server';
import { books } from '@/lib/data';
export async function GET(request: Request) { const query = new URL(request.url).searchParams.get('q')?.toLowerCase() ?? ''; return NextResponse.json(books.filter((book) => [book.title, book.author, book.genre, book.publisher, book.isbn].some((field) => field.toLowerCase().includes(query))).slice(0, 24)); }
