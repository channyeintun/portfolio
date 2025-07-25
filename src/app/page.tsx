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
            <p>Hi! I'm a</p>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              <span className="text-primary">Frontend</span> Developer
            </h1>
          </div>
          <div className="max-w-2xl">
            <p className="mb-6 text-lg md:text-xl">
              I&apos;m glad you&apos;re here. Take a look around and discover what I have to offer.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I'm an experienced software engineer with 5 years specializing in React.js and Next.js. Passionate about building modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center flex-wrap">
            <Button asChild size="lg" className="rounded-md bg-gradient-to-b from-white/10 bg-red-500 text-gray-100 relative shadow-inner shadow-gray-900/20 motion-safe:transition active:scale-98 grid place-items-center after:content-[''] after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-b after:from-white/40 after:to-white/10 after:opacity-70 hover:after:opacity-100 after:motion-safe:transition">
              <Link href="/projects"><span className='text-shadow-lg/20 [text-shadow:0_1px_1px_#991b1b]'>View My Work</span></Link>
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
