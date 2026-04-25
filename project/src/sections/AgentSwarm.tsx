import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, BrainCircuit, Activity, Zap, Terminal as Term, Info } from 'lucide-react';

const REASONING_STEPS = [
    {
        id: 'router',
        agent: 'Router Agent',
        thought: 'Ingesting request... identifying intent and routing to Analyst.',
        console: '> [Router] Injesting webhook... routing to compute node.'
    },
    {
        id: 'analyst_active',
        agent: 'Analyst Agent',
        thought: 'Payload received. Verifying security guardrails and mapping knowledge gaps.',
        console: '> [Analyst] Payload sanitized... mapping knowledge requirements.'
    },
    {
        id: 'memory',
        agent: 'Memory Agent',
        thought: 'Querying vector stores for historical context and specialized data.',
        console: '> [Memory] Vector SIM 0.94... context retrieved.'
    },
    {
        id: 'analyst_final',
        agent: 'Analyst Agent',
        thought: 'Context integrated. Generating final logic payload for execution.',
        console: '> [Analyst] Logic synthesized... preparing final command.'
    },
    {
        id: 'execution',
        agent: 'Execution Agent',
        thought: 'Final directive received. Dispatching secure webhooks and firing triggers.',
        console: '> [Exec] SUCCESS: response_33X dispatched.'
    }
];

export default function AgentSwarm() {
    const [step, setStep] = useState(0);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % REASONING_STEPS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getThought = () => {
        if (hoveredNode) {
            const node = REASONING_STEPS.find(s => s.id === hoveredNode || (hoveredNode === 'analyst' && (s.id === 'analyst_active' || s.id === 'analyst_final')));
            return node?.thought;
        }
        return REASONING_STEPS[step].thought;
    };

    const isNodeActive = (id: string) => {
        if (id === 'router') return step === 0;
        if (id === 'analyst') return step === 1 || step === 3;
        if (id === 'memory') return step === 2;
        if (id === 'execution') return step === 4;
        return false;
    };

    return (
        <section className="pt-8 pb-12 lg:py-16 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
                        <Network size={16} className="text-[#32D38A]" />
                        <span className="text-sm text-slate-600 font-medium">Multi-Agent Architecture</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Intelligent Swarms.<br />Infinite Scalability.
                    </h2>
                    <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                        Don't rely on a single bottleneck. Gapflow provisions isolated, specialized AI agents that seamlessly exchange context in real-time.
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] lg:aspect-[21/9] bg-white/80 border border-slate-200 rounded-3xl p-8 overflow-hidden backdrop-blur-xl shadow-[inset_0_0_100px_rgba(16,185,129,0.05)]">

                    {/* Blueprint Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

                    {/* Top Left: Active Streams */}
                    <div className="absolute top-6 left-6 flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 z-20 hidden md:flex backdrop-blur-xl">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-900/80 tracking-wider">REASONING: {REASONING_STEPS[step].id.toUpperCase()}</span>
                    </div>

                    {/* Agent Thought Bubble */}
                    <div className="absolute top-6 right-6 max-w-[280px] hidden md:block z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step + (hoveredNode || '')}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-xl shadow-emerald-500/5 relative"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-emerald-50 rounded-lg">
                                        <BrainCircuit size={14} className="text-[#10B981]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter mb-1">
                                            {hoveredNode ? 'Focused Thought' : 'Chain of Thought'}
                                        </p>
                                        <p className="text-xs text-slate-600 leading-relaxed italic">
                                            "{getThought()}"
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l border-b border-emerald-100 rotate-45" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Left: Live Console */}
                    <div className="absolute bottom-6 left-6 w-72 bg-slate-900 border border-slate-700 rounded-xl p-4 z-20 hidden lg:block overflow-hidden h-28 shadow-2xl">
                        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-[9px] font-mono text-slate-500">gapflow@swarm:~</span>
                        </div>
                        <div className="font-mono text-[11px] text-[#32D38A] opacity-90 flex flex-col justify-end space-y-1.5 overflow-hidden">
                            <AnimatePresence>
                                {REASONING_STEPS.slice(0, step + 1).map((s, i) => (
                                    <motion.p
                                        key={s.id + i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={i === step ? 'text-white' : 'text-[#32D38A]/60'}
                                    >
                                        {s.console}
                                    </motion.p>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <style>{`
                        @keyframes pulseLine {
                            0% { opacity: 0.1; stroke-width: 1; }
                            50% { opacity: 1; stroke-width: 3; filter: drop-shadow(0 0 8px #10B981); }
                            100% { opacity: 0.1; stroke-width: 1; }
                        }
                        .active-path {
                            animation: pulseLine 1.5s ease-in-out infinite;
                            stroke: #10B981 !important;
                            stroke-dasharray: 0 !important;
                        }
                    `}</style>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="swarmLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>

                        {/* Path Logic */}
                        <path d="M 25% 50% L 50% 25%" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" className={step === 0 ? 'active-path' : ''} />
                        <path d="M 50% 25% L 50% 75%" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" className={step === 1 ? 'active-path' : ''} />
                        <path d="M 50% 75% L 50% 25%" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" className={step === 2 ? 'active-path' : ''} />
                        <path d="M 50% 25% L 75% 50%" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" className={step === 3 ? 'active-path' : ''} />
                    </svg>

                    {/* Nodes */}
                    {/* Router */}
                    <div
                        className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer z-10 flex flex-col items-center"
                        onMouseEnter={() => setHoveredNode('router')}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className={`w-20 h-20 bg-white border-2 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isNodeActive('router') ? 'border-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.5)] scale-110' : 'border-slate-200 shadow-sm'}`}>
                            {isNodeActive('router') && <div className="absolute inset-0 bg-[#10B981]/10 rounded-2xl animate-ping" />}
                            <BrainCircuit className={isNodeActive('router') ? 'text-[#10B981]' : 'text-slate-400'} size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">Router Agent</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">Logic Entry</p>
                        </div>
                    </div>

                    {/* Analyst */}
                    <div
                        className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer z-10 flex flex-col items-center"
                        onMouseEnter={() => setHoveredNode('analyst')}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className={`w-20 h-20 bg-white border-2 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isNodeActive('analyst') ? 'border-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-110' : 'border-slate-200 shadow-sm'}`}>
                            {(isNodeActive('analyst')) && <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-2xl animate-ping" />}
                            <Activity className={isNodeActive('analyst') ? 'text-[#3B82F6]' : 'text-slate-400'} size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">Analyst Agent</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">Reasoning Hub</p>
                        </div>
                    </div>

                    {/* Memory */}
                    <div
                        className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer z-10 flex flex-col items-center"
                        onMouseEnter={() => setHoveredNode('memory')}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className={`w-20 h-20 bg-white border-2 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isNodeActive('memory') ? 'border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.5)] scale-110' : 'border-slate-200 shadow-sm'}`}>
                            {isNodeActive('memory') && <div className="absolute inset-0 bg-[#8B5CF6]/10 rounded-2xl animate-ping" />}
                            <Database className={isNodeActive('memory') ? 'text-[#8B5CF6]' : 'text-slate-400'} size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">Memory Agent</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">Context Retrieval</p>
                        </div>
                    </div>

                    {/* Execution */}
                    <div
                        className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer z-10 flex flex-col items-center"
                        onMouseEnter={() => setHoveredNode('execution')}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className={`w-24 h-24 bg-white border-2 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isNodeActive('execution') ? 'border-[#10B981] bg-[#10B981]/5 shadow-[0_0_40px_rgba(16,185,129,0.6)] scale-110' : 'border-slate-200 shadow-sm'}`}>
                            {isNodeActive('execution') && <div className="absolute inset-0 bg-[#10B981]/10 rounded-2xl animate-ping" />}
                            <Zap className={isNodeActive('execution') ? 'text-[#10B981]' : 'text-slate-400'} size={40} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-lg">Execution Agent</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">Result Delivery</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
