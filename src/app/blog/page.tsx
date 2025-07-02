import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Chan Nyein Tun',
    description: 'A collection of thoughts and writings by Chan Nyein Tun.',
};

export default function BlogPage() {
    return (
        <div className="w-full h-[calc(100vh-5rem)]">
            <iframe
                src="https://channyeintun.gitbook.io"
                title="Chan Nyein Tun's Blog"
                className="w-full h-full border-0"
                allowFullScreen
                lang='my-MM'
            />
        </div>
    );
}
