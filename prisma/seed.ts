import { PrismaClient } from '@prisma/client';
import { books, categories } from '../lib/data';
import { slugify } from '../lib/utils';

const prisma = new PrismaClient();
const extraTitles = ['The Quiet Archive', 'Blue Hour', 'The Long Way Home', 'Notes from Elsewhere', 'The Shape of Water', 'A Field Guide to Wonder', 'The Borrowed Season', 'Good Company', 'The Listening House', 'Things Worth Keeping'];
const extraAuthors = ['Amara Cole', 'Thandi Maseko', 'Eli Winters', 'Ruth Mbeki', 'Jon Bell', 'Mina Kaur', 'Theo James', 'Nia Ford', 'Daniel Kline', 'Lena Hart'];

async function main() {
  const authorMap = new Map<string, string>();
  for (const book of books) {
    const author = await prisma.author.upsert({ where: { slug: book.authorSlug }, update: {}, create: { name: book.author, slug: book.authorSlug, bio: `Author of ${book.title}.` } });
    authorMap.set(book.authorSlug, author.id);
  }
  for (const category of categories) await prisma.category.upsert({ where: { slug: slugify(category.name) }, update: {}, create: { name: category.name, slug: slugify(category.name), description: category.note } });
  const categoryRows = await prisma.category.findMany();
  for (const book of books) {
    const authorId = authorMap.get(book.authorSlug)!;
    const saved = await prisma.book.upsert({ where: { slug: book.slug }, update: {}, create: { slug: book.slug, title: book.title, isbn: book.isbn, description: book.description, publisher: book.publisher, publishedAt: new Date(`${book.published}-06-01`), pages: book.pages, priceCents: book.price * 100, salePriceCents: book.salePrice ? book.salePrice * 100 : null, coverUrl: book.cover, previewImages: [book.cover], rating: book.rating, reviewCount: book.reviews, isFeatured: Boolean(book.featured), authorId, inventory: { create: { quantity: 18, reorderAt: 5 } } } });
    const category = categoryRows.find((row) => row.name.toLowerCase() === book.genre.toLowerCase()) ?? categoryRows[0];
    if (category) await prisma.bookCategory.upsert({ where: { bookId_categoryId: { bookId: saved.id, categoryId: category.id } }, update: {}, create: { bookId: saved.id, categoryId: category.id } });
  }
  for (let i = 0; i < 100; i++) {
    const title = `${extraTitles[i % extraTitles.length]} ${i + 1}`;
    const author = extraAuthors[i % extraAuthors.length];
    const authorSlug = slugify(author);
    const authorRow = await prisma.author.upsert({ where: { slug: authorSlug }, update: {}, create: { name: author, slug: authorSlug, bio: `A new voice in contemporary publishing.` } });
    await prisma.book.upsert({ where: { slug: slugify(title) }, update: {}, create: { slug: slugify(title), title, isbn: `978-1-83921-${String(800 + i).padStart(4, '0')}`, description: `A beautifully considered new book by ${author}, made for curious readers.`, publisher: 'ChapterOne Editions', publishedAt: new Date(2020 + (i % 6), i % 12, 1), pages: 160 + (i % 8) * 24, priceCents: (260 + (i % 9) * 25) * 100, coverUrl: books[i % books.length].cover, previewImages: [books[i % books.length].cover], rating: 4.1 + (i % 8) / 10, reviewCount: 12 + i, isFeatured: i < 8, authorId: authorRow.id, inventory: { create: { quantity: 8 + (i % 20), reorderAt: 5 } } } });
  }
  await prisma.coupon.upsert({ where: { code: 'WELCOME10' }, update: {}, create: { code: 'WELCOME10', percentOff: 10, active: true } });
  console.log('Seeded ChapterOne Books with 112 books.');
}

main().finally(() => prisma.$disconnect());
