'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Sticker = ({ color }: { color: string }) => <div className={cn(color)} />;

const Face = ({
    transform,
    colors,
}: {
    transform: string;
    colors: string[];
}) => (
    <div
        className="absolute w-[150px] h-[150px] transform-style-3d"
        style={{ transform, backfaceVisibility: 'hidden' }}
    >
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1 border-2 border-black bg-black p-1">
            {colors.map((color, i) => (
                <Sticker key={i} color={color} />
            ))}
        </div>
    </div>
);

export function RubiksCube() {
    const [rotation, setRotation] = useState({ rotateX: -30, rotateY: -45 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            // Calculate rotation based on mouse position from center of the screen
            const rotateY = (e.clientX / innerWidth - 0.5) * 90;
            const rotateX = -(e.clientY / innerHeight - 0.5) * 90;
            // Apply the calculated rotation to the initial base rotation
            setRotation({ rotateX: -30 + rotateX, rotateY: -45 + rotateY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const faceColors = {
        up: 'bg-[#FFFFFF]',
        down: 'bg-[#FFD500]',
        front: 'bg-[#B71234]',
        back: 'bg-[#FF5800]',
        left: 'bg-[#009B48]',
        right: 'bg-[#0046AD]',
    };

    const faceStickers = (face: keyof typeof faceColors) => Array(9).fill(faceColors[face]);

    return (
        <div className="perspective" style={{ width: '150px', height: '150px' }}>
            <div
                className="relative h-full w-full transform-style-3d transition-transform duration-300 ease-out"
                style={{
                    transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                }}
            >
                <Face
                    transform="rotateY(0deg) translateZ(75px)"
                    colors={faceStickers('front')}
                />
                <Face
                    transform="rotateY(180deg) translateZ(75px)"
                    colors={faceStickers('back')}
                />
                <Face
                    transform="rotateX(90deg) translateZ(75px)"
                    colors={faceStickers('up')}
                />
                <Face
                    transform="rotateX(-90deg) translateZ(75px)"
                    colors={faceStickers('down')}
                />
                <Face
                    transform="rotateY(90deg) translateZ(75px)"
                    colors={faceStickers('right')}
                />
                <Face
                    transform="rotateY(-90deg) translateZ(75px)"
                    colors={faceStickers('left')}
                />
            </div>
        </div>
    );
}
