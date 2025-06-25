import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    title: "Channel.org Frontend",
    description: "Built a new frontend for a distributed social media platform, a fork of Mastodon, enhancing user experience and performance.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x401.png", "https://placehold.co/600x402.png"],
    link: "#",
    dataAiHint: "social media",
    company: "BinaryLab",
  },
  {
    title: "SarPhat Publishing Platform",
    description: "A comprehensive digital publishing solution for authors and publishers in Myanmar, featuring an ebook reader and marketplace.",
    techStack: ["React", "Redux", "Firebase", "Styled-Components"],
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x401.png"],
    link: "#",
    dataAiHint: "books publishing",
    company: "A-STAR",
  },
  {
    title: "Anicana Web3 Platform",
    description: "Developed the frontend for a decentralized platform for anime and manga fans, integrating with blockchain technologies.",
    techStack: ["Next.js", "TypeScript", "Ethers.js", "GraphQL"],
    images: ["https://placehold.co/600x400.png"],
    link: "#",
    dataAiHint: "anime crypto",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my work, skills, and experience. Built with the latest web technologies.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    images: ["https://placehold.co/600x400.png"],
    link: "/",
    dataAiHint: "developer portfolio",
  },
   {
    title: "E-commerce Dashboard",
    description: "A comprehensive analytics dashboard for an e-commerce client to track sales, inventory, and customer behavior.",
    techStack: ["React", "D3.js", "Node.js", "Express"],
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x401.png"],
    link: "#",
    dataAiHint: "dashboard analytics",
    company: "Oozou",
  },
  {
    title: "Mobile Banking App",
    description: "A cross-platform mobile banking application with a focus on security and user experience.",
    techStack: ["React Native", "TypeScript", "Redux Saga"],
    images: ["https://placehold.co/600x400.png"],
    link: "#",
    dataAiHint: "mobile banking",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">My Projects</h1>
        <p className="text-lg text-muted-foreground mt-2">A selection of my work. Links to be updated soon.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
