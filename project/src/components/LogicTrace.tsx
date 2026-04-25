import { motion, AnimatePresence } from 'framer-motion';

interface LogicTraceProps {
    activeNode: number | null;
}

export default function LogicTrace({ activeNode }: LogicTraceProps) {
    // We define paths between specific node indices
    // 0 -> 1, 1 -> 2, 3 -> 4, etc.
    const connections = [
        { from: 0, to: 1, d: "M 15 25 Q 50 25 50 50" },
        { from: 1, to: 2, d: "M 50 50 Q 50 75 85 75" },
        { from: 3, to: 4, d: "M 15 75 Q 50 75 50 50" },
        { from: 4, to: 5, d: "M 50 50 Q 50 25 85 25" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full opacity-[0.15]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Base Trace Lines */}
                {connections.map((conn, i) => (
                    <motion.path
                        key={`line-${i}`}
                        d={conn.d}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                ))}

                {/* Active Pulses */}
                <AnimatePresence>
                    {connections.map((conn, i) => {
                        const isActive = activeNode === conn.from || activeNode === conn.to;
                        return isActive && (
                            <motion.path
                                key={`pulse-${i}`}
                                d={conn.d}
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="1.5"
                                filter="url(#glow)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.8 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0.2
                                }}
                            />
                        );
                    })}
                </AnimatePresence>

                {/* Floating "Data Packets" */}
                {[...Array(6)].map((_, i) => (
                    <motion.circle
                        key={`packet-${i}`}
                        r="0.4"
                        fill="#10B981"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            offsetPath: `path("${connections[i % connections.length].d}")`
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
