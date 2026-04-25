import React, { useCallback, useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface SmoothScrollProps {
    children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState(0)

    // Get native scroll progress
    const { scrollY } = useScroll()

    // Create a smoothed spring value for the Y position
    const smoothY = useSpring(scrollY, {
        damping: 20,
        stiffness: 100,
        mass: 0.5,
        restDelta: 0.001
    })

    // Transform the spring value to a negative translate
    const y = useTransform(smoothY, (value) => -value)

    // Handle resizing of the content
    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
            setContentHeight(entry.contentRect.height)
        }
    }, [])

    useLayoutEffect(() => {
        if (!contentRef.current) return
        const resizeObserver = new ResizeObserver((entries) => onResize(entries))
        resizeObserver.observe(contentRef.current)
        return () => resizeObserver.disconnect()
    }, [onResize])

    return (
        <>
            <div
                style={{ height: contentHeight }}
                className="w-full absolute top-0 left-0 pointer-events-none"
            />
            <motion.div
                ref={contentRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full flex flex-col will-change-transform"
            >
                {children}
            </motion.div>
        </>
    )
}
