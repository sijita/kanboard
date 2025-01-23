import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kanboard',
  description: 'Organize your tasks with Kanboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.className} antialiased flex flex-col`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
