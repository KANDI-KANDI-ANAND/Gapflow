import { useState } from 'react';
import { Network, Database, Code2, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
    { id: 'routing', title: 'Semantic Routing', icon: Network, subtitle: 'Intent-based load balancing' },
    { id: 'memory', title: 'Vector Memory', icon: Database, subtitle: 'Long-term context retention' },
    { id: 'tools', title: 'Tool Execution', icon: Code2, subtitle: 'Native API & code execution' },
];

export default function CommandCenter() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    return (
        <div className="container mx-auto px-6 relative z-10 mt-0 mb-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Autonomous Command Center</h2>
                <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
                    Take full control over our agentic engine. Define exactly how AI models parse intent, store context, and execute external logic.
                </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto h-auto lg:h-[500px]">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/3 bg-white/60 border-r border-slate-200 flex flex-col p-6 space-y-4">
                    <div className="mb-4">
                        <p className="font-mono text-xs text-slate-600/50 uppercase tracking-widest px-4">Core Modules</p>
                    </div>
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-5 rounded-2xl flex items-center gap-4 text-left transition-all overflow-hidden border ${isActive ? 'bg-[#10B981]/10 border-[#10B981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'bg-white/80 border-transparent hover:bg-white/10 hover:border-slate-200'}`}
                            >
                                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#10B981] shadow-[0_0_10px_#10B981]" />}
                                <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-[#10B981] text-slate-900 shadow-lg' : 'bg-white/80 text-slate-600'}`}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{tab.title}</h3>
                                    <p className="text-xs text-slate-600/70 font-mono mt-1">{tab.subtitle}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right Content Area */}
                <div className="w-full lg:w-2/3 bg-white relative overflow-hidden flex items-center justify-center p-8 lg:p-12 min-h-[400px]">
                    {/* Subtle grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)' }} />

                    <AnimatePresence mode="wait">
                        {/* ROUTING TAB */}
                        {activeTab === 'routing' && (
                            <motion.div key="routing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative w-full max-w-lg">
                                <div className="flex flex-col gap-6 w-full">
                                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                                            <span className="font-bold text-[#3B82F6]">1</span>
                                        </div>
                                        <p className="font-mono text-sm text-slate-900">Prompt: "Cancel my latest subscription"</p>
                                    </div>

                                    <div className="relative h-20 w-full flex justify-center mt-[-10px]">
                                        <div className="w-[2px] h-full bg-[#2A2B3E] absolute top-0" />
                                        <div className="w-1/2 h-[2px] bg-[#2A2B3E] absolute top-1/2 left-1/4" />

                                        {/* Animated Data packet */}
                                        <motion.div
                                            animate={{ y: [0, 40], opacity: [0, 1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                            className="absolute top-0 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 relative z-10 transition-all mt-[-10px]">
                                        <div className="bg-white border border-slate-200 rounded-xl p-4 opacity-40">
                                            <p className="font-mono text-xs text-slate-900 mb-2">Sales Model</p>
                                            <p className="text-[10px] text-slate-600">Confidence: 12%</p>
                                        </div>
                                        <div className="bg-white border border-[#10B981] rounded-xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative">
                                            <div className="absolute top-2 right-2 text-[#10B981]">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="font-mono text-xs text-slate-900 mb-2">Support Model</p>
                                            <p className="text-[10px] text-[#10B981]">Confidence: 98% [MATCH]</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* MEMORY TAB */}
                        {activeTab === 'memory' && (
                            <motion.div key="memory" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
                                <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                                    <Database size={16} className="text-[#8B5CF6]" />
                                    <span className="font-mono text-xs text-slate-900">Pinecone Vector Retrieval</span>
                                </div>
                                <div className="p-6">
                                    <p className="font-mono text-xs text-[#32D38A] mb-4">&gt; Querying user_id: 84992_X...</p>
                                    <div className="space-y-3">
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/80 border border-slate-200 rounded-lg p-3">
                                            <p className="text-xs text-slate-600 font-mono">[0.98] Past context: User upgraded to Pro on Jan 14th.</p>
                                        </motion.div>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white/80 border border-slate-200 rounded-lg p-3">
                                            <p className="text-xs text-slate-600 font-mono">[0.91] Support ticket: #844 resolved regarding API limits.</p>
                                        </motion.div>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/40 rounded-lg p-3 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                            <p className="text-xs text-slate-900 font-mono flex items-center gap-2"><ChevronRight size={14} className="text-[#8B5CF6]" /> Context Injected into Prompt</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* TOOLS TAB */}
                        {activeTab === 'tools' && (
                            <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
                                <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                                    <Terminal size={16} className="text-[#F59E0B]" />
                                    <span className="font-mono text-xs text-slate-900">stripe_refund_tool.py</span>
                                </div>
                                <div className="p-6 font-mono text-[11px] leading-relaxed relative">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        transition={{ duration: 2, ease: 'linear' }}
                                        className="overflow-hidden text-slate-600"
                                    >
                                        <p><span className="text-[#F59E0B]">import</span> stripe</p>
                                        <p className="mt-2 text-[#32D38A]"># Agent autonomously writing execution logic...</p>
                                        <p className="mt-1">stripe.api_key = <span className="text-[#3B82F6]">"sk_live_..."</span></p>
                                        <p className="mt-4"><span className="text-[#F59E0B]">def</span> <span className="text-[#3B82F6]">execute_refund</span>(charge_id):</p>
                                        <p className="pl-4 mt-1"><span className="text-[#F59E0B]">try</span>:</p>
                                        <p className="pl-8">refund = stripe.Refund.create(charge=charge_id)</p>
                                        <p className="pl-8 text-[#10B981]">return <span className="text-[#3B82F6]">"Success"</span></p>
                                        <p className="pl-4 mt-1"><span className="text-[#F59E0B]">except</span> Exception <span className="text-[#F59E0B]">as</span> e:</p>
                                        <p className="pl-8 text-[#EF4444]">return str(e)</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2.2 }}
                                        className="mt-6 pt-4 border-t border-slate-200"
                                    >
                                        <p className="text-[10px] text-[#10B981] flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" /> 200 OK — Execution successful
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}
