'use client';

import { useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogPage() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative flex items-center justify-center w-full h-[calc(100vh-5rem)]">

            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 space-y-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <a
                        href="https://channyeintun.gitbook.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 underline text-primary hover:text-primary/80 text-sm"
                    >
                        Open GitBook blog <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            )}
            <iframe
                src="https://channyeintun.gitbook.io"
                title="Chan Nyein Tun's Blog"
                className={cn(
                    'w-full h-full border-0 transition-opacity duration-300',
                    loading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={() => setLoading(false)}
                allowFullScreen
            />
        </div>
    );
}