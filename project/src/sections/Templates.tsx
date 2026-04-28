import { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import templatesData from '../data/templates.json';
 
 export default function Templates() {
   const [activeFilter, setActiveFilter] = useState('All');
 
   const allCategories = Array.from(
     new Set(templatesData.templates.flatMap(t => t.categories))
   );
   const filters = ['All', ...allCategories].slice(0, 7);
 
   const allFilteredTemplates = activeFilter === 'All'
     ? templatesData.templates
     : templatesData.templates.filter(t => t.categories.includes(activeFilter));
 
   const filteredTemplates = allFilteredTemplates.slice().reverse().slice(0, 6);
 
   return (
     <section id="templates" className="section-padding bg-white border-y border-slate-100/50">
       <div className="container-standard relative z-10">
         <div className="max-w-3xl mx-auto text-center mb-24">
           <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8">
             <Zap size={14} className="text-[#10B981]" />
             <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">Start Building</span>
           </div>
           <h2 className="heading-section mb-6">
             Get started with <br />
             <span className="text-slate-300">pre-built workflows.</span>
           </h2>
           <p className="text-subcopy max-w-2xl mx-auto text-slate-500/90">
             Deploy instantly with our library of battle-tested automation blueprints. Pick a category to filter.
           </p>
         </div>
  
         <div className="flex flex-wrap justify-center gap-3 mb-20">
           {filters.map(filter => (
             <button
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border ${activeFilter === filter
                 ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200/50'
                 : 'bg-white border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                 }`}
             >
               {filter}
             </button>
           ))}
         </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
           {filteredTemplates.map((template) => (
             <Link
               key={template.id}
               to={`/templates/${template.slug}`}
               className="group bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden hover:border-slate-900/10 transition-all duration-500 shadow-sm hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] flex flex-col h-full"
             >
               <div className="h-56 bg-slate-50/50 flex items-center justify-center p-10 border-b border-slate-100/50 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 {template.thumbnails[0]?.startsWith('/') ? (
                   <img
                     src={template.thumbnails[0]}
                     alt={template.title}
                     className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-[0.85] group-hover:scale-100"
                   />
                 ) : (
                   <div className="text-center text-slate-300 group-hover:text-slate-900 transition-colors duration-500">
                     <Zap size={32} className="mx-auto mb-4 opacity-20 group-hover:opacity-100" />
                     <p className="text-[9px] font-bold uppercase tracking-[0.2em]">{template.title}</p>
                   </div>
                 )}
               </div>
  
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-start justify-between mb-6">
                   <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-black transition-colors line-clamp-2">
                     {template.title}
                   </h3>
                 </div>
  
                 <div className="mt-auto flex items-center justify-between">
                   <div className="flex items-center gap-3 text-[10px] font-bold text-[#10B981] uppercase tracking-[0.15em] group/btn">
                     <span>Use template</span>
                     <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover/btn:bg-[#10B981] group-hover/btn:text-white transition-all duration-300">
                       <ArrowRight size={14} />
                     </div>
                   </div>
                   <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{template.categories[0]}</span>
                 </div>
               </div>
             </Link>
           ))}
         </div>
 
         <div className="mt-20 text-center">
           <Link
             to="/templates"
             className="btn-primary min-w-[240px]"
           >
             <span>Explore all templates</span>
             <ArrowRight size={18} className="ml-3" />
           </Link>
         </div>
       </div>
     </section>
   );
 }
