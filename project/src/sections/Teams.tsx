import { Users, GitBranch, MessageSquare, Shield, Lock, MessageCircle } from 'lucide-react';
 
 export default function Teams() {
   const highlights = [
     {
       icon: Users,
       title: 'Roles & Permissions',
       desc: 'Granular access control by workspace, project, and workflow level with strict SSO integration.',
       visual: (
         <div className="space-y-3 w-full">
           <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
             <div className="flex items-center gap-3">
               <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">JD</div>
               <span className="text-[10px] font-bold text-slate-900">John Doe</span>
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Admin</span>
           </div>
           <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm opacity-60">
             <div className="flex items-center gap-3">
               <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">AS</div>
               <span className="text-[10px] font-bold text-slate-900">Alice Smith</span>
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">Viewer</span>
           </div>
           <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm opacity-40">
             <div className="flex items-center gap-3">
               <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">RK</div>
               <span className="text-[10px] font-bold text-slate-900">Robert King</span>
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">Editor</span>
           </div>
         </div>
       )
     },
     {
       icon: GitBranch,
       title: 'Versioning & Locks',
       desc: 'Freeze critical flows, track changes, and enable safe collaborative editing with rollback history.',
       visual: (
         <div className="space-y-2.5 w-full">
           <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200 shadow-md">
             <Lock size={14} className="text-[#10B981]" />
             <div className="flex-1">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] font-bold text-slate-900">Production Flow</span>
                 <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">v2.4.0</span>
               </div>
               <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                 <div className="w-[100%] h-full bg-[#10B981]" />
               </div>
             </div>
           </div>
           <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm opacity-50">
             <GitBranch size={14} className="text-slate-400" />
             <div className="flex-1">
               <div className="flex justify-between items-center">
                 <span className="text-[10px] font-bold text-slate-900">Beta Testing</span>
                 <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">v2.3.9</span>
               </div>
             </div>
           </div>
           <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm opacity-30">
             <GitBranch size={14} className="text-slate-400" />
             <div className="flex-1">
               <div className="flex justify-between items-center">
                 <span className="text-[10px] font-bold text-slate-900">Archived</span>
                 <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">v2.3.8</span>
               </div>
             </div>
           </div>
         </div>
       )
     },
     {
       icon: MessageSquare,
       title: 'Team Collaboration',
       desc: 'Discuss workflow steps, request approvals, and maintain team context directly on the canvas.',
       visual: (
         <div className="relative h-full w-full flex items-center justify-center">
            <div className="absolute top-0 left-0 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 max-w-[140px] transform -rotate-3 translate-x-2 translate-y-2">
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-purple-100 shrink-0" />
                <p className="text-[9px] text-slate-600 leading-tight">Can we add a retry logic here?</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-0 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 max-w-[140px] transform rotate-2 -translate-x-2">
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-emerald-100 shrink-0 flex items-center justify-center">
                  <Shield size={8} className="text-[#10B981]" />
                </div>
                <p className="text-[9px] text-slate-900 font-bold leading-tight">Approved for Prod ✓</p>
              </div>
            </div>
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center">
              <MessageCircle size={24} className="text-slate-100" />
            </div>
         </div>
       )
     }
   ];
 
   return (
     <section id="teams" className="section-padding surface-tint overflow-hidden">
       <div className="container-standard">
         <div className="max-w-2xl mx-auto text-center mb-14">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
             <Users size={14} className="text-[#10B981]" />
             <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">Collaborative Core</span>
           </div>
           <h2 className="heading-section mb-4">
             Built for Teams <br />
             <span className="text-slate-300">that scale instantly.</span>
           </h2>
           <p className="text-subcopy max-w-xl mx-auto text-slate-500/90">
             Enterprise-grade collaboration tools that keep your engineering and product teams aligned, secure, and productive.
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
           {highlights.map((highlight, i) => (
             <div
               key={i}
               className="card-premium flex flex-col h-full group hover:-translate-y-2 transition-all duration-500"
             >
               <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 shadow-lg shadow-slate-100 border border-slate-800 group-hover:scale-105 transition-transform duration-500">
                 <highlight.icon size={22} className="text-[#10B981]" />
               </div>
               
               <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{highlight.title}</h3>
               <p className="text-sm font-medium text-slate-500 leading-relaxed mb-10 flex-grow">{highlight.desc}</p>
 
               <div className="aspect-video rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center p-6 relative overflow-hidden group/viz">
                  <div className="w-full h-full opacity-100 group-hover/viz:opacity-20 transition-opacity duration-500 flex items-center justify-center">
                    {highlight.visual}
                  </div>
                 
                 {/* Hover indicator */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/viz:opacity-100 transition-all duration-500 translate-y-4 group-hover/viz:translate-y-0">
                   <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 shadow-xl">
                     Explore Feature →
                   </span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
