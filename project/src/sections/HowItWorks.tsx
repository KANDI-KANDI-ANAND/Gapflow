import { MousePointer, Bot, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
 
 export default function HowItWorks() {
   const steps = [
     {
       number: '01',
       icon: MousePointer,
       title: 'Select Triggers',
       desc: 'Connect your communication channels, CRMs, BI tools, or custom webhooks in seconds.',
       details: ['500+ connectors', 'Real-time streaming', 'Dynamic mapping']
     },
     {
       number: '02',
       icon: Bot,
       title: 'Design Logic',
       desc: 'Layer in multi-agent reasoning, branching paths, and vector-backed knowledge.',
       details: ['Isolated reasoning', 'Branching logic', 'Secure vectoring']
     },
     {
       number: '03',
       icon: Send,
       title: 'Automate Action',
       desc: 'Dispatch outcomes to APIs, ticketing systems, dashboards, and messaging platforms.',
       details: ['Orchestration', 'Error handling', 'Execution audits']
     }
   ];
 
   return (
     <section id="how-it-works" className="section-padding bg-white">
       <div className="container-standard">
         <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
           <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
             <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
             <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">The Methodology</span>
           </div>
           <h2 className="heading-section mb-4">
             Simplicity at Scale.
           </h2>
           <p className="text-subcopy text-slate-500/90">
             Build enterprise-grade automations without the technical overhead. Our modular architecture allows you to scale from simple triggers to complex multi-agent swarms.
           </p>
         </div>
  
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
           {steps.map((step, i) => (
             <div key={i} className="flex flex-col group">
               <div className="flex items-center gap-5 mb-8">
                 <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xl shadow-slate-200/50 transition-all duration-500 group-hover:bg-[#10B981] group-hover:scale-105">
                   {step.number}
                 </div>
                 <div className="h-px flex-1 bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500" />
               </div>
 
               <div className="mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 shadow-sm group-hover:border-slate-900/10 transition-all duration-500">
                   <step.icon size={24} className="text-slate-900" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{step.title}</h3>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">{step.desc}</p>
               </div>
 
               <div className="space-y-3 pt-6 border-t border-slate-100 mt-auto">
                 {step.details.map((detail, idx) => (
                   <div key={idx} className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#10B981] transition-colors duration-500" />
                     <span>{detail}</span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
  
         <div className="mt-16 text-center">
           <Link to="/signup" className="btn-primary w-fit mx-auto group min-w-[240px]">
             <span>Start Building Now</span>
             <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
           </Link>
         </div>
       </div>
     </section>
   );
 }
