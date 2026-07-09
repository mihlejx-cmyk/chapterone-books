import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#191918',
        paper: '#ffffff',
        linen: '#f5f3ef',
        wine: '#8f2d33',
        moss: '#405a46',
        line: '#dedbd5',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: { book: '0 24px 55px rgba(26, 22, 18, .12)' },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};

export default config;
