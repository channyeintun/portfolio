import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/lib/types";
import { Award, Briefcase, Calendar, GraduationCap, MapPin, Home, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
  "React Native", "Redux", "GraphQL", "REST APIs", "TailwindCSS",
  "HTML5", "CSS3", "a11y", "Go", "Java", "Spring Boot", "Git"
];

const workExperience: Experience[] = [
  {
    company: "BinaryLab",
    companyUrl: "https://binarylab.io/",
    location: "Yangon, Myanmar",
    workType: "Remote",
    roles: [
      {
        title: "Technical Project Manager",
        period: "May 2025 – present",
        description: "Promoted to oversee project lifecycles, from planning and resource allocation to final delivery. Act as a bridge between technical teams and stakeholders to ensure project goals are met on time and within budget."
      },
      {
        title: "Lead Frontend Developer",
        period: "Oct 2024 – Apr 2025",
        description: "Guided the frontend team in developing high-quality, user-centric interfaces. Established best practices, conducted code reviews, and drove the technical direction of the user experience."
      }
    ]
  },
  {
    company: "Nexcode",
    companyUrl: "https://www.nexcode.com.mm/",
    location: "Mandalay, Myanmar",
    workType: "Remote",
    roles: [{
      title: "Senior Software Engineer",
      period: "Mar 2024 – Sep 2024",
      description: "Returned to lead technical initiatives and mentor junior engineers. Architected complex features and improved code quality and performance across major projects."
    }]
  },
  {
    company: "Loftal Co., Ltd.",
    companyUrl: "https://loftal.jp/",
    location: "Japan",
    workType: "Remote",
    roles: [{
      title: "Frontend Engineer",
      period: "Mar 2023 – Feb 2024",
      description: "Transformed designs into responsive and interactive user interfaces. Collaborated closely with developers and QA teams to ensure high-quality implementation and seamless integration."
    }]
  },
  {
    company: "NexStack Pte. Ltd",
    companyUrl: "https://nexstack.sg/",
    location: "Singapore",
    workType: "Remote",
    roles: [{
      title: "Full Stack Developer",
      period: "Aug 2022 – Feb 2023",
      description: "Engineered end-to-end features for web platforms, working across the entire stack from database to UI. Focused on creating scalable and robust solutions."
    }]
  },
  {
    company: "Nexcode",
    companyUrl: "https://www.nexcode.com.mm/",
    location: "Mandalay, Myanmar",
    workType: "On-site",
    roles: [{
      title: "Software Engineer",
      period: "Aug 2020 – Jul 2022",
      description: "Developed and maintained web applications, contributing to both front-end and back-end development cycles. Collaborated in a team environment to ship new features and fix bugs."
    }]
  }
];

const certifications = [
  {
    name: "Advanced React",
    issuer: "Scrimba",
    date: "September 15, 2020",
    url: "https://v1.scrimba.com/certificate/umrd4Yua/greact",
    icon: Award,
  },
  {
    name: "The AI Engineer Path",
    issuer: "Scrimba",
    date: "June 14, 2025",
    url: "https://scrimba.com/certificate-cert2uNje7fsAJCcDBPuQHx4PB877WbvpwBXLnv",
    icon: Award,
  },
];

const readingList = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: "https://placehold.co/150x225.png",
    dataAiHint: "book cover"
  },
  {
    title: "Surrounded by Idiots",
    author: "Thomas Erikson",
    image: "https://placehold.co/150x225.png",
    dataAiHint: "book cover"
  },
  {
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    image: "https://placehold.co/150x225.png",
    dataAiHint: "book cover"
  },
];


export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold font-headline text-center">About Me</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
        I'm a frontend developer who loves crafting elegant code and is always excited to learn something new. Outside of the digital world, I'm an avid swimmer, a keen reader, and enjoy playing the guitar—hobbies that fuel both my creativity and my approach to problem-solving.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">My Philosophy</h2>
        <Card className="max-w-3xl mx-auto bg-card/50">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-foreground mb-6">
              I firmly believe that the foundation of any successful team and project is built on open communication and a positive, collaborative attitude. Technical skills are crucial, but it's the ability to share ideas clearly, listen actively, and support teammates that transforms a group of individuals into a high-performing unit.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground relative">
              <p className="mb-2 text-lg">"The single biggest problem in communication is the illusion that it has taken place."</p>
              <footer className="text-sm not-italic text-primary/80">— George Bernard Shaw</footer>
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-12">Work Experience</h2>
        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {workExperience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[40px] top-2 h-3 w-3 rounded-full bg-primary border-2 border-background" />
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">
                    {exp.companyUrl ? (
                      <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground mt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.workType && (
                      <div className="flex items-center gap-2">
                        {exp.workType === 'Remote' ? <Globe className="h-4 w-4" /> : <Home className="h-4 w-4" />}
                        <span>{exp.workType}</span>
                      </div>
                    )}
                    {exp.roles.length > 1 && 
                      <Badge variant="secondary" className="shrink-0">{`${exp.roles.length} roles`}</Badge>
                    }
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative">
                    {exp.roles.length > 1 && (
                      <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
                    )}
                    <div className="space-y-8">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="relative pl-8">
                          <div className="absolute left-2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-background border-2 border-primary" />
                          <div>
                            <h3 className="text-xl font-headline font-semibold">{role.title}</h3>
                            <p className="text-sm text-primary mt-1">{role.period}</p>
                            <p className="text-muted-foreground mt-2">{role.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Education</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline">Bachelor of Computer Science (Honours)</CardTitle>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Yadanabon University</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mandalay, Myanmar</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Graduated 2019</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Link key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full transition-colors duration-300 group-hover:border-primary">
                <CardHeader className="flex flex-row items-center gap-4">
                  <cert.icon className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <CardTitle className="text-xl font-headline">{cert.name}</CardTitle>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-12">What I'm Reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {readingList.map((book, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 flex flex-col items-center">
                <Image
                  src={book.image}
                  alt={`${book.title} book cover`}
                  width={150}
                  height={225}
                  className="rounded-md shadow-md mb-4"
                  data-ai-hint={book.dataAiHint}
                />
                <CardTitle className="mt-2 text-lg font-headline">{book.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
