import { Button } from '@/components/ui/button';
import { BookOpen, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full"></div>
        <div className="container z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-4 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Chan Nyein Tun
            </h1>
            <p className="text-2xl font-medium text-primary/80 dark:text-primary-foreground/80 md:text-3xl font-headline">
              Frontend Developer
            </p>
          </div>
          <div className="max-w-2xl">
            <p className="text-primary mb-6 text-lg italic md:text-xl">
              &ldquo;Welcome! I&apos;m glad you&apos;re here. Take a look around and discover what I have to offer.&rdquo;
            </p>
            <p className="text-muted-foreground md:text-lg">
              Experienced software engineer with 5 years specializing in React.js and Next.js. Passionate about building modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                Read My Blog
                <BookOpen className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <Link
              href="https://github.com/channyeintun"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              href="https://linkedin.com/in/channyeintun"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
