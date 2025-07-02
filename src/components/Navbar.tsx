'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const mobileNavLinks = [...navLinks, { href: '/contact', label: 'Contact' }];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Code className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">FrontendFolio</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => {
            const isExternal = href.startsWith('http');
            if (isExternal) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium transition-colors hover:text-primary text-foreground/60"
                >
                  {label}
                </a>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            );
          })}
          <Button asChild size="sm">
             <Link href="/contact">Contact</Link>
          </Button>
        </nav>
        <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-6 py-6">
            {mobileNavLinks.map(({ href, label }) => {
              const isExternal = href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={toggleMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium transition-colors hover:text-primary text-foreground/80"
                  >
                    {label}
                  </a>
                );
              }
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    pathname === href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
