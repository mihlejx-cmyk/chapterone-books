export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  genre: string;
  publisher: string;
  isbn: string;
  description: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviews: number;
  pages: number;
  format: 'Hardcover' | 'Paperback' | 'eBook';
  published: string;
  cover: string;
  tone: string;
  featured?: boolean;
};

const covers = [
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85',
];

export const books: Book[] = [
  { id: 'b1', slug: 'the-everyday-practice', title: 'The Everyday Practice', author: 'Sophie Nelson', authorSlug: 'sophie-nelson', genre: 'Wellness', publisher: 'Lantern House', isbn: '978-1-83921-004-7', description: 'A quiet, generous guide to building rituals that make an ordinary life feel more like your own.', price: 390, salePrice: 319, rating: 4.8, reviews: 128, pages: 224, format: 'Hardcover', published: '2025', cover: covers[0], tone: 'cream', featured: true },
  { id: 'b2', slug: 'the-wild-observer', title: 'The Wild Observer', author: 'Jane Alden', authorSlug: 'jane-alden', genre: 'Nature writing', publisher: 'North & Field', isbn: '978-1-83921-118-1', description: 'A luminous field journal for noticing the wildness that persists at the edge of every city.', price: 420, rating: 4.9, reviews: 94, pages: 288, format: 'Hardcover', published: '2024', cover: covers[1], tone: 'black', featured: true },
  { id: 'b3', slug: 'small-kin', title: 'Small Kin', author: 'Claire Louise Bennett', authorSlug: 'claire-louise-bennett', genre: 'Essays', publisher: 'Morrow Press', isbn: '978-1-83921-241-6', description: 'Essays on memory, place, and the strange intimacy of everyday life.', price: 360, rating: 4.7, reviews: 212, pages: 192, format: 'Paperback', published: '2025', cover: covers[2], tone: 'moss', featured: true },
  { id: 'b4', slug: 'the-cartographers', title: 'The Cartographers', author: 'Peng Shepherd', authorSlug: 'peng-shepherd', genre: 'Fiction', publisher: 'Riverbend', isbn: '978-1-83921-382-6', description: 'A secret map, a missing father, and a story that asks who gets to draw the edges of a place.', price: 410, salePrice: 350, rating: 4.6, reviews: 316, pages: 352, format: 'Paperback', published: '2024', cover: covers[3], tone: 'sand', featured: true },
  { id: 'b5', slug: 'a-line-in-the-world', title: 'A Line in the World', author: 'Dorothy Whipple', authorSlug: 'dorothy-whipple', genre: 'Literary fiction', publisher: 'Faber & Faber', isbn: '978-1-83921-401-4', description: 'A tender, atmospheric novel about home, distance, and the lines we inherit.', price: 385, rating: 4.8, reviews: 74, pages: 304, format: 'Hardcover', published: '2025', cover: covers[4], tone: 'wine', featured: true },
  { id: 'b6', slug: 'the-garden-again', title: 'The Garden Again', author: 'Yasmin Khan', authorSlug: 'yasmin-khan', genre: 'Food & drink', publisher: 'Common Table', isbn: '978-1-83921-598-1', description: 'Recipes and stories for cooking with more patience, curiosity, and care.', price: 495, rating: 4.9, reviews: 51, pages: 240, format: 'Hardcover', published: '2025', cover: covers[5], tone: 'olive' },
  { id: 'b7', slug: 'after-the-rain', title: 'After the Rain', author: 'Maya Rensburg', authorSlug: 'maya-rensburg', genre: 'Poetry', publisher: 'Murmur Editions', isbn: '978-1-83921-677-3', description: 'A small, sharp collection about weathering change and finding a softer language for it.', price: 270, rating: 4.8, reviews: 38, pages: 112, format: 'Paperback', published: '2025', cover: covers[0], tone: 'blue' },
  { id: 'b8', slug: 'a-brief-history-of-tomorrow', title: 'A Brief History of Tomorrow', author: 'Nandi Molefe', authorSlug: 'nandi-molefe', genre: 'Nonfiction', publisher: 'New Atlas', isbn: '978-1-83921-732-9', description: 'A hopeful, clear-eyed look at the ideas shaping the next decade of human life.', price: 440, rating: 4.5, reviews: 120, pages: 320, format: 'Paperback', published: '2023', cover: covers[1], tone: 'ochre' },
  { id: 'b9', slug: 'the-night-library', title: 'The Night Library', author: 'Matt Haig', authorSlug: 'matt-haig', genre: 'Fiction', publisher: 'Viking', isbn: '978-1-83921-824-1', description: 'Between life and death there is a library, and within that library, endless lives to try.', price: 390, rating: 4.4, reviews: 486, pages: 304, format: 'Paperback', published: '2022', cover: covers[2], tone: 'navy' },
  { id: 'b10', slug: 'how-to-do-nothing', title: 'How to Do Nothing', author: 'Jenny Odell', authorSlug: 'jenny-odell', genre: 'Culture', publisher: 'Melville House', isbn: '978-1-83921-907-1', description: 'Resisting the attention economy and reclaiming your life from the tyranny of productivity.', price: 370, rating: 4.7, reviews: 224, pages: 256, format: 'Paperback', published: '2021', cover: covers[3], tone: 'terracotta' },
  { id: 'b11', slug: 'the-summer-book', title: 'The Summer Book', author: 'Tove Jansson', authorSlug: 'tove-jansson', genre: 'Fiction', publisher: 'Sort Of Books', isbn: '978-1-83921-116-7', description: 'An island, a grandmother, and a summer of brilliant, unhurried conversations.', price: 330, rating: 4.9, reviews: 302, pages: 176, format: 'Paperback', published: '2020', cover: covers[4], tone: 'sun' },
  { id: 'b12', slug: 'the-art-of-rest', title: 'The Art of Rest', author: 'Claudia Hammond', authorSlug: 'claudia-hammond', genre: 'Wellness', publisher: 'Canongate', isbn: '978-1-83921-222-5', description: 'Why rest is essential, how to find it, and the small changes that make it possible.', price: 350, rating: 4.6, reviews: 89, pages: 240, format: 'Hardcover', published: '2024', cover: covers[5], tone: 'lavender' },
];

export const categories = [
  { name: 'Fiction', count: 842, note: 'Stories that stay with you.' },
  { name: 'Nonfiction', count: 604, note: 'Ideas for a life well lived.' },
  { name: 'Poetry', count: 198, note: 'A little more music in the day.' },
  { name: 'Children’s books', count: 328, note: 'The stories that become memories.' },
  { name: 'Wellness', count: 156, note: 'Small rituals, better days.' },
  { name: 'Food & drink', count: 210, note: 'Gather around something good.' },
];

export const testimonials = [
  { quote: 'The kind of bookstore that makes you want to put your phone down and stay awhile.', name: 'Lerato M.', detail: 'Johannesburg' },
  { quote: 'Beautifully curated, wonderfully packaged, and always a thoughtful recommendation.', name: 'Sam C.', detail: 'Cape Town' },
  { quote: 'ChapterOne has become my first stop for gifts — and my best excuse to buy another book.', name: 'Priya N.', detail: 'Durban' },
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug) ?? books[0];
}
