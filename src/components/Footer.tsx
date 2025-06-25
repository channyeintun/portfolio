import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Chan Nyein Tun. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/channyeintun"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/channyeintun"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
