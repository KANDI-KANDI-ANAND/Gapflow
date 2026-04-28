import Breadcrumbs from '../Breadcrumbs';
import { motion } from 'framer-motion';
 
 interface IntegrationHeroProps {
   data: {
     name: string;
     logo: string;
     categories: string[];
     hero: {
       heading: string;
       subheading: string;
       image: string;
     };
   };
 }
 
 export default function IntegrationHero({ data }: IntegrationHeroProps) {
   return (
     <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
       {/* Background Mesh */}
       <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 right-0 w-[60%] h-full bg-[#10B981]/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[60%] h-full bg-blue-600/10 blur-[150px] rounded-full" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
       </div>
 
       <div className="container-standard relative z-10">
         <div className="mb-12">
           <Breadcrumbs items={[{ label: 'Integrations', path: '/integrations' }, { label: data.name }]} />
         </div>
         
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-8"
           >
             <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
               {data.hero.heading}
             </h1>
             <p className="text-lg lg:text-xl text-slate-400 leading-relaxed font-medium tracking-tight">
               {data.hero.subheading}
             </p>
 
             <div className="flex flex-wrap gap-3">
               {data.categories.map((category, index) => (
                 <span
                   key={index}
                   className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 text-slate-300"
                 >
                   {category}
                 </span>
               ))}
             </div>
 
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
               <button className="btn-primary !bg-[#10B981] !text-slate-900 hover:!bg-white min-w-[200px]">
                 Get Started
               </button>
               <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-[0.15em] text-center">
                 View Documentation
               </button>
             </div>
           </motion.div>
 
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex justify-center lg:justify-end items-center"
           >
             <div className="relative group">
               <div className="absolute inset-0 bg-[#10B981]/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
               <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-16 lg:p-20 rounded-[3rem] border border-white/10 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]">
                 <img
                   src={data.hero.image}
                   alt={`${data.name} logo`}
                   className="w-32 h-32 lg:w-44 lg:h-44 object-contain transition-all duration-700 grayscale group-hover:grayscale-0"
                 />
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }
