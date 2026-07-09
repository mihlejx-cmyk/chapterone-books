import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
const schema = z.object({ email: z.string().email() });
export async function POST(request: Request) { const parsed = schema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 }); if (process.env.DATABASE_URL) { try { await prisma.newsletterSubscriber.upsert({ where: { email: parsed.data.email }, update: {}, create: { email: parsed.data.email, source: 'footer' } }); } catch (error) { console.error('newsletter subscription failed', error); } } return NextResponse.json({ ok: true }); }
