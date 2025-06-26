import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import type { Project } from "@/lib/types";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Separator } from "./ui/separator";

export default function ProjectCard({ title, description, techStack, images, link, dataAiHint, company }: Project) {
  const isYoutubeVideo = link.includes("youtube.com/watch");
  const videoId = isYoutubeVideo ? new URL(link).searchParams.get('v') : null;

  return (
    <Card className="flex flex-col overflow-hidden transition-colors duration-300 hover:border-primary">
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
                      className="object-cover rounded-t-lg"
                      data-ai-hint={dataAiHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80" />
              </>
            )}
          </Carousel>
        )}
      </CardHeader>
      <CardContent className="flex-grow pt-6">
        <CardTitle className="text-2xl font-headline">{title}</CardTitle>
        <CardDescription className="mt-2 text-base text-muted-foreground">{description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          {company && (
            <Badge variant="outline" className="flex items-center gap-1.5 py-1 px-2.5">
              <Briefcase className="h-4 w-4" />
              <span>{company}</span>
            </Badge>
          )}
          {company && techStack.length > 0 && <Separator orientation="vertical" className="h-4" />}
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline" disabled={link === "#"}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {link === "#" ? "Link Coming Soon" : (isYoutubeVideo ? "Watch on YouTube" : "View Project")}
            {link !== "#" && <ArrowUpRight className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
