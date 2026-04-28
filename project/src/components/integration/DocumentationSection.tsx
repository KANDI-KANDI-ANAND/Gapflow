import { BookOpen, ArrowRight } from 'lucide-react';
 
 interface DocumentationSectionProps {
   documentation: Array<{
     title: string;
     description: string;
     link: string;
   }>;
 }
 
 export default function DocumentationSection({ documentation }: DocumentationSectionProps) {
   return (
     <section className="py-24 lg:py-32 bg-slate-50/50 border-y border-slate-200/40">
       <div className="container-standard">
         <div className="text-center mb-20">
           <h2 className="heading-section mb-6">
             Documentation
           </h2>
           <p className="text-subcopy max-w-2xl mx-auto text-slate-500/90">
             Comprehensive guides to help you get the most out of this integration. Managed, documented, and secure.
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
           {documentation.map((doc, index) => (
             <div
               key={index}
               className="card-premium group"
             >
               <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#10B981]/5 group-hover:border-[#10B981]/20 transition-all duration-500">
                 <BookOpen className="w-7 h-7 text-slate-400 group-hover:text-[#10B981] transition-colors duration-500" />
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                 {doc.title}
               </h3>
               <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
                 {doc.description}
               </p>
               <a
                 href={doc.link}
                 className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#10B981] hover:text-slate-900 transition-colors"
               >
                 <span>Read more</span>
                 <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
           ))}
         </div>
 
         <div className="text-center">
           <button className="btn-secondary min-w-[240px]">
             Explore More Documentation
           </button>
         </div>
       </div>
     </section>
   );
 }
