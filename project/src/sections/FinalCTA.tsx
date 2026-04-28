import { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
 
 export default function FinalCTA() {
   const [prompt, setPrompt] = useState('');
   const [chatState, setChatState] = useState<'idle' | 'typing' | 'done'>('idle');
   const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
   const chatContainerRef = useRef<HTMLDivElement>(null);
 
   const handleSend = (text: string) => {
     if (!text) return;
     setPrompt('');
     setChatState('typing');
     setMessages([{ role: 'user', text }]);
 
     setTimeout(() => {
       setMessages(prev => [...prev, { role: 'ai', text: 'Analyzing intent... mapping endpoints for ' + (text.split(' ')[2] || 'automation') + '...' }]);
       setTimeout(() => {
         setChatState('done');
         setMessages(prev => [...prev, { role: 'ai', text: 'Agent deployed successfully. Ready for operations.' }]);
       }, 2000);
     }, 800);
   };
 
   useEffect(() => {
     if (chatContainerRef.current) {
       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
     }
   }, [messages]);
 
   return (
     <section id="get-started" className="py-16 lg:py-24 bg-slate-900 overflow-hidden relative">
       {/* Vibrant Gradient Backgrounds */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[100%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[100%] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
       </div>
 
       <div className="container-standard relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Left: Content */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-xl"
           >
             <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-2xl">
               <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
               <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.15em]">Instant Deployment</span>
             </div>
             
             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
               Deploy your first agent <br />
               <span className="text-slate-500">in seconds.</span>
             </h2>
             
             <p className="text-base lg:text-lg font-medium text-slate-400 mb-10 leading-relaxed max-w-lg tracking-tight">
               Describe your automation, and Gapflow will handle the logic, security, and orchestration. No complex codebases required.
             </p>
 
             <div className="space-y-6">
               {[
                 'Zero-config cloud deployment',
                 'Automatic API authentication',
                 'Real-time observability'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-5 text-[11px] font-bold text-white uppercase tracking-[0.15em]">
                   <div className="w-7 h-7 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 shadow-lg shadow-[#10B981]/5">
                     <CheckCircle2 size={14} className="text-[#10B981]" />
                   </div>
                   <span>{item}</span>
                 </div>
               ))}
             </div>
           </motion.div>
 
           {/* Right: Interaction Card */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
           >
             <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.03]">
               <div className="flex items-center gap-4">
                 <Terminal className="text-[#10B981]" size={16} />
                 <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Agent Shell v1.0</span>
               </div>
               <div className="flex gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                 <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
               </div>
             </div>
 
             <div ref={chatContainerRef} className="h-[340px] p-8 overflow-y-auto font-mono text-[11px] space-y-4 scroll-smooth bg-slate-900/20">
               {chatState === 'idle' && (
                 <div className="space-y-4">
                   <p className="text-[#10B981] font-bold tracking-widest">&gt; READY FOR DEPLOYMENT</p>
                   <p className="text-white/20 uppercase tracking-[0.1em] font-medium leading-relaxed">Describe a task below to begin agent synthesis and node mapping...</p>
                 </div>
               )}
 
               {messages.map((msg, idx) => (
                 <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'text-white' : 'text-[#10B981]'} font-bold`}>
                   <span className="shrink-0 opacity-50">{msg.role === 'user' ? '>' : '✓'}</span>
                   <p className="leading-relaxed tracking-tight">{msg.text}</p>
                 </div>
               ))}
 
               {chatState === 'typing' && (
                 <div className="flex gap-2 text-[#10B981]">
                   <span className="animate-pulse">_</span>
                 </div>
               )}
             </div>
 
             <div className="p-8 bg-white/[0.02] border-t border-white/5">
               <div className="relative">
                 <input
                   type="text"
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend(prompt)}
                   disabled={chatState !== 'idle'}
                   placeholder="e.g. Build a Zendesk refund agent"
                   className="w-full bg-slate-900/60 border border-white/10 rounded-full pl-8 pr-16 py-5 text-white text-sm font-bold placeholder-white/5 focus:outline-none focus:border-[#10B981] transition-all shadow-inner"
                 />
                 <button
                   onClick={() => handleSend(prompt)}
                   disabled={!prompt.trim() || chatState !== 'idle'}
                   className="absolute right-2.5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#10B981] text-slate-900 flex items-center justify-center rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                 >
                   <Send size={18} />
                 </button>
               </div>
             </div>
 
             {chatState === 'done' && (
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: 'auto' }}
                 className="bg-[#10B981] overflow-hidden"
               >
                 <Link to="/signup" className="flex items-center justify-center w-full py-6 text-slate-900 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white transition-all duration-300">
                   Enter Management Dashboard
                 </Link>
               </motion.div>
             )}
           </motion.div>
         </div>
       </div>
     </section>
   );
 }
