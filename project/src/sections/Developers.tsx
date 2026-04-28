import { Code2, Terminal, Webhook, FileJson, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
 
 export default function Developers() {
   const features = [
     {
       icon: Code2,
       text: 'Custom nodes (SDK)',
       tag: 'Upcoming',
       description: 'Build your own custom integrations with our high-performance SDK.'
     },
     {
       icon: Terminal,
       text: 'CLI & REST API',
       tag: 'Upcoming',
       description: 'Automate deployments directly from your CI/CD pipelines.'
     },
     {
       icon: Webhook,
       text: 'Incoming/outgoing webhooks',
       description: 'Create event-driven workflows that respond instantly.'
     },
     {
       icon: FileJson,
       text: 'JSON export & import',
       description: 'Maintain version control with full JSON schema support.'
     }
   ];
 
   return (
     <section id="developers" className="section-padding bg-white overflow-hidden">
       <div className="container-standard">
         <div className="max-w-3xl mx-auto text-center mb-14">
           <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
             <Code2 size={14} className="text-slate-900" />
             <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">Developer First</span>
           </div>
           
           <h2 className="heading-section mb-4">
             Engineered for <br />
             <span className="text-slate-300">Scale & Extensibility.</span>
           </h2>
           <p className="text-subcopy text-slate-500/90">
             Direct access to the underlying engine. Export JSON blueprints, trigger via CLI, or build custom nodes with our SDK.
           </p>
         </div>
 
         <div className="bg-slate-50/50 border border-slate-200/60 rounded-[3rem] p-6 lg:p-10 shadow-inner">
           <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
             {/* Left: Features List */}
             <div className="flex flex-col gap-3">
               {features.map((feature, i) => (
                 <div
                   key={i}
                   className="flex-1 flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-200/60 transition-all duration-500 hover:border-slate-900 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] group"
                 >
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200/50 group-hover:scale-105 transition-transform">
                     <feature.icon size={22} className="text-[#10B981]" />
                   </div>
                   <div className="text-left">
                     <div className="flex items-center gap-3 mb-1.5">
                       <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.15em]">{feature.text}</h3>
                       {feature.tag && (
                         <span className="text-[9px] font-black text-[#10B981] uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                           {feature.tag}
                         </span>
                       )}
                     </div>
                     <p className="text-[11px] text-slate-500 font-medium leading-relaxed tracking-tight">{feature.description}</p>
                   </div>
                 </div>
               ))}
               
               <div className="mt-4 px-2">
                 <Link to="/signup" className="btn-primary w-full justify-center !py-5">
                   Access Developer SDK
                   <ArrowRight size={18} className="ml-3" />
                 </Link>
               </div>
             </div>
 
             {/* Right: Code Console */}
             <div className="relative flex flex-col min-h-[400px]">
               <div className="absolute -inset-10 bg-[#10B981]/5 blur-[120px] rounded-full pointer-events-none" />
               <div className="relative flex-grow bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
                 <div className="flex items-center justify-between px-8 py-4 bg-white/5 border-b border-white/5">
                   <div className="flex items-center gap-4">
                     <Terminal size={16} className="text-[#10B981]" />
                     <span className="text-[10px] text-white/40 font-bold font-mono tracking-[0.2em] uppercase">deploy-flow.js</span>
                   </div>
                   <div className="flex gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                     <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                   </div>
                 </div>
 
                 <div className="p-8 font-mono text-[11px] overflow-x-auto flex-grow bg-slate-900/50">
                   <pre className="text-slate-400">
                     <code className="block leading-relaxed">
                       <span className="text-[#10B981] font-bold">const</span> <span className="text-white">response</span> = <span className="text-[#10B981] font-bold">await</span> <span className="text-blue-400">fetch</span>({'\n'}
                       {'  '}<span className="text-emerald-400">'https://api.gapflow.ai/v1/flows'</span>,{'\n'}
                       {'  '}{'{'}{'\n'}
                       {'    '}<span className="text-slate-500">method</span>: <span className="text-emerald-400">'POST'</span>,{'\n'}
                       {'    '}<span className="text-slate-500">headers</span>: {'{'}{'\n'}
                       {'      '}<span className="text-emerald-400">'Auth'</span>: <span className="text-emerald-400">`Bearer token`</span>,{'\n'}
                       {'      '}<span className="text-emerald-400">'Content-Type'</span>: <span className="text-emerald-400">'json'</span>{'\n'}
                       {'    '}{'}'},{'\n'}
                       {'    '}<span className="text-slate-500">body</span>: <span className="text-white">JSON</span>.<span className="text-blue-400">stringify</span>({'{'}){'\n'}
                       {'      '}<span className="text-slate-500">name</span>: <span className="text-emerald-400">'Daily Digest'</span>{'\n'}
                       {'    '}{'}'}{'\n'}
                       {'  '}{'}'}{'\n'}
                       );{'\n\n'}
                       <span className="text-white/20 font-bold">// ✓ Process initiated successfully.</span>
                     </code>
                   </pre>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 }
