import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";
import sarphat from "@/assets/sarphat.webp";
import anicana from "@/assets/anicana.webp";
import home_channel from "@/assets/home-channel.webp";
import web_channel from "@/assets/web-channel.webp";
import public_channel from "@/assets/public-channel.webp";
import dashboard_channel from "@/assets/dashboard-channel.webp";
import meec from "@/assets/meec.webp";
import strapi_meec from "@/assets/strapi-meec.webp";
import sssp from "@/assets/ss-sp.webp";
import nexretail from "@/assets/nexretail.webp";
import hr from "@/assets/hr.webp";
import invoiceapp from "@/assets/invoice-app.webp";
import code2 from "@/assets/code2.webp";
import ellsa from "@/assets/ellsa-ai.webp";
import live2dcubism from "@/assets/live2d-cubism-ai.webp";
import fbdl from "@/assets/fbdl.webp";
import offlinelearning from "@/assets/offline-learn.webp";
import qr from "@/assets/qr.webp";
import spwrite from "@/assets/spwrite.webp";

const designer = {
  designerName: "Novem Pai",
  designerUrl: "https://dribbble.com/novempai/",
}

const projects: Project[] = [
  {
    title: "Resolve Git Conflicts Easily with Github Desktop [Burmese]",
    description: "A tutorial video explaining how to resolve Git conflicts using the GitHub Desktop application, presented in Burmese.",
    techStack: ["Git", "GitHub Desktop"],
    images: [],
    link: "https://www.youtube.com/watch?v=fHCbK-F9-Q8",
    dataAiHint: "git conflict",
  },
  {
    title: "Channel.org",
    description: "A distributed social media platform, a fork of Mastodon, enhancing user experience and performance.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React Query", "Ruby on Rails", "PostgreSQL", "Shadcn/UI"],
    images: [home_channel, web_channel, public_channel, dashboard_channel],
    link: "https://home.channel.org/",
    dataAiHint: "social media",
    company: "Channels",
  },
  {
    title: "SarPhat Publishing Platform",
    description: "A comprehensive digital publishing solution for authors and publishers in Myanmar",
    techStack: ["React.js", "Next.js", "JavaScript", "XState", "Java", "Spring Boot", "MySQL"],
    images: [sarphat, spwrite],
    link: "https://sarphat.com/",
    dataAiHint: "online publishing",
    company: "SarPhat",
    ...designer
  },
  {
    title: "MEEC Website",
    description: "A responsive website with content management features for MEEC.",
    techStack: ["Next.js", "TypeScript", "Strapi.js", "PostgreSQL", "GraphQL", "PM2"],
    images: [meec, strapi_meec],
    link: "https://meec-web.vercel.app/en",
    dataAiHint: "website development",
    company: "MEEC",
    ...designer
  },
  {
    title: "Anicana Web3 Platform",
    description: "A decentralized platform for games, integrating with blockchain technologies.",
    techStack: ["React.js", "TypeScript", "web3auth", "PHP", "Laravel"],
    images: [anicana],
    link: "https://anicana.org/",
    dataAiHint: "Loftal",
    company: "Loftal",
  },
  {
    title: "Sheng Siong Supplier Portal",
    description: "A supplier portal including microservices and a data analytics dashboard.",
    techStack: ["Next.js", "Strapi.js", "Node.js", "Express"],
    images: [sssp],
    link: "https://shengsiong.com.sg/",
    dataAiHint: "dashboard analytics",
    company: "NexStack",
  },
  {
    title: "Invoice and Quotation",
    description: "Invoice & Quotation platform",
    techStack: ["Next.js", "Strapi.js", "GraphQL"],
    images: [invoiceapp],
    link: "https://mystock.onlineinvoices.com/",
    dataAiHint: "Invoice and Quotation",
    company: "NexStack",
  },
  {
    title: "Nex App HR Management System",
    description: "A mobile application for the Nex App HR Management System, a comprehensive solution for managing human resources.",
    techStack: ["Next.js", "Strapi.js", "React Native", "GraphQL", "Pdf.js", "Puppeteer"],
    images: [hr],
    link: "#",
    dataAiHint: "HR Management System",
    company: "NexStack",
  },
  {
    title: "NexRetail POS and Backoffice Management System",
    description: "POS and Backoffice Management System",
    techStack: ["React.js", "Java", "Spring Boot", "MySQL"],
    images: [nexretail],
    link: "https://digitalbase.com.mm/enterprise",
    dataAiHint: "POS and Backoffice Management System",
    company: "Nexcode",
    ...designer
  },
  {
    title: "Code2 E-Learning Platform",
    description: "A comprehensive e-learning platform with features for online courses",
    techStack: ["React.js", "Java", "Spring Boot", "MySQL"],
    images: [code2],
    link: "https://code2learning.com/",
    dataAiHint: "E-Learning Platform",
    company: "Nexcode",
    ...designer
  },
  {
    title: "ELLA Translation AI",
    description: "An AI-powered translation platform, enabling real-time language translation and transcription.",
    techStack: ["React.js", "Live2D Cubism", "OpenAI", "Google Speech Recognition", "Azure AI Speech", "PHP", "Laravel"],
    images: [ellsa, live2dcubism],
    link: "https://translate-dev.loftal.jp/",
    dataAiHint: "Loftal",
    company: "Loftal",
  },
  {
    title: "HD Facebook Video Downloader",
    description: "An FFMPEG-powered app for downloading Facebook videos in high definition.",
    techStack: ["Next.js", "JavaScript", "ffmpeg"],
    images: [fbdl],
    link: "https://save-fb-video.vercel.app/",
    dataAiHint: "facebook video downloader",
  },
  {
    title: "Offline Learning App",
    description: "A simple offline learning app to save progress and access content without internet.",
    techStack: ["Go", "HTML5"],
    images: [offlinelearning],
    link: "https://github.com/channyeintun/offline-learning-platform",
    dataAiHint: "offline learning app",
  },
  {
    title: "Implemented Rounded Shape for QR Code",
    description: "Contributed to the QR Code library to implement rounded shapes for QR codes, enhancing visual appeal.",
    techStack: ["JavaScript", "QR"],
    images: [qr],
    link: " https://github.com/devtrice/qr-x/pull/51",
    dataAiHint: "Rounded QR Code",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">My Projects</h1>
        <p className="text-lg text-muted-foreground mt-2">A selection of my work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
