import { motion, useScroll, useSpring } from 'framer-motion';

export default function FlowThread() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed left-4 lg:left-8 top-0 bottom-0 w-[1px] z-50 pointer-events-none hidden md:block">
            {/* Background Rail */}
            <div className="absolute inset-0 bg-slate-200/30" />

            {/* Active Flow Line */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#10B981] to-[#32D38A] origin-top"
                style={{ scaleY, height: '100%' }}
            />

            {/* Travelling Pulse */}
            <motion.div
                className="absolute w-2 h-2 -left-[3.5px] rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981]"
                style={{ top: '0%' }}
                animate={{
                    top: ['0%', '100%'],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
}
