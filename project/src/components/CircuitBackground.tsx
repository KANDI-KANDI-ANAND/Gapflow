import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CircuitBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-[0.4]">
            {/* Base Grid Blueprint */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 10 10 L 90 10 L 90 90 L 10 90 Z' fill='none' stroke='%2310B981' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%2310B981'/%3E%3Cpath d='M 10 10 L 0 0 M 90 10 L 100 0 M 90 90 L 100 100 M 10 90 L 0 100' stroke='%2310B981' stroke-width='0.2'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
            }} />

            {/* Reactive Glow Spot */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(50,211,138,0.08)_0%,transparent_70%)] rounded-full blur-[60px]"
                style={{
                    x: springX,
                    y: springY,
                    transform: 'translate(-50%, -50%)'
                }}
            />

            {/* Slow Moving "Circuit Traces" */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="traces" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                        <path d="M 0 100 L 100 100 L 150 150 L 300 150 L 350 100 L 400 100" fill="none" stroke="#10B981" strokeWidth="1" />
                        <path d="M 200 0 L 200 100 L 250 150 L 250 400" fill="none" stroke="#10B981" strokeWidth="1" />
                        <circle cx="100" cy="100" r="2" fill="#10B981" />
                        <circle cx="300" cy="150" r="2" fill="#10B981" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#traces)" />
            </svg>
        </div>
    );
}
