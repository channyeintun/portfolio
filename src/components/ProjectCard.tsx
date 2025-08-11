import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import type { Project } from "@/lib/types";
import { ArrowUpRight, Briefcase, Paintbrush } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Separator } from "./ui/separator";
import { Spotlight } from "./ui/spotlight";

export default function ProjectCard({ title, description, techStack, images, link, videoUrl, dataAiHint, company, designerName, designerUrl }: Project) {
  const isYoutubeVideo = videoUrl && videoUrl.includes("youtube.com/watch");
  const videoId = isYoutubeVideo ? new URL(videoUrl).searchParams.get('v') : null;

  return (
    <div className="relative dark:bg-zinc-600/30 overflow-hidden p-[1px] rounded-lg flex w-full h-full">
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={300}
      />
      <Card className="flex flex-col overflow-hidden bg-background border-0 relative z-10 w-full h-full">
        <CardHeader className="p-0">
          {isYoutubeVideo && videoId ? (
            <div className="aspect-video relative">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-t-lg"
              ></iframe>
            </div>
          ) : (
            <Carousel className="w-full group">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative">
                      <Image
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        fill
                        className="object-cover rounded-t-lg object-top"
                        data-ai-hint={dataAiHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 disabled:opacity-0 opacity-100 transition-opacity bg-background" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 disabled:opacity-0 opacity-100 transition-opacity bg-background" />
                </>
              )}
            </Carousel>
          )}
        </CardHeader>
        <CardContent className="flex-grow pt-6">
          <CardTitle className="text-2xl font-headline">{title}</CardTitle>
          <CardDescription className="mt-2 text-base text-muted-foreground font-thin">{description}</CardDescription>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            {company && (
              <Badge variant="outline" className="flex items-center gap-1.5 py-1 px-2.5">
                <Briefcase className="h-4 w-4" />
                <span>{company}</span>
              </Badge>
            )}
            {designerName && (
              <Badge variant="outline" className="flex items-center gap-1.5 py-1 px-2.5">
                <Paintbrush className="h-4 w-4" />
                {designerUrl ? (
                  <Link href={designerUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span>UI/UX by {designerName}</span>
                  </Link>
                ) : (
                  <span>UI/UX by {designerName}</span>
                )}
              </Badge>
            )}
            {(company || designerName) && techStack.length > 0 && <Separator orientation="vertical" className="h-4" />}
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" variant="outline" disabled={link === "#"}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {link === "#" ? "Link Coming Soon" : (link.includes("youtube.com/watch") ? "Watch on YouTube" : "View Project")}
              {link !== "#" && <ArrowUpRight className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
