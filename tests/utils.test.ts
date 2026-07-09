import { describe, expect, it } from 'vitest';
import { formatPrice, slugify } from '@/lib/utils';
describe('store utilities', () => { it('formats ZAR prices', () => expect(formatPrice(319)).toContain('319')); it('creates stable slugs', () => expect(slugify('The Everyday Practice')).toBe('the-everyday-practice')); });
