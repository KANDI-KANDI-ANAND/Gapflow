import { useState, useMemo } from 'react';
import {
  Search, Globe, ArrowUpRight, Layers, Bot, Cloud, MessageSquare,
  Database, Phone, Globe2, BarChart, Code2, Shield, Cpu, HardDrive, Layout, CheckSquare, CreditCard,
  FileText, Zap, Box
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import integrationsData from '../data/gapflow_integrations.json';

// Robust mapping of brand names to icons and premium colors
const BRAND_THEMES: Record<string, { icon: any, color: string, bgColor: string, logo?: string }> = {
  'openai': { icon: Bot, color: '#74aa9c', bgColor: 'bg-teal-50', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
  'anthropic': { icon: Cpu, color: '#D97706', bgColor: 'bg-amber-50' },
  'salesforce': { icon: Cloud, color: '#00A1E0', bgColor: 'bg-sky-50' },
  'hubspot': { icon: Zap, color: '#FF7A59', bgColor: 'bg-orange-50' },
  'dynamics 365': { icon: Box, color: '#0078D4', bgColor: 'bg-blue-50' },
  'bright pattern': { icon: Layers, color: '#10B981', bgColor: 'bg-emerald-50' },
  'twilio': { icon: Phone, color: '#F22F46', bgColor: 'bg-red-50' },
  'whatsapp': { icon: MessageSquare, color: '#25D366', bgColor: 'bg-emerald-50' },
  'power bi': { icon: BarChart, color: '#F2C811', bgColor: 'bg-yellow-50', logo: 'https://cdn.prod.website-files.com/657af0bb92ac84fc855f9510/66044f2255a990d193470da4_5f5572c2.jpeg' },
  'bigquery': { icon: Database, color: '#4285F4', bgColor: 'bg-blue-50' },
  'snowflake': { icon: HardDrive, color: '#29B6F6', bgColor: 'bg-sky-50' },
  'postgresql': { icon: Database, color: '#336791', bgColor: 'bg-blue-50' },
  'slack': { icon: MessageSquare, color: '#4A154B', bgColor: 'bg-purple-50' },
  'zendesk': { icon: Shield, color: '#03363D', bgColor: 'bg-teal-50' },
  'shopify': { icon: Layout, color: '#96bf48', bgColor: 'bg-lime-50' },
  'stripe': { icon: CreditCard, color: '#635BFF', bgColor: 'bg-indigo-50' },
  'google': { icon: Globe2, color: '#4285F4', bgColor: 'bg-blue-50' },
  'microsoft': { icon: Box, color: '#0078D4', bgColor: 'bg-blue-50' },
  'aws': { icon: HardDrive, color: '#FF9900', bgColor: 'bg-orange-50' },
  'azure': { icon: Cloud, color: '#0089D6', bgColor: 'bg-sky-50' },
  'github': { icon: Code2, color: '#181717', bgColor: 'bg-slate-50' },
  'notion': { icon: FileText, color: '#000000', bgColor: 'bg-slate-50' },
  'jira': { icon: CheckSquare, color: '#0052CC', bgColor: 'bg-blue-50' },
  'zapier': { icon: Zap, color: '#FF4A00', bgColor: 'bg-orange-50' },
};

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  // Extract data from JSON
  const catalogSection = integrationsData.sections.find((s: any) => s.id === 'catalog') as any;
  const CATEGORIES = catalogSection?.content?.controls?.filters || ['All'];
  const ALL_INTEGRATIONS = catalogSection?.content?.cards || [];

  const filtered = useMemo(() => {
    return ALL_INTEGRATIONS.filter((item: any) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCat === 'All' || item.tags.includes(activeCat);
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCat, ALL_INTEGRATIONS]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[#10B981]/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[60%] h-full bg-blue-600/15 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full" />
        </div>
        <div className="container-standard relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 shadow-lg shadow-emerald-900/20">
            <Globe size={14} className="text-[#10B981]" />
            <span className="text-[10px] text-[#10B981] font-bold tracking-[0.15em] uppercase">Ecosystem</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Connect your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">entire infrastructure.</span>
          </h1>

          <p className="text-base lg:text-lg font-medium text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight">
            Native connectors for <span className="text-white font-bold">{ALL_INTEGRATIONS.length}+</span> enterprise systems. If it has an API, it works with Gapflow.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#10B981] transition-colors" size={20} />
            <input
              type="text"
              placeholder={`Search ${ALL_INTEGRATIONS.length} connectors...`}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-16 pr-8 py-6 text-white text-base font-bold focus:outline-none focus:border-[#10B981] focus:bg-white/10 transition-all placeholder-white/20 shadow-2xl shadow-black/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#F9FAFF]">
        <div className="container-standard">
          <div className="flex flex-wrap gap-3 mb-16 justify-center max-w-5xl mx-auto">
            {CATEGORIES.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${activeCat === cat
                    ? 'bg-[#10B981] border-[#10B981] text-slate-900 shadow-lg shadow-emerald-200'
                    : 'bg-white border-slate-200 text-slate-400 hover:border-[#10B981] hover:text-[#10B981] shadow-sm'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-slate-200" />
              {filtered.length} Connectors Found
              <span className="w-10 h-px bg-slate-200" />
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((item: any, i: number) => {
              const titleLower = item.title.toLowerCase();
              const brandKey = Object.keys(BRAND_THEMES).find(k => titleLower.includes(k));
              const theme = brandKey ? BRAND_THEMES[brandKey] : null;
              const Icon = theme?.icon || Database;

              const detailAction = item.actions?.find((a: any) => a.label === 'View')?.action || `/integrations/${item.title.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 20) * 0.01 }}
                >
                  <Link
                    to={detailAction}
                    className="block bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.1)] hover:border-emerald-200 transition-all duration-500 group relative overflow-hidden h-full"
                  >
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight size={18} className="text-[#10B981]" />
                    </div>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 border border-slate-100 ${theme?.bgColor || 'bg-slate-50 shadow-inner'}`}>
                      {item.logo || theme?.logo ? (
                        <img
                          src={item.logo || theme?.logo}
                          alt={item.title}
                          className="w-8 h-8 object-contain transition-all duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <Icon
                          size={24}
                          style={{ color: theme?.color || '#cbd5e1' }}
                          className="transition-all duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest leading-tight group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-50 px-2 py-0.5 rounded group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-all">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-slate-200/60 shadow-sm max-w-2xl mx-auto">
              <Layers className="mx-auto text-slate-100 mb-8" size={64} />
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">No connectors found</h3>
              <p className="text-slate-500 font-medium text-sm">Try searching for a different integration or clearing filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Connector CTA */}
      <section className="section-padding bg-white">
        <div className="container-standard">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-[#10B981]/10 blur-[120px] pointer-events-none animate-pulse" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                Can't find your <br />
                <span className="text-[#10B981]">Native Connector?</span>
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed font-medium text-base lg:text-lg tracking-tight">
                Build custom nodes in minutes with our SDK. Connect proprietary systems or legacy databases with full type safety and observability.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button className="btn-primary !bg-[#10B981] !text-slate-900 hover:!bg-white min-w-[220px] shadow-lg shadow-emerald-500/20">Open SDK Docs</button>
                <button className="px-8 py-4 text-xs font-bold text-white uppercase tracking-[0.2em] hover:text-[#10B981] transition-colors">Request Connector →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
