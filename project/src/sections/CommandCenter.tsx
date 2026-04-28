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
             <div className="text-center mb-16">
                 <h2 className="heading-section mb-6">Autonomous Command Center</h2>
                 <p className="text-subcopy max-w-3xl mx-auto text-slate-500/90">
                     Take full control over our agentic engine. Define exactly how AI models parse intent, store context, and execute external logic.
                 </p>
             </div>
 
             <div className="bg-white border border-slate-200/60 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto h-auto lg:h-[540px]">
                 {/* Left Sidebar */}
                 <div className="w-full lg:w-1/3 bg-slate-50/40 border-r border-slate-200/60 flex flex-col p-8 space-y-4">
                     <div className="mb-6">
                         <p className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.25em] px-2">Core Modules</p>
                     </div>
                     {TABS.map((tab) => {
                         const Icon = tab.icon;
                         const isActive = activeTab === tab.id;
                         return (
                             <button
                                 key={tab.id}
                                 onClick={() => setActiveTab(tab.id)}
                                 className={`relative px-6 py-5 rounded-[1.5rem] flex items-center gap-5 text-left transition-all duration-500 border ${isActive ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50' : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-100'}`}
                             >
                                 <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-300 border border-slate-100 shadow-sm'}`}>
                                     <Icon size={20} />
                                 </div>
                                 <div>
                                     <h3 className={`font-bold text-sm tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{tab.title}</h3>
                                     <p className="text-[10px] text-slate-400 font-mono mt-1 tracking-tight">{tab.subtitle}</p>
                                 </div>
                                 {isActive && (
                                     <motion.div 
                                         layoutId="tab-indicator"
                                         className="absolute right-6 w-1.5 h-1.5 rounded-full bg-[#10B981]" 
                                     />
                                 )}
                             </button>
                         );
                     })}
                 </div>
 
                 {/* Right Content Area */}
                 <div className="w-full lg:w-2/3 bg-white relative overflow-hidden flex items-center justify-center p-8 lg:p-12 min-h-[400px]">
                     {/* Subtle grid background */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)' }} />
 
                     <AnimatePresence mode="wait">
                         {/* ROUTING TAB */}
                         {activeTab === 'routing' && (
                             <motion.div key="routing" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="relative w-full max-w-md">
                                 <div className="flex flex-col gap-8 w-full">
                                     <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-5 relative z-10 shadow-sm">
                                         <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                             <span className="font-black text-xs text-blue-600">IN</span>
                                         </div>
                                         <p className="font-mono text-xs text-slate-900 font-medium">"Cancel my latest subscription"</p>
                                     </div>
 
                                     <div className="relative h-20 w-full flex justify-center">
                                         <div className="w-0.5 h-full bg-slate-100 absolute top-0" />
                                         
                                         {/* Animated Data packet */}
                                         <motion.div
                                             animate={{ y: [0, 80], opacity: [0, 1, 0] }}
                                             transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                             className="absolute top-0 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981]"
                                         />
                                     </div>
 
                                     <div className="grid grid-cols-2 gap-4 relative z-10">
                                         <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 opacity-40">
                                             <p className="font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Sales Model</p>
                                             <p className="text-[10px] text-slate-400 font-bold">12% CONF</p>
                                         </div>
                                         <div className="bg-white border border-[#10B981] rounded-2xl p-5 shadow-2xl shadow-[#10B981]/10 relative overflow-hidden">
                                             <div className="absolute top-0 right-0 w-12 h-12 bg-[#10B981]/5 rounded-bl-full flex items-center justify-center">
                                                 <CheckCircle2 size={16} className="text-[#10B981]" />
                                             </div>
                                             <p className="font-mono text-[10px] text-slate-900 mb-2 uppercase tracking-widest font-bold">Support Model</p>
                                             <p className="text-[10px] text-[#10B981] font-black uppercase tracking-tight">98% [ROUTE MATCH]</p>
                                         </div>
                                     </div>
                                 </div>
                             </motion.div>
                         )}
 
                         {/* MEMORY TAB */}
                         {activeTab === 'memory' && (
                             <motion.div key="memory" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="relative w-full max-w-md bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                                 <div className="bg-slate-50 px-5 py-4 border-b border-slate-200/60 flex items-center gap-3">
                                     <Database size={16} className="text-[#8B5CF6]" />
                                     <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">Pinecone Vector Retrieval</span>
                                 </div>
                                 <div className="p-8">
                                     <p className="font-mono text-[11px] text-[#10B981] mb-6 tracking-tight">&gt; Querying user_id: 84992_X...</p>
                                     <div className="space-y-4">
                                         <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                                             <p className="text-[11px] text-slate-600 font-mono leading-relaxed">[0.98] Past context: User upgraded to Pro on Jan 14th.</p>
                                         </motion.div>
                                         <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                                             <p className="text-[11px] text-slate-600 font-mono leading-relaxed">[0.91] Support ticket: #844 resolved regarding API limits.</p>
                                         </motion.div>
                                         <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-xl p-4 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                                             <p className="text-[11px] text-slate-900 font-bold font-mono flex items-center gap-3"><ChevronRight size={14} className="text-[#8B5CF6]" /> Context Injected into Prompt</p>
                                         </motion.div>
                                     </div>
                                 </div>
                             </motion.div>
                         )}
 
                         {/* TOOLS TAB */}
                         {activeTab === 'tools' && (
                             <motion.div key="tools" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="relative w-full max-w-md bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                                 <div className="bg-slate-800/50 px-5 py-4 border-b border-white/5 flex items-center gap-3">
                                     <Terminal size={16} className="text-[#F59E0B]" />
                                     <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">stripe_refund_tool.py</span>
                                 </div>
                                 <div className="p-8 font-mono text-[11px] leading-relaxed relative">
                                     <motion.div
                                         initial={{ height: 0 }}
                                         animate={{ height: 'auto' }}
                                         transition={{ duration: 1.5, ease: 'easeOut' }}
                                         className="overflow-hidden text-slate-300"
                                     >
                                         <p><span className="text-[#F59E0B]">import</span> stripe</p>
                                         <p className="mt-3 text-slate-500 font-bold"># Agent autonomously writing logic...</p>
                                         <p className="mt-2">stripe.api_key = <span className="text-blue-400">"sk_live_..."</span></p>
                                         <p className="mt-6"><span className="text-[#F59E0B]">def</span> <span className="text-blue-400">execute_refund</span>(charge_id):</p>
                                         <p className="pl-4 mt-2"><span className="text-[#F59E0B]">try</span>:</p>
                                         <p className="pl-8 text-slate-400">res = stripe.Refund.create(charge=charge_id)</p>
                                         <p className="pl-8 text-[#10B981]">return <span className="text-blue-400">"Success"</span></p>
                                         <p className="pl-4 mt-2"><span className="text-[#F59E0B]">except</span> Exception <span className="text-[#F59E0B]">as</span> e:</p>
                                         <p className="pl-8 text-rose-400">return str(e)</p>
                                     </motion.div>
                                     <motion.div
                                         initial={{ opacity: 0 }}
                                         animate={{ opacity: 1 }}
                                         transition={{ delay: 1.8 }}
                                         className="mt-8 pt-6 border-t border-white/5"
                                     >
                                         <p className="text-[10px] text-[#10B981] font-bold flex items-center gap-3">
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
