'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    const [rotation, setRotation] = useState({ x: -30, y: -45, z: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const faceColors = {
        up: 'bg-[#FFFFFF]',
        down: 'bg-[#FFD500]',
        front: 'bg-[#B71234]',
        back: 'bg-[#FF5800]',
        left: 'bg-[#009B48]',
        right: 'bg-[#0046AD]',
    };

    const faceStickers = (face: keyof typeof faceColors) => Array(9).fill(faceColors[face]);

    const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: { delta: { x: number; y: number } }) => {
        const sensitivity = 0.4; // Consistent sensitivity for desktop and mobile
        setRotation((prev) => ({
            x: prev.x - info.delta.y * sensitivity, // Drag down -> negative X rotation
            y: prev.y + info.delta.x * sensitivity, // Drag right -> positive Y rotation
            z: prev.z,
        }));
    };

    return (
        <motion.div
            className={cn(
                'perspective cursor-pointer',
                { 'select-none': isDragging }
            )}
            style={{
                width: '150px',
                height: '150px',
                touchAction: 'none', // Prevent default touch/scroll behaviors
                position: 'relative' // Ensure cube stays fixed in its container
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
        >
            <motion.div
                className="relative h-full w-full transform-style-3d"
                style={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    rotateZ: rotation.z,
                    position: 'absolute', // Fix cube to parent container
                    top: 0,
                    left: 0
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // No positional movement
                dragElastic={0} // Disable elastic movement
                dragMomentum={false} // Disable momentum after drag
                dragPropagation={false} // Prevent scroll interference
                onDrag={handleDrag}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }} // Smooth spring animation
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
            </motion.div>
        </motion.div>
    );
}