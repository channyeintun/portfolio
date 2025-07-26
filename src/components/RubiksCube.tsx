'use client';

import React, { useState, useEffect, useRef } from 'react';
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
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [startRotation, setStartRotation] = useState({ rotateX: -30, rotateY: -45 });
    const cubeRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setStartPos({ x: e.clientX, y: e.clientY });
            setStartRotation(rotation);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;

            const sensitivity = 0.5;
            // Reverse the direction for intuitive dragging:
            // - Drag right -> positive rotateY (cube rotates right)
            // - Drag down -> negative rotateX (cube rotates down)
            const deltaX = (e.clientX - startPos.x) * sensitivity;
            const deltaY = (e.clientY - startPos.y) * sensitivity;
            const newRotation = {
                rotateX: startRotation.rotateX - deltaY, // Downward drag decreases rotateX
                rotateY: startRotation.rotateY + deltaX, // Rightward drag increases rotateY
            };

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame(() => {
                setRotation(newRotation);
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };

        const cubeElement = cubeRef.current;
        if (cubeElement) {
            cubeElement.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            if (cubeElement) {
                cubeElement.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isDragging, startPos, startRotation]);

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
        <div
            className={cn(
                "perspective",
                "cursor-pointer",
                { "select-none": isDragging }
            )}
            style={{ width: '150px', height: '150px' }}
            ref={cubeRef}
        >
            <div
                className="relative h-full w-full transform-style-3d transition-transform duration-[16ms] ease-linear"
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