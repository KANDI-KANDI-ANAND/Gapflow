import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
 
 interface PossibilitiesSectionProps {
   data: {
     tabs: Array<{
       name: string;
       items: string[];
     }>;
   };
   integrationName: string;
 }
 
 export default function PossibilitiesSection({ data, integrationName }: PossibilitiesSectionProps) {
   const [activeTab, setActiveTab] = useState(0);
 
   return (
     <section className="section-padding bg-white">
       <div className="container-standard">
         <div className="text-center mb-20">
           <h2 className="heading-section mb-6">
             Possibilities with {integrationName}
           </h2>
           <p className="text-subcopy max-w-2xl mx-auto text-slate-500/90">
             Discover what you can achieve with our powerful integration capabilities. High-performance nodes built for scale.
           </p>
         </div>
 
         <div className="max-w-5xl mx-auto">
           {/* Tab Navigation */}
           <div className="flex flex-wrap justify-center gap-3 mb-16">
             {data.tabs.map((tab, index) => (
               <button
                 key={index}
                 onClick={() => setActiveTab(index)}
                 className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                   activeTab === index
                     ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200/50'
                     : 'bg-white border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                 }`}
               >
                 {tab.name}
               </button>
             ))}
           </div>
 
           <div className="surface-tint rounded-[3rem] p-8 lg:p-12 border border-slate-200/60 shadow-inner">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.4 }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
               >
                 {data.tabs[activeTab].items.map((item, index) => (
                   <div
                     key={index}
                     className="flex items-center p-6 bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 group"
                   >
                     <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mr-6 group-hover:bg-[#10B981]/5 group-hover:border-[#10B981]/20 transition-colors duration-500">
                       <CheckCircle2 size={18} className="text-slate-300 group-hover:text-[#10B981] transition-colors duration-500" />
                     </div>
                     <span className="text-sm font-bold text-slate-700 tracking-tight leading-relaxed">{item}</span>
                   </div>
                 ))}
               </motion.div>
             </AnimatePresence>
           </div>
         </div>
       </div>
     </section>
   );
 }
