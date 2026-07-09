'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Book } from '@/lib/data';

type CartItem = { book: Book; quantity: number; saved?: boolean };
type CartContextValue = { items: CartItem[]; add: (book: Book) => void; remove: (id: string) => void; update: (id: string, quantity: number) => void; subtotal: number; count: number };
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { const saved = window.localStorage.getItem('chapterone-cart'); if (saved) setItems(JSON.parse(saved)); }, []);
  useEffect(() => { window.localStorage.setItem('chapterone-cart', JSON.stringify(items)); }, [items]);
  const value = useMemo(() => ({ items, add: (book: Book) => setItems((current) => { const found = current.find((item) => item.book.id === book.id); return found ? current.map((item) => item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { book, quantity: 1 }]; }), remove: (id: string) => setItems((current) => current.filter((item) => item.book.id !== id)), update: (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.book.id !== id) : current.map((item) => item.book.id === id ? { ...item, quantity } : item)), subtotal: items.reduce((sum, item) => sum + (item.book.salePrice ?? item.book.price) * item.quantity, 0), count: items.reduce((sum, item) => sum + item.quantity, 0) }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used inside CartProvider'); return context; }
