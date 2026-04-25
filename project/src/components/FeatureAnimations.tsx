import { motion } from 'framer-motion';

export const DragDropAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon Structure (Workflow-like) */}
            <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />

            {/* Agentic Animation Parts */}
            <motion.path
                d="M9 6h6M18 9v6M9 6l6 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                    initial: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 1 }
                }}
                transition={{ duration: 0.5 }}
            />
            <motion.circle
                cx="12" cy="10.5" r="2"
                fill="#10B981"
                variants={{
                    initial: { scale: 0 },
                    hover: { scale: 1 }
                }}
                transition={{ delay: 0.3, type: "spring" }}
            />
        </svg>
    </div>
);

export const BranchingAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (GitBranch) */}
            <line x1="6" y1="3" x2="6" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M18 9c0 3.3-2.7 6-6 6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Agentic Animation Parts */}
            <motion.circle
                r="1.5"
                fill="#10B981"
                variants={{
                    initial: { cx: 6, cy: 15, opacity: 0 },
                    hover: {
                        cx: [6, 12, 18, 18],
                        cy: [15, 15, 9, 6],
                        opacity: [0, 1, 1, 0],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }
                }}
            />
        </svg>
    </div>
);

export const TemplateAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (Repeat/Layers) */}
            <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Agentic Animation Parts */}
            <motion.rect
                x="8" y="8" width="8" height="8" rx="1"
                stroke="#10B981"
                strokeWidth="2"
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 1.2, opacity: 0.5 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </svg>
    </div>
);

export const RunDebugAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (Play) */}
            <path d="M5 3l14 9-14 9V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Agentic Animation Parts */}
            <motion.path
                d="M5 3l14 9-14 9V3z"
                fill="#10B981"
                variants={{
                    initial: { opacity: 0, scale: 1 },
                    hover: {
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1],
                        transition: { duration: 1.5, repeat: Infinity }
                    }
                }}
            />
            <motion.line
                x1="12" y1="3" x2="12" y2="21"
                stroke="#10B981"
                strokeWidth="1"
                strokeDasharray="2 2"
                variants={{
                    initial: { x: -8, opacity: 0 },
                    hover: {
                        x: 8,
                        opacity: [0, 1, 0],
                        transition: { duration: 1, repeat: Infinity, ease: "linear" }
                    }
                }}
            />
        </svg>
    </div>
);

export const ModelChoiceAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (Bot) */}
            <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v4" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Agentic Animation Parts */}
            <motion.circle
                cx="12" cy="16" r="3"
                stroke="#10B981"
                strokeWidth="2"
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: {
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0],
                        transition: { duration: 2, repeat: Infinity }
                    }
                }}
            />
        </svg>
    </div>
);

export const RAGAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (BookOpen) */}
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Agentic Animation Parts */}
            <motion.path
                d="M12 7v14"
                stroke="#10B981"
                strokeWidth="2"
                variants={{
                    initial: { pathLength: 0 },
                    hover: { pathLength: 1 }
                }}
            />
            {[14, 10, 6].map((y, i) => (
                <motion.circle
                    key={i}
                    r="1"
                    fill="#10B981"
                    variants={{
                        initial: { cx: 12, cy: y, opacity: 0 },
                        hover: {
                            cy: y - 10,
                            opacity: [0, 1, 0],
                            transition: { duration: i + 1, repeat: Infinity, delay: i * 0.2 }
                        }
                    }}
                />
            ))}
        </svg>
    </div>
);

export const EvalAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (CheckCircle) */}
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Agentic Animation Parts */}
            <motion.circle
                cx="12" cy="12" r="10"
                stroke="#10B981"
                strokeWidth="1"
                strokeDasharray="4 4"
                variants={{
                    initial: { rotate: 0, opacity: 0 },
                    hover: {
                        rotate: 360,
                        opacity: 0.5,
                        transition: { duration: 10, repeat: Infinity, ease: "linear" }
                    }
                }}
            />
        </svg>
    </div>
);

export const RoutingAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            {/* Base Icon (MessageSquare) */}
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Agentic Animation Parts */}
            <motion.path
                d="M8 9h8M8 13h6"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                    initial: { pathLength: 0 },
                    hover: { pathLength: 1 }
                }}
            />
            <motion.circle
                r="2"
                fill="#10B981"
                variants={{
                    initial: { cx: 12, cy: 10, opacity: 0 },
                    hover: {
                        cx: [12, 24],
                        opacity: [0, 1, 0],
                        transition: { duration: 1, repeat: Infinity }
                    }
                }}
            />
        </svg>
    </div>
);
