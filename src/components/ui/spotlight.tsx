'use client'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useSpring, useTransform, SpringOptions } from 'motion/react'
import { cn } from '@/lib/utils'

export type SpotlightProps = {
  className?: string
  size?: number
  springOptions?: SpringOptions
}

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement
      if (parent) {
        parent.style.position = 'relative'
        parent.style.overflow = 'hidden'
        parent.style.touchAction = 'auto' // Ensure touch events work properly
        setParentElement(parent)
      }
    }
  }, [])

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!parentElement) return
      const { left, top } = parentElement.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    },
    [mouseX, mouseY, parentElement]
  )

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY)
    },
    [updatePosition]
  )

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      event.preventDefault() // Prevent scrolling while touching
      const touch = event.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    },
    [updatePosition]
  )

  useEffect(() => {
    if (!parentElement) return

    // Mouse events
    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseenter', () => setIsActive(true))
    parentElement.addEventListener('mouseleave', () => setIsActive(false))

    // Touch events
    parentElement.addEventListener('touchstart', (event) => {
      setIsActive(true)
      const touch = event.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    })
    parentElement.addEventListener('touchmove', handleTouchMove, { passive: false })
    parentElement.addEventListener('touchend', () => setIsActive(false))
    parentElement.addEventListener('touchcancel', () => setIsActive(false))

    return () => {
      // Cleanup mouse events
      parentElement.removeEventListener('mousemove', handleMouseMove)
      parentElement.removeEventListener('mouseenter', () => setIsActive(true))
      parentElement.removeEventListener('mouseleave', () => setIsActive(false))

      // Cleanup touch events
      parentElement.removeEventListener('touchstart', () => setIsActive(true))
      parentElement.removeEventListener('touchmove', handleTouchMove)
      parentElement.removeEventListener('touchend', () => setIsActive(false))
      parentElement.removeEventListener('touchcancel', () => setIsActive(false))
    }
  }, [parentElement, handleMouseMove, handleTouchMove])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isActive ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  )
}