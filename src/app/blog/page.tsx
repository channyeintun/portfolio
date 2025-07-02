'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogPage() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative flex items-center justify-center w-full h-[calc(100vh-5rem)]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
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