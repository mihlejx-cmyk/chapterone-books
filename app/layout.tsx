import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/cart-provider';
import { SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: 'ChapterOne Books', template: '%s · ChapterOne Books' },
  description: 'Thoughtfully chosen books for curious lives.',
  openGraph: { title: 'ChapterOne Books', description: 'Find your next chapter.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><CartProvider><SiteHeader />{children}<SiteFooter /></CartProvider></body></html>;
}
