import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Cloud, MessageSquare, Bot, GitMerge, Layers, Mail, Phone, Globe, HardDrive, BarChart, Database as SqlIcon, FileSpreadsheet } from 'lucide-react';
 
 interface TemplateCardProps {
     template: {
         id: string;
         slug: string;
         title: string;
         description: string;
         categories: string[];
         tags: string[];
         integrations?: string[];
     };
 }
 
 // Map integration keys from JSON to icons and colors
 const integrationMap: Record<string, { icon: any, color: string, bgColor: string }> = {
     'salesforce': { icon: Cloud, color: '#00A1E0', bgColor: 'bg-sky-50' },
     'slack': { icon: MessageSquare, color: '#4A154B', bgColor: 'bg-purple-50' },
     'hubspot': { icon: GitMerge, color: '#FF7A59', bgColor: 'bg-orange-50' },
     'openai': { icon: Bot, color: '#74aa9c', bgColor: 'bg-teal-50' },
     'bright-pattern': { icon: Layers, color: '#10B981', bgColor: 'bg-emerald-50' },
     'genesys-cloud': { icon: Globe, color: '#FF4F1F', bgColor: 'bg-red-50' },
     'microsoft-365-email': { icon: Mail, color: '#0078D4', bgColor: 'bg-blue-50' },
     'google-gmail': { icon: Mail, color: '#EA4335', bgColor: 'bg-red-50' },
     'twilio-sms': { icon: Phone, color: '#F22F46', bgColor: 'bg-red-50' },
     'aws-s3': { icon: HardDrive, color: '#FF9900', bgColor: 'bg-orange-50' },
     'onedrive': { icon: HardDrive, color: '#0078D4', bgColor: 'bg-blue-50' },
     'asknicely': { icon: BarChart, color: '#FF4D4D', bgColor: 'bg-red-50' },
     'surveymonkey': { icon: BarChart, color: '#00BF6F', bgColor: 'bg-emerald-50' },
     'mysql': { icon: SqlIcon, color: '#4479A1', bgColor: 'bg-blue-50' },
     'microsoft-365-excel': { icon: FileSpreadsheet, color: '#217346', bgColor: 'bg-emerald-50' },
     'google-sheets': { icon: FileSpreadsheet, color: '#0F9D58', bgColor: 'bg-emerald-50' },
     'default': { icon: Database, color: '#64748b', bgColor: 'bg-slate-50' }
 };
 
 const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
     return (
         <Link 
            to={`/templates/${template.slug}`} 
            className="group flex flex-col h-full bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] shadow-sm relative overflow-hidden"
         >
             {/* Integration Icons - TOP LEFT */}
             <div className="flex -space-x-2 mb-10 relative z-20">
                 {template.integrations && template.integrations.length > 0 ? (
                     template.integrations.slice(0, 3).map((int, i) => {
                         const config = integrationMap[int.toLowerCase()] || integrationMap.default;
                         const Icon = config.icon;
                         return (
                             <div
                                 key={i}
                                 className={`w-11 h-11 rounded-full ${config.bgColor} border-2 border-white shadow-sm flex items-center justify-center relative z-10 transition-transform group-hover:-translate-y-1`}
                                 style={{ transitionDelay: `${i * 50}ms`, zIndex: 10 - i }}
                             >
                                 <Icon size={18} color={config.color} />
                             </div>
                         );
                     })
                 ) : (
                    <div className="w-11 h-11 rounded-full bg-slate-50 border-2 border-white shadow-sm flex items-center justify-center">
                        <Database size={18} className="text-slate-400" />
                    </div>
                 )}
             </div>
 
             {/* Title - Stable text color on hover */}
             <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.2] relative z-20">
                 {template.title}
             </h3>
 
             {/* Description - Stable text color on hover */}
             <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed line-clamp-3 mb-10 flex-grow relative z-20">
                 {template.description}
             </p>
 
             {/* Action */}
             <div className="mt-auto pt-6 flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight group-hover:text-[#10B981] transition-colors relative z-20">
                 <span>Try it</span>
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
             </div>
 
             {/* Hover Tint - Subtle background change for contrast, doesn't overlap text layer */}
             <div className="absolute inset-0 bg-slate-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
         </Link>
     );
 };
 
 export default TemplateCard;
