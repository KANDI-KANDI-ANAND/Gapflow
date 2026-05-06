import { Github, Twitter, Linkedin } from 'lucide-react';
 
 export default function Footer() {
   const menus = {
     Product: ['Features', 'Use Cases', 'Templates', 'Pricing'],
     Developers: ['Docs', 'API', 'SDK', 'Status'],
     Company: ['About', 'Partners', 'Contact', 'Careers'],
     Resources: ['Blog', 'Community', 'Security', 'Privacy']
   };
 
   return (
     <footer id="footer" className="bg-white border-t border-slate-50 pt-10 pb-6 lg:pt-14 lg:pb-8">
       <div className="container-standard">
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-20 mb-10">
           <div className="col-span-2">
             <div className="mb-8">
               <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Gapflow</h3>
               <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
                 The AI-powered workflow platform that connects your apps, data, and teams with production-grade reliability and visual reasoning.
               </p>
             </div>
             <div className="flex gap-4">
               {[Twitter, Github, Linkedin].map((Icon, i) => (
                 <a
                   key={i}
                   href="#"
                   className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-900 hover:border-slate-900 transition-all shadow-sm"
                 >
                   <Icon size={18} />
                 </a>
               ))}
             </div>
           </div>
  
           {Object.entries(menus).map(([category, links]) => (
             <div key={category}>
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">
                 {category}
               </h4>
               <ul className="space-y-3">
                 {links.map(link => (
                   <li key={link}>
                     <a
                       href="#"
                       className="text-sm font-bold text-slate-900 hover:text-[#10B981] transition-colors"
                     >
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
  
         <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-[#10B981]" />
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               © 2025 Gapcloud Pty Ltd. All rights reserved.
             </p>
           </div>
           
           <div className="flex gap-10">
             {['Terms of Service', 'Privacy Policy', 'Security'].map(item => (
               <a key={item} href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">
                 {item}
               </a>
             ))}
           </div>
         </div>
       </div>
     </footer>
   );
 }
