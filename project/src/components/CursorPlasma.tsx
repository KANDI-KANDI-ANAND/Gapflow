import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorPlasma() {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth out the movement using spring physics for an organic fluid trail effect
    const springConfig = { damping: 40, stiffness: 150, mass: 0.8 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show custom cursor trail on non-touch devices
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 64); // Center the 128px circle
            cursorY.set(e.clientY - 64);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[100] mix-blend-multiply opacity-80"
            style={{
                x: smoothX,
                y: smoothY,
                background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(50,211,138,0.1) 50%, transparent 70%)',
                filter: 'blur(8px)',
            }}
        />
    );
}
