import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon, Sparkles } from 'lucide-react';
 
 interface ConnectorCardProps {
     title: string;
     icon: LucideIcon;
     logo?: string;
     route: string;
     tags: string[];
     index: number;
 }
 
 const brandColorMap: Record<string, { primary: string; shadow: string }> = {
     'OpenAI': { primary: '#10B981', shadow: 'rgba(16, 185, 129, 0.4)' },
     'Anthropic': { primary: '#D97706', shadow: 'rgba(217, 119, 6, 0.4)' },
     'Salesforce': { primary: '#00A1E0', shadow: 'rgba(0, 161, 224, 0.4)' },
     'Slack': { primary: '#4A154B', shadow: 'rgba(74, 21, 75, 0.4)' },
     'HubSpot': { primary: '#FF7A59', shadow: 'rgba(255, 122, 89, 0.4)' },
     'Twilio': { primary: '#F22F46', shadow: 'rgba(242, 47, 70, 0.4)' },
     'WhatsApp': { primary: '#25D366', shadow: 'rgba(37, 211, 102, 0.4)' },
     'GitHub': { primary: '#181717', shadow: 'rgba(0, 0, 0, 0.3)' },
     'AWS': { primary: '#FF9900', shadow: 'rgba(255, 153, 0, 0.4)' },
     'Google': { primary: '#4285F4', shadow: 'rgba(66, 133, 244, 0.4)' },
     'PostgreSQL': { primary: '#336791', shadow: 'rgba(51, 103, 145, 0.4)' },
     'Snowflake': { primary: '#29B6F6', shadow: 'rgba(41, 182, 246, 0.4)' },
     'BigQuery': { primary: '#4285F4', shadow: 'rgba(66, 133, 244, 0.4)' },
     'default': { primary: '#10B981', shadow: 'rgba(16, 185, 129, 0.3)' }
 };
 
 const ConnectorCard: React.FC<ConnectorCardProps> = ({ title, icon: IconComponent, logo, route, tags, index }) => {
     const [isHovered, setIsHovered] = useState(false);
     const x = useMotionValue(0);
     const y = useMotionValue(0);
 
     const cardRef = useRef<HTMLDivElement>(null);
 
     const mouseXSpring = useSpring(x);
     const mouseYSpring = useSpring(y);
 
     const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
     const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
 
     const handleMouseMove = (event: React.MouseEvent) => {
         if (!cardRef.current) return;
         const rect = cardRef.current.getBoundingClientRect();
         const width = rect.width;
         const height = rect.height;
         const mouseX = event.clientX - rect.left;
         const mouseY = event.clientY - rect.top;
         const xPct = (mouseX / width) - 0.5;
         const yPct = (mouseY / height) - 0.5;
         x.set(xPct);
         y.set(yPct);
     };
 
     const handleMouseLeave = () => {
         x.set(0);
         y.set(0);
         setIsHovered(false);
     };
 
     const brand = brandColorMap[title] || brandColorMap.default;
 
     return (
         <Link to={route} className="block group perspective-1000 h-full">
             <motion.div
                 ref={cardRef}
                 onMouseMove={handleMouseMove}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={handleMouseLeave}
                 style={{
                     rotateX,
                     rotateY,
                     transformStyle: "preserve-3d",
                 }}
                 transition={{ duration: 0.4, delay: index * 0.02 }}
                 className="relative h-full bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-500 hover:border-slate-300 flex flex-col items-center text-center justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
             >
                 {/* Brand-Specific Aura */}
                 <div
                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl -z-10"
                     style={{
                         background: `radial-gradient(circle at center, ${brand.primary}10, transparent 70%)`
                     }}
                 />
 
                 <div className="relative z-10 w-full flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>
                     {/* Icon Container */}
                     <div className="relative mb-5">
                         <motion.div
                             animate={isHovered ? {
                                 scale: [1, 1.05, 1],
                                 rotate: [0, 2, -2, 0]
                             } : {}}
                             transition={{ duration: 0.4 }}
                             className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-md flex items-center justify-center p-2.5 relative z-20 overflow-hidden"
                             style={{
                                 boxShadow: isHovered ? `0 8px 20px -4px ${brand.shadow}` : '0 2px 4px -1px rgb(0 0 0 / 0.05)'
                             }}
                         >
                             {logo ? (
                                 <img src={logo} alt={title} className="w-full h-full object-contain" />
                             ) : (
                                 <IconComponent size={24} style={{ color: brand.primary }} />
                             )}
                         </motion.div>
                     </div>
 
                     <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight group-hover:text-black transition-colors">
                         {title}
                     </h3>
 
                     {/* Status Badge */}
                     <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                         <Sparkles size={10} style={{ color: brand.primary }} className="animate-pulse" />
                         <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: brand.primary }}>
                             Native Core
                         </span>
                     </div>
                 </div>
 
                 {/* Footer Tags */}
                 <div className="mt-6 flex flex-wrap justify-center gap-1.5 relative z-10" style={{ transform: "translateZ(10px)" }}>
                     {tags.slice(0, 1).map((tag, i) => (
                         <span
                             key={i}
                             className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-md bg-slate-50 text-slate-400 border border-slate-100 transition-colors"
                         >
                             {tag}
                         </span>
                     ))}
                 </div>
             </motion.div>
         </Link>
     );
 };
 
 export default ConnectorCard;
