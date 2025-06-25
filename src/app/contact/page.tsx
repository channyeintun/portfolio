import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Have a project in mind, a question, or just want to say hi? The best way to reach me is through email or my social channels.
        </p>
      </div>

      <div className="space-y-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold font-headline text-center">Contact Information</h2>
        <div className="space-y-6">
          <a href="mailto:contact@channyeintun.dev" className="flex items-center gap-4 group p-4 rounded-lg transition-colors hover:bg-card">
            <Mail className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">chanyeintun@gmail.com</p>
            </div>
          </a>
          <Link href="https://github.com/channyeintun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg transition-colors hover:bg-card">
            <Github className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">github.com/channyeintun</p>
            </div>
          </Link>
          <Link href="https://linkedin.com/in/channyeintun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg transition-colors hover:bg-card">
            <Linkedin className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">linkedin.com/in/channyeintun</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
