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
           className="group flex flex-col h-full bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-purple-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] shadow-sm relative"
        >
            {/* Top Workflow Area (Canvas Placeholder) */}
            <div className="h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative overflow-hidden group-hover:bg-purple-50/50 transition-colors duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Integration Icons - CENTERED IN CANVAS */}
                <div className="flex -space-x-3 relative z-20">
                    {template.integrations && template.integrations.length > 0 ? (
                        template.integrations.slice(0, 4).map((int, i) => {
                            const config = integrationMap[int.toLowerCase()] || integrationMap.default;
                            const Icon = config.icon;
                            return (
                                <div
                                    key={i}
                                    className={`w-14 h-14 rounded-2xl ${config.bgColor} border-4 border-white shadow-md flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                                    style={{ transitionDelay: `${i * 50}ms`, zIndex: 10 - i }}
                                >
                                    <Icon size={24} color={config.color} />
                                </div>
                            );
                        })
                    ) : (
                       <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center">
                           <Database size={24} className="text-slate-200" />
                       </div>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                {/* Workflow Name */}
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {template.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2 mb-6">
                    {template.description}
                </p>

                {/* Published By */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[10px] text-white font-black">G</div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Published by Gapflow</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[#10B981] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <span>Try now</span>
                        <ChevronRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    );
};
 
 export default TemplateCard;
