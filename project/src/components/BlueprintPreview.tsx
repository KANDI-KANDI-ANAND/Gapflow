import React from 'react';
import { motion } from 'framer-motion';

interface BlueprintPreviewProps {
    className?: string;
}

const BlueprintPreview: React.FC<BlueprintPreviewProps> = ({ className }) => {
    return (
        <div className={`relative w-full h-[180px] bg-slate-900/40 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm ${className}`}>
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:12px_12px]" />

            <svg className="absolute inset-0 w-full h-full">
                {/* Animated Path 1 */}
                <motion.path
                    d="M 40 90 L 100 90"
                    stroke="rgba(16,185,129,0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated Path 2 (Branch) */}
                <motion.path
                    d="M 120 90 L 160 50 L 220 50"
                    stroke="rgba(16,185,129,0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                <motion.path
                    d="M 120 90 L 160 130 L 220 130"
                    stroke="rgba(16,185,129,0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                {/* Traveling Data Packet */}
                <motion.circle
                    r="3"
                    fill="#10B981"
                    style={{ filter: 'drop-shadow(0 0 4px #10B981)' }}
                    animate={{
                        cx: [40, 100, 100, 120, 160, 220],
                        cy: [90, 90, 90, 90, 50, 50],
                        opacity: [0, 1, 1, 1, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.4, 0.5, 0.7, 1]
                    }}
                />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Start Node */}
                <motion.div
                    className="absolute left-[30px] top-[80px] w-5 h-5 rounded-md bg-slate-800 border-2 border-[#10B981] flex items-center justify-center p-1"
                    animate={{ boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 8px rgba(16,185,129,0.4)", "0 0 0px rgba(16,185,129,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </motion.div>

                {/* Junction Node */}
                <motion.div
                    className="absolute left-[105px] top-[80px] w-7 h-7 rounded-lg bg-slate-800 border-2 border-slate-600 flex items-center justify-center p-1"
                    whileHover={{ borderColor: "#10B981" }}
                >
                    <div className="w-2.5 h-2.5 rounded-sm bg-slate-400 rotate-45" />
                </motion.div>

                {/* End Node Top */}
                <motion.div
                    className="absolute left-[225px] top-[40px] w-5 h-5 rounded-md bg-slate-800 border border-slate-600 flex items-center justify-center"
                    animate={{ borderColor: ["rgba(148,163,184,1)", "rgba(16,185,129,1)", "rgba(148,163,184,1)"] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2.8 }}
                />

                {/* End Node Bottom */}
                <motion.div
                    className="absolute left-[225px] top-[120px] w-5 h-5 rounded-md bg-slate-800 border border-slate-600"
                />
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
    );
};

export default BlueprintPreview;
