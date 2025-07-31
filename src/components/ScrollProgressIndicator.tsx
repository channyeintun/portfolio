'use client';
import horse from '@/assets/horse.webp';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const ScrollProgress: React.FC = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Initialize window width and scroll progress
    useEffect(() => {
        const updateDimensionsAndProgress = () => {
            const scrollY = window.scrollY;
            const scrollHeight = Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                1 // Prevent division by zero
            );
            const progress = scrollHeight > 1 ? scrollY / scrollHeight : 0;
            setWindowWidth(window.innerWidth);
            setScrollProgress(progress);
            setLastScrollY(scrollY);

            console.log(
                'Initial - Scroll Progress:', progress,
                'ScrollY:', scrollY,
                'ScrollHeight:', scrollHeight,
                'WindowWidth:', window.innerWidth,
                'Horse X:', progress * (window.innerWidth - 128)
            );
        };

        updateDimensionsAndProgress();
        window.addEventListener('resize', updateDimensionsAndProgress);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                1
            );
            const progress = scrollHeight > 1 ? currentScrollY / scrollHeight : 0;

            setScrollProgress(progress);
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }
            setLastScrollY(currentScrollY);

            console.log(
                'Scroll - Progress:', progress,
                'ScrollY:', currentScrollY,
                'ScrollHeight:', scrollHeight,
                'WindowWidth:', window.innerWidth,
                'Horse X:', progress * (window.innerWidth - 128)
            );
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateDimensionsAndProgress);
        };
    }, [lastScrollY]);

    // Calculate x position directly
    const xPosition = scrollProgress * (windowWidth - 128);

    // Horse animation variants
    const horseVariants: Variants = {
        idle: {
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.3 },
        },
        runningForward: {
            y: [-10, 0, -10],
            rotate: [2, 0, -2],
            opacity: 1,
            transition: {
                y: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' },
            },
        },
        runningBackward: {
            y: [-10, 0, -10],
            rotate: [-2, 0, 2],
            opacity: 1,
            transition: {
                y: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' },
            },
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="fixed bottom-0 left-0 w-full h-16 z-50 overflow-visible">
            <motion.div
                className="absolute w-32 h-16"
                style={{ x: xPosition }}
                variants={horseVariants}
                animate={
                    scrollProgress === 0
                        ? 'hidden'
                        : scrollDirection === 'down'
                            ? 'runningForward'
                            : scrollDirection === 'up'
                                ? 'runningBackward'
                                : 'idle'
                }
            >
                <Image
                    src={horse}
                    alt="Horse running"
                    width={128}
                    height={64}
                    className="object-contain"
                    style={{
                        transform: scrollDirection === 'up' ? 'scaleX(-1)' : 'scaleX(1)', // Flip image for backward
                    }}
                    onError={() => console.error('Horse image failed to load')}
                />
            </motion.div>
        </div>
    );
};

export default ScrollProgress;