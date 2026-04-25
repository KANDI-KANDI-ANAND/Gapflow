import { useState, useMemo, useEffect } from 'react';
import integrationsData from '../data/gapflow_integrations.json';
import {
  Search,
  Plug,
  Users,
  MessageSquare,
  Database,
  BarChart,
  Rocket,
  FileText,
  Sparkles,
  Cloud,
  Brain,
  Filter
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import ConnectorCard from '../components/ConnectorCard';
import { motion, AnimatePresence } from 'framer-motion';
import { loadAllIntegrations, enrichConnectorWithData, searchEnrichedConnector, EnrichedConnector } from '../utils/integrationLoader';
import { hasCategory } from '../utils/categoryMapping';
import NeuralWeb from '../sections/NeuralWeb';


const iconMapping: Record<string, any> = {
  'OpenAI': Brain,
  'Anthropic': Brain,
  'Google Vertex AI': Brain,
  'Microsoft Azure AI': Brain,
  'AWS Bedrock': Brain,
  'Cohere': Brain,
  'Hugging Face': Brain,
  'Stability AI': Sparkles,
  'Perplexity AI': Brain,
  'DataRobot': Brain,
  'MonkeyLearn': Brain,
  'Salesforce': Users,
  'HubSpot': Users,
  'Dynamics 365': Users,
  'Bright Pattern': MessageSquare,
  'Twilio': MessageSquare,
  'WhatsApp': MessageSquare,
  'Power BI': BarChart,
  'BigQuery': Database,
  'Snowflake': Database,
  'PostgreSQL': Database,
  'default': Cloud
};

const sortOptions = ['A‑Z', 'Newest', 'Popular'];

const filters = [
  'All',
  'AI',
  'Contact Centre',
  'Sales & CRM',
  'Marketing',
  'Customer Support',
  'Data & Analytics',
  'IT & DevOps',
  'Finance & Accounting',
  'Communication',
  'Productivity',
  'Data & Storage'
];

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('A‑Z');
  const [allIntegrations, setAllIntegrations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAllIntegrations().then(integrations => {
      setAllIntegrations(integrations);
      setIsLoading(false);
    });
  }, []);

  const catalogSection = integrationsData.sections.find(s => s.id === 'catalog');

  // 1. Source Data Enrichment
  const connectors = useMemo(() => {
    if (isLoading) return [];
    return catalogSection?.content?.cards?.map((card: any, index: number) => ({
      ...enrichConnectorWithData(card, allIntegrations),
      initialIndex: index
    })) || [];
  }, [allIntegrations, isLoading]);

  // 2. Search Relevance Scoring
  const getRelevanceScore = (c: EnrichedConnector, query: string): number => {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    const title = c.title.toLowerCase();

    if (title === q) return 1000;
    if (title.startsWith(q)) return 500;
    if (title.includes(q)) return 100;

    const tagMatch = c.tags.some(t => t.toLowerCase().includes(q));
    if (tagMatch) return 50;

    const catMatch = c.allCategories.some(cat => cat.toLowerCase().includes(q));
    if (catMatch) return 10;

    return 0;
  };

  // 3. Filtered & Sorted Grid Data
  const filteredAndSortedConnectors = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    // Filter
    const filtered = connectors.filter((c: EnrichedConnector) => {
      // Category Filter
      const matchesCategory = activeFilter === 'All' || hasCategory(c.allCategories, activeFilter);
      if (!matchesCategory) return false;

      // Search Filter
      if (query === '') return true;
      const titleMatch = c.title.toLowerCase().includes(query);
      const tagMatch = c.tags.some(t => t.toLowerCase().includes(query));
      const catMatch = c.allCategories.some(cat => cat.toLowerCase().includes(query));

      return titleMatch || tagMatch || catMatch;
    });

    // Sort
    return [...filtered].sort((a: EnrichedConnector, b: EnrichedConnector) => {
      if (query !== '') {
        const scoreA = getRelevanceScore(a, query);
        const scoreB = getRelevanceScore(b, query);
        if (scoreA !== scoreB) return scoreB - scoreA;
      }

      if (sortBy === 'A‑Z') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'Newest') {
        return (b.initialIndex ?? 0) - (a.initialIndex ?? 0);
      } else if (sortBy === 'Popular') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [connectors, searchQuery, activeFilter, sortBy]);

  const isFilterEnabled = (filter: string) => {
    if (filter === 'All' || isLoading) return true;
    return connectors.some((c: EnrichedConnector) => hasCategory(c.allCategories, filter));
  };

  return (
    <div>
      <ScrollToTop />
      <section id="integrations-hero" className="relative bg-white py-10 lg:py-14" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% -10%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-4">
            <Plug size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Integrations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Connect Gapflow to your stack
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto mb-8">
            CRMs, BI, communications, databases, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-base rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Browse All</span>
              <Plug size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 bg-white/60 backdrop-blur-sm text-slate-600 font-medium text-base rounded-xl border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:text-slate-900 transition-all duration-300">
              <span>Request a Connector</span>
            </button>
          </div>
        </div>
      </section>

      {/* Neural Web Visualization Injection */}
      <NeuralWeb />

      <section id="catalog" className="relative bg-white py-12 lg:py-16 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />

        {/* Animated Scan Line */}
        <motion.div
          initial={{ top: 0, opacity: 0 }}
          animate={searchQuery ? { top: '100%', opacity: [0, 1, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent z-20 pointer-events-none"
        />

        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">Connector Catalog</h2>

          {/* Neural HUD: Category Shelf */}
          <div className="sticky top-[100px] z-30 mb-8 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-2 shadow-xl shadow-slate-200/50 max-w-5xl mx-auto overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
              {filters.map(filter => {
                const filterEnabled = isFilterEnabled(filter);
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    disabled={!filterEnabled}
                    onClick={() => {
                      if (filterEnabled) {
                        setActiveFilter(filter);
                      }
                    }}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 translate-y-[-1px]'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      } ${!filterEnabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {filter}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 border-2 border-[#10B981] rounded-xl pointer-events-none"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Neural HUD: Action Bar (Search + Sort) */}
          <div className="flex flex-col md:flex-row gap-4 items-center max-w-5xl mx-auto mb-12">
            <div className="relative flex-grow w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search connectors…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-4 pl-12 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/5 transition-all duration-300 shadow-sm"
              />
            </div>

            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm shrink-0 w-full md:w-auto">
              <Filter size={16} className="text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-700 focus:outline-none cursor-pointer pr-4"
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-8 px-2">
              <p className="text-slate-500 text-sm font-medium">
                {isLoading ? 'Scanning network...' : `${filteredAndSortedConnectors.length} modules identified`}
              </p>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-t-2 border-[#10B981] animate-spin" />
                  <div className="absolute inset-2 rounded-full border-b-2 border-[#10B981]/30 animate-spin" style={{ animationDirection: 'reverse' }} />
                </div>
                <p className="mt-6 text-slate-500 font-mono text-sm animate-pulse tracking-widest uppercase">Initializing catalog...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredAndSortedConnectors.map((connector, i) => (
                    <motion.div
                      key={connector.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                    >
                      <ConnectorCard
                        title={connector.title}
                        icon={iconMapping[connector.title] || iconMapping['default']}
                        logo={'logo' in connector ? connector.logo : undefined}
                        route={connector.route}
                        tags={connector.tags}
                        index={i}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
            {!isLoading && filteredAndSortedConnectors.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                <Search size={48} className="text-slate-200 mb-4" />
                <p className="text-slate-500 font-medium text-lg">No connectors found matching your criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                  className="mt-4 text-[#10B981] font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="build-connector" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Need something specific?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Our SDK lets you build custom connectors or request one from our team.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-600 font-medium text-lg rounded-xl border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:text-slate-900 transition-all duration-300">
              <FileText size={20} />
              <span>Open Connector SDK</span>
            </button>
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300 px-8 py-4">
              Request a connector →
            </button>
          </div>
        </div>
      </section>

      <section id="integrations-final-cta" className="relative bg-gradient-to-b from-[#F8FAFC] to-slate-50 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% 50%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12">Plug in and go</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Start Building</span>
              <Rocket size={20} />
            </button>
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300 px-8 py-4">
              Explore Templates →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
