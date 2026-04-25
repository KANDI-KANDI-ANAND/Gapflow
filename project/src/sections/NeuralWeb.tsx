import { Brain, Database, MessageSquare, Briefcase, Code2, Cloud, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NeuralWeb() {
    const nodes = [
        { icon: Database, color: '#3B82F6', label: 'Snowflake', x: '10%', y: '20%', delay: 0 },
        { icon: MessageSquare, color: '#10B981', label: 'Slack', x: '15%', y: '80%', delay: 0.5 },
        { icon: Briefcase, color: '#8B5CF6', label: 'Salesforce', x: '80%', y: '15%', delay: 1.2 },
        { icon: Layout, color: '#F59E0B', label: 'Notion', x: '85%', y: '75%', delay: 0.8 },
        { icon: Code2, color: '#EF4444', label: 'GitHub', x: '30%', y: '90%', delay: 1.5 },
        { icon: Cloud, color: '#32D38A', label: 'AWS', x: '70%', y: '90%', delay: 0.3 },
    ];

    // Base 2 seconds wait before anything connects
    const INTRO_DELAY = 2;

    return (
        <div className="relative w-full h-[300px] lg:h-[450px] overflow-visible bg-transparent mt-[-40px] mb-0">

            {/* Background Masking and Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#10B981]/10 blur-[100px] rounded-full" />
            </div>

            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'drop-shadow(0 0 4px rgba(16,185,129,0.3))' }}>
                <defs>
                    <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Dynamic Lines mapping to Center */}
                {nodes.map((node, i) => (
                    <g key={`line-group-${i}`}>
                        {/* Base structural wire drawing in */}
                        <motion.line
                            x1={node.x}
                            y1={node.y}
                            x2="50%"
                            y2="50%"
                            stroke="#e2e8f0"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: INTRO_DELAY + node.delay, duration: 1.5, ease: "easeInOut" }}
                        />

                        {/* Animated Data Stroke (appearing only after wire finishes drawing) */}
                        <motion.line
                            x1={node.x}
                            y1={node.y}
                            x2="50%"
                            y2="50%"
                            stroke="url(#neuralGrad)"
                            strokeWidth="2"
                            strokeDasharray="4 12"
                            style={{ animation: `streamPulse 2s linear infinite` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: INTRO_DELAY + node.delay + 1.5, duration: 1 }}
                        />
                    </g>
                ))}
            </svg>

            {/* Glowing Streaming Particles */}
            {nodes.map((node, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full z-10 shadow-lg pointer-events-none"
                    style={{ backgroundColor: node.color, filter: `drop-shadow(0 0 4px ${node.color})`, left: 0, top: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{
                        left: [node.x, "50%"],
                        top: [node.y, "50%"],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: INTRO_DELAY + node.delay + 1.5
                    }}
                />
            ))}

            {/* Outer Floating Integration Nodes */}
            {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                    <motion.div
                        key={`node-${i}`}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer"
                        style={{ left: node.x, top: node.y }}
                        whileHover="hover"
                    >
                        {/* Use whileHover here to handle scale correctly because tailwind scaling clashes with framer-motion inline scale */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            variants={{
                                hover: { scale: 1.3, borderColor: '#10B981', boxShadow: '0 0 20px rgba(16,185,129,0.3)', zIndex: 50 },
                            }}
                            transition={{ opacity: { delay: node.delay, duration: 0.8 }, scale: { delay: node.delay, duration: 0.8 } }}
                            className="relative flex flex-col items-center justify-center p-3 rounded-full bg-white border border-slate-200 shadow-xl transition-colors duration-300"
                        >
                            <Icon size={20} color={node.color} />
                        </motion.div>

                        {/* The hidden text label that appears purely on hover - Dynamically position top if near bottom edge */}
                        <div className={`absolute ${parseInt(node.y) >= 75 ? 'bottom-full mb-3' : 'top-full mt-3'} left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                            <span className="font-mono text-[10px] text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap shadow-[0_0_15px_rgba(0,0,0,0.1)] table z-50 relative">
                                {node.label}
                            </span>
                        </div>
                    </motion.div>
                );
            })}

            {/* Massive Glowing Center AI Engine */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative flex items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-[0_0_50px_rgba(16,185,129,0.3)] border border-[#34D399]"
                >
                    <div className="absolute inset-0 rounded-3xl bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <Brain size={48} className="text-white relative z-10 drop-shadow-md" />
                </motion.div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-[#10B981]/30">
                    <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold">Gapflow AI Core</span>
                </div>
            </div>

        </div>
    );
}
