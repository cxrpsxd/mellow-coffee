import type { Metadata } from 'next';
import { Unbounded, Inter } from 'next/font/google';
import './globals.css';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Mellow Coffee — уютная кофейня с обжаркой под себя',
  description:
    'Mellow Coffee: мягкий свет, напитки без спешки, кофе собственной обжарки. Меню, интерьер, адрес и бронирование стола.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
