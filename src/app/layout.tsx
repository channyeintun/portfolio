import type { Metadata } from 'next';
import { DM_Serif_Text, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const dmSerifText = DM_Serif_Text({ 
  subsets: ['latin'], 
  weight: "400", 
  style: ['normal', 'italic'],
  variable: '--font-headline'
});

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
          'min-h-screen bg-background font-sans bg-grid-pattern',
          inter.variable,
          dmSerifText.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
