import { motion, useScroll, useTransform } from 'framer-motion';

export default function XRayEngine() {
    const { scrollYProgress } = useScroll();

    // Rotation and assembly based on scroll
    // We adjust the range to ensure it assembles early in the landing view
    const rotateX = useTransform(scrollYProgress, [0, 0.4], [45, 0]);
    const rotateZ = useTransform(scrollYProgress, [0, 0.4], [0, 360]);
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.45], [1, 1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

    return (
        <div className="relative w-full h-[300px] lg:h-[500px] flex items-center justify-center pointer-events-none">
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    opacity,
                    scale,
                    perspective: 1000
                }}
                className="relative w-64 h-64 lg:w-96 lg:h-96"
            >
                {/* Core Octagon Structure */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                        <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>

                    {/* Main Chassis Wireframe */}
                    <motion.path
                        d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
                        fill="none"
                        stroke="url(#engineGrad)"
                        strokeWidth="0.8"
                        strokeDasharray="10 2"
                        animate={{ strokeDashoffset: [0, 20] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner Dynamic Rings */}
                    <motion.circle
                        cx="50" cy="50" r="35"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="0.2"
                        opacity="0.4"
                        style={{
                            scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5])
                        }}
                    />
                    <motion.circle
                        cx="50" cy="50" r="25"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="0.2"
                        opacity="0.6"
                        strokeDasharray="5 5"
                        style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
                        }}
                    />

                    {/* Assembling "Gears" / Logic Nodes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.line
                            key={i}
                            x1="50"
                            y1="50"
                            x2={50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}
                            y2={50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}
                            stroke="#10B981"
                            strokeWidth="0.3"
                            initial={{ pathLength: 0 }}
                            style={{
                                pathLength: useTransform(scrollYProgress, [0, 0.3], [0, 1])
                            }}
                            opacity="0.5"
                        />
                    ))}

                    {/* Center Core Pulse */}
                    <circle cx="50" cy="50" r="8" fill="#10B981" className="opacity-10 blur-md animate-pulse" />
                    <circle cx="50" cy="50" r="3" fill="#10B981" className="shadow-[0_0_15px_#10B981]" />
                </svg>

                {/* Floating CSS Pulse Rings */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 border border-[#10B981]/20 rounded-full"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Tactical UI Data Overlay */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#10B981] opacity-40 uppercase tracking-widest hidden lg:block">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-ping" />
                    System.Status: Active
                </div>
                <div>Core.Integrity: 100%</div>
                <div>Neural.Trace: Connected</div>
            </div>
        </div>
    );
}
