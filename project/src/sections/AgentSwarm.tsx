import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, BrainCircuit, Activity, Zap } from 'lucide-react';
 
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
 
     useEffect(() => {
         const interval = setInterval(() => {
             setStep((prev) => (prev + 1) % REASONING_STEPS.length);
         }, 4000);
         return () => clearInterval(interval);
     }, []);
 
     const isNodeActive = (id: string) => {
         if (id === 'router') return step === 0;
         if (id === 'analyst') return step === 1 || step === 3;
         if (id === 'memory') return step === 2;
         if (id === 'execution') return step === 4;
         return false;
     };
 
     return (
         <section className="section-padding bg-white relative overflow-hidden">
             <div className="container-standard">
                 <div className="text-center mb-24">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-8">
                         <Network size={14} className="text-[#10B981]" />
                         <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Multi-Agent Orchestration</span>
                     </div>
                     <h2 className="heading-section mb-8">
                         Isolated Intelligence.<br />
                         <span className="text-slate-300">Seamless Context.</span>
                     </h2>
                     <p className="text-subcopy max-w-3xl mx-auto">
                         Don't rely on a single bottleneck. Gapflow provisions isolated, specialized AI agents that seamlessly exchange context in real-time to solve complex, multi-step operations.
                     </p>
                 </div>
 
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     {/* Left: Visualization */}
                     <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                         <div className="relative w-full max-w-lg aspect-square">
                             {/* SVG Connections */}
                             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                 <path d="M 100 200 L 200 100" fill="none" stroke={isNodeActive('router') || isNodeActive('analyst') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('router') ? '0' : '4 4'} className="transition-all duration-500" />
                                 <path d="M 200 100 L 200 300" fill="none" stroke={isNodeActive('analyst') || isNodeActive('memory') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('analyst') && step === 1 ? '0' : '4 4'} className="transition-all duration-500" />
                                 <path d="M 200 300 L 200 100" fill="none" stroke={isNodeActive('memory') || isNodeActive('analyst') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('memory') ? '0' : '4 4'} className="transition-all duration-500" />
                                 <path d="M 200 100 L 300 200" fill="none" stroke={isNodeActive('analyst') || isNodeActive('execution') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('analyst') && step === 3 ? '0' : '4 4'} className="transition-all duration-500" />
                             </svg>
 
                             {/* Nodes */}
                             <div className={`absolute top-1/2 left-[0%] -translate-y-1/2 w-20 h-20 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('router') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                 <BrainCircuit size={28} className={isNodeActive('router') ? 'text-slate-900' : 'text-slate-300'} />
                                 <span className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Router</span>
                             </div>
 
                             <div className={`absolute top-[0%] left-1/2 -translate-x-1/2 w-20 h-20 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('analyst') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                 <Activity size={28} className={isNodeActive('analyst') ? 'text-slate-900' : 'text-slate-300'} />
                                 <span className="absolute -top-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Analyst</span>
                             </div>
 
                             <div className={`absolute top-[92%] left-1/2 -translate-x-1/2 w-20 h-20 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('memory') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                 <Database size={28} className={isNodeActive('memory') ? 'text-slate-900' : 'text-slate-300'} />
                                 <span className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Memory</span>
                             </div>
 
                             <div className={`absolute top-1/2 right-[0%] -translate-y-1/2 w-24 h-24 bg-slate-900 border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('execution') ? 'shadow-2xl scale-110' : 'border-slate-800'}`}>
                                 <Zap size={32} className={isNodeActive('execution') ? 'text-[#10B981]' : 'text-slate-600'} />
                                 <span className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Execution</span>
                             </div>
                         </div>
                     </div>
 
                     {/* Right: Info */}
                     <div className="lg:col-span-5 space-y-10">
                         <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Current Agent Thought</p>
                             <AnimatePresence mode="wait">
                                 <motion.div
                                     key={step}
                                     initial={{ opacity: 0, x: 10 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     exit={{ opacity: 0, x: -10 }}
                                     className="flex gap-4 items-start"
                                 >
                                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                         <BrainCircuit size={18} className="text-slate-900" />
                                     </div>
                                     <p className="text-lg font-bold text-slate-900 leading-snug">
                                         "{REASONING_STEPS[step].thought}"
                                     </p>
                                 </motion.div>
                             </AnimatePresence>
                         </div>
 
                         <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
                             <div className="flex items-center justify-between mb-6">
                                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Console</p>
                                  <div className="flex gap-1.5">
                                      <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                      <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                                      <div className="w-2 h-2 rounded-full bg-[#10B981]/20" />
                                  </div>
                              </div>
                              <div className="space-y-3 font-mono text-xs">
                                  {REASONING_STEPS.map((s, i) => (
                                      <div 
                                          key={i} 
                                          className={`transition-colors duration-500 ${i <= step ? 'text-[#10B981]' : 'text-slate-800'}`}
                                      >
                                          {s.console}
                                      </div>
                                  ))}
                              </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     );
 }
