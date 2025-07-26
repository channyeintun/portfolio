'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

// Navigation links
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
    <>
      <header className="stuck-top">
        <div className='wrapper'>
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Code className="h-8 w-8 text-primary" />
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
                      className="text-base font-medium transition-colors hover:text-primary text-foreground/60"
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
                      'text-base font-medium transition-colors hover:text-primary',
                      pathname === href ? 'text-primary' : 'text-foreground/60'
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
              <Button
                asChild
                size="sm"
                className="rounded-md bg-gradient-to-b from-white/10 bg-red-500 px-4 py-1 text-gray-100 relative shadow-inner shadow-gray-900/20 motion-safe:transition active:scale-98 h-9 grid place-items-center after:content-[''] after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-b after:from-white/40 after:to-white/10 after:opacity-70 hover:after:opacity-100 after:motion-safe:transition"
              >
                <Link href="/contact">
                  <span className="text-shadow-lg/20 [text-shadow:0_1px_1px_#991b1b] text-base">Contact</span>
                </Link>
              </Button>
            </nav>
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
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
      <style>
        {`
        .stuck-top {
          container-type: scroll-state;
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          background: transparent;

          @supports (container-type: scroll-state) {
            .wrapper {
                @container scroll-state(stuck: top) {
                  background: hsl(var(--background) / 0.95);
                  backdrop-filter: blur(10px);
                  border-bottom: 1px solid hsl(var(--border) / 0.4);
              }
            }
          }

          /* Fallback for browsers that don't support scroll-state */
          @supports not (container-type: scroll-state) {
            .stuck-top > .wrapper {
              background: hsl(var(--background) / 0.95);
              backdrop-filter: blur(10px);
              border-bottom: 1px solid hsl(var(--border) / 0.4);
            }
          }
      `}</style>
    </>
  );
}