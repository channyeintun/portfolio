import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import Image from "next/image";

interface LanguageProgressBarProps {
    progress: number;
    url?: string;
    imageUrl?: string | any;
    dataAiHint?: string;
    children: React.ReactNode;
}

export function LanguageProgressBar({ progress, url, imageUrl, dataAiHint, children }: LanguageProgressBarProps) {

    const totalBlocks = 5;
    const filledBlocks = Math.ceil((progress / 100) * totalBlocks);

    const bar = (
        <span className="absolute bottom-0 left-0 w-full h-1 flex gap-0.5" aria-hidden="true">
            {Array.from({ length: totalBlocks }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        "h-1 w-full rounded-full transition-colors",
                        i < filledBlocks ? "bg-primary" : "bg-primary/20",
                        i < filledBlocks && i === filledBlocks - 1 && progress < 100 && "animate-blink-color"
                    )}
                />
            ))}
        </span>
    );

    const content = (
        <span className="relative pb-1.5 px-1 group">
            {children}
            {bar}
            {(url || imageUrl) && <ExternalLink className="absolute -top-0.5 -right-2 h-3.5 w-3.5 transition-all text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary" />}
        </span>
    );

    if (url) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors hover:text-primary underline"
                title="View Certificate"
            >
                {content}
            </a>
        );
    }

    if (imageUrl) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <span
                        className="inline-block transition-colors hover:text-primary cursor-pointer underline"
                        title="View Image"
                    >
                        {content}
                    </span>
                </DialogTrigger>
                <DialogContent className="p-0 border-0 max-w-fit bg-transparent">
                    <DialogHeader className="sr-only">
                        <DialogTitle>{children} progress</DialogTitle>
                        <DialogDescription>A screenshot of language learning progress for {children}.</DialogDescription>
                    </DialogHeader>
                    <Image src={imageUrl} alt={`${children} share image`} width={400} height={800} className="rounded-lg object-contain max-h-[80vh] w-auto" data-ai-hint={dataAiHint} />
                </DialogContent>
            </Dialog>
        )
    }


    return <span className="inline-block">{content}</span>;
}
