import type { MetadataRoute } from 'next';
import { books } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return [{ url: base, lastModified: new Date() }, ...['shop', 'categories', 'about', 'contact', 'faq'].map((path) => ({ url: `${base}/${path}`, lastModified: new Date() })), ...books.map((book) => ({ url: `${base}/book/${book.slug}`, lastModified: new Date(book.published) }))];
}
