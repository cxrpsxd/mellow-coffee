import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mellow Coffee — уютная кофейня с обжаркой под себя',
  description:
    'Mellow Coffee: мягкий свет, напитки без спешки, кофе собственной обжарки. Меню, интерьер, адрес и бронирование стола.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
