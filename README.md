# ChapterOne Books

A production-minded Next.js 15 App Router storefront for an independent online bookstore.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

The UI runs in demo mode without external credentials. Add the environment variables in `.env.local` to enable Supabase sessions, Prisma persistence, Stripe Checkout, and newsletter storage.

## Stack

- Next.js 15 App Router + TypeScript + Tailwind CSS
- Framer Motion + Lucide for restrained motion and icons
- Supabase SSR helpers for cookie-backed Auth
- Prisma PostgreSQL schema and initial migration
- Stripe Checkout Sessions for one-time book orders
- React Hook Form / Zod-ready form boundaries and route validation
- Vitest test setup for isolated business logic

## Database

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

The seed creates 112 books across multiple categories, authors, inventory records, and a `WELCOME10` coupon. For Supabase, use the pooled `DATABASE_URL` at runtime and the direct connection in `DIRECT_URL` for migrations.

## Routes

Storefront: `/`, `/shop`, `/categories`, `/search`, `/book/[slug]`, `/about`, `/contact`, `/faq`, `/wishlist`, `/cart`, `/checkout`, `/order-success`.

Account and operations: `/dashboard`, `/admin`.

Server routes: `/api/search`, `/api/newsletter`, `/api/checkout`.

For launch, add a Stripe webhook route that marks orders paid from `checkout.session.completed`, then connect admin routes to a server-side role check using Supabase `app_metadata` and RLS policies. The UI and schema already provide the ownership boundaries for that wiring.
