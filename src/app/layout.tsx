import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ["400", "700"], variable: '--font-headline' });

export const metadata: Metadata = {
  title: 'Chan Nyein Tun - Frontend Developer Portfolio',
  description: 'Portfolio of Chan Nyein Tun, a frontend developer specializing in React.js and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          playfairDisplay.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
