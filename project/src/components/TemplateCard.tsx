import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, MessageSquare, Database, Bot, GitMerge, Layers } from 'lucide-react';
import BlueprintPreview from './BlueprintPreview';

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

// Map integration names to specialized icons and colors
const integrationMap: Record<string, { icon: any, color: string, bgColor: string }> = {
    'Salesforce': { icon: Cloud, color: '#00A1E0', bgColor: 'bg-sky-50' },
    'Slack': { icon: MessageSquare, color: '#4A154B', bgColor: 'bg-purple-50' },
    'HubSpot': { icon: GitMerge, color: '#FF7A59', bgColor: 'bg-orange-50' },
    'OpenAI': { icon: Bot, color: '#74aa9c', bgColor: 'bg-teal-50' },
    'Bright Pattern': { icon: Layers, color: '#10B981', bgColor: 'bg-emerald-50' },
    'default': { icon: Database, color: '#64748b', bgColor: 'bg-slate-50' }
};

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const cardRef = useRef<HTMLDivElement>(null);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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

    const mainCategory = template.categories[0];

    return (
        <Link to={`/templates/${template.slug}`} className="block h-full perspective-1000">
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
                className="relative h-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col group"
            >
                <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full p-8">
                    {/* Header Badge */}
                    <div className="flex justify-between items-start mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold uppercase tracking-wider border border-[#10B981]/20">
                            {mainCategory}
                        </span>

                        {/* Integration Clusters */}
                        <div className="flex -space-x-3">
                            {template.integrations?.slice(0, 3).map((int, i) => {
                                const config = integrationMap[int] || integrationMap.default;
                                const Icon = config.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.1, zIndex: 20 }}
                                        title={int}
                                        className={`w-10 h-10 rounded-xl ${config.bgColor} border-2 border-white shadow-sm flex items-center justify-center relative z-10 transition-transform`}
                                    >
                                        <Icon size={18} color={config.color} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-[#10B981] transition-colors">
                        {template.title}
                    </h3>

                    <div className="relative flex-grow min-h-[140px]">
                        <AnimatePresence mode="wait">
                            {!isHovered ? (
                                <motion.p
                                    key="desc"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="text-slate-600 text-sm leading-relaxed"
                                >
                                    {template.description}
                                </motion.p>
                            ) : (
                                <motion.div
                                    key="blueprint"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0"
                                >
                                    <BlueprintPreview />
                                </motion.div>
                            )
                            }
                        </AnimatePresence>
                    </div>

                    {/* Footer Area */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {template.tags.slice(0, 2).map((tag, i) => (
                                <span key={i} className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-[#10B981] font-bold text-sm group/btn">
                            <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">Details</span>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-[#10B981] group-hover/btn:text-white transition-colors">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Glow */}
                <div className="absolute -inset-[100px] bg-gradient-to-tr from-[#10B981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
        </Link>
    );
};

export default TemplateCard;
