import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Layers,
  Rocket,
  ChevronDown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';
import templatesData from '../data/templates.json';
import { searchTemplate } from '../utils/searchUtils';
import TemplateCard from '../components/TemplateCard';

const ITEMS_PER_PAGE = 8;

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Templates');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [currentPage, setCurrentPage] = useState(1);

  const templates = templatesData.templates;

  const filters = [
    'All Templates',
    'AI',
    'Built-in Apps',
    'Business Intelligence',
    'Business Operations & ERPs',
    'Commerce',
    'Communication',
    'CRM/Sales',
    'Customer Support',
    'Education',
    'Enterprise'
  ];

  const sortOptions = ['Most Popular', 'Newest', 'A-Z'];

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const filteredAndSortedTemplates = useMemo(() => {
    return templates.filter(t => {
      let matchesFilter = false;
      if (activeFilter === 'All Templates') {
        matchesFilter = true;
      } else {
        matchesFilter = t.categories.some(cat =>
          cat.toLowerCase().includes(activeFilter.toLowerCase()) ||
          activeFilter.toLowerCase().includes(cat.toLowerCase())
        );
      }
      const matchesSearch = searchTemplate(t, searchQuery);
      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'Newest') {
        const dateA = new Date(a.lastUpdated.split('/').reverse().join('-'));
        const dateB = new Date(b.lastUpdated.split('/').reverse().join('-'));
        return dateB.getTime() - dateA.getTime();
      } else if (sortBy === 'A‑Z') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [templates, activeFilter, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedTemplates.length / ITEMS_PER_PAGE);
  const paginatedTemplates = filteredAndSortedTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const startItem = filteredAndSortedTemplates.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedTemplates.length);
  const totalItems = filteredAndSortedTemplates.length;

  const getCategoryCount = (category: string) => {
    if (category === 'All Templates') return templates.length;
    return templates.filter(t =>
      t.categories.some(cat =>
        cat.toLowerCase().includes(category.toLowerCase()) ||
        category.toLowerCase().includes(cat.toLowerCase())
      )
    ).length;
  };

  const PaginationControls = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center gap-1.5">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="p-2 rounded-xl text-slate-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className="flex items-center justify-center min-w-[40px] h-10 bg-white border border-slate-100 rounded-xl shadow-sm px-4">
          <span className="text-sm font-black text-slate-900">
            {currentPage}
          </span>
        </div>

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            className="p-2 rounded-xl text-slate-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />


      <section className="pt-10 pb-8 lg:pt-12 lg:pb-10 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-50/20 via-white to-white pointer-events-none" />

        <div className="container-standard text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-sm mb-6">
            <Sparkles size={14} className="text-purple-600" />
            <span className="text-[10px] text-purple-700 font-bold tracking-[0.15em] uppercase">Ready-to-use flows</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Templates <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">library</span>
          </h1>
          <p className="text-base lg:text-lg text-slate-500 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose from thousands of production-ready blueprints that will help you save time and scale your automation logic.
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-[#10B981]/10 to-blue-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl text-lg font-bold placeholder-slate-300 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 transition-all shadow-xl shadow-purple-900/5"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <span className="h-8 w-px bg-slate-100 hidden sm:block" />
                <Search size={20} className="text-slate-300 group-focus-within:text-purple-500 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-[#F9FAFF]">
        <div className="container-standard">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6 border-b border-slate-200/50 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <Layers size={18} className="text-purple-500" />
              </div>
              <div>
                <span className="text-sm font-black text-slate-900 block">
                  Showing {startItem} - {endItem} of {totalItems} results
                </span>
                <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">
                  in {activeFilter}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Sort By</span>
                  <div className="relative group">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-slate-200 rounded-lg px-6 py-2.5 text-xs font-black text-slate-900 focus:outline-none cursor-pointer hover:border-purple-300 transition-colors pr-10 shadow-sm"
                    >
                      {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-purple-500 pointer-events-none transition-colors" />
                  </div>
                </div>
              </div>
              <PaginationControls />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <aside className="w-full lg:w-72 lg:sticky lg:top-[120px] max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-2">
              <div className="flex items-center gap-3 mb-5 px-2">
                <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">
                  Categories
                </h3>
              </div>
              <div className="space-y-1 pb-8">
                {filters.map(filter => {
                  const isActive = activeFilter === filter;
                  const count = getCategoryCount(filter);
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`w-full flex items-center justify-between px-5 py-2.5 rounded-[1.25rem] text-xs font-bold transition-all duration-300 group ${isActive
                        ? 'text-purple-700 bg-purple-100 shadow-sm shadow-purple-200/50'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                        }`}
                    >
                      <span className="flex items-start gap-4 text-left">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all duration-300 ${isActive ? 'bg-purple-600 scale-125' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                        {filter}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all duration-300 ${isActive
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                <AnimatePresence mode="popLayout">
                  {paginatedTemplates.map((template, i) => (
                    <motion.div
                      key={template.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: (i % 8) * 0.05 }}
                    >
                      <TemplateCard template={template} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredAndSortedTemplates.length === 0 && (
                <div className="text-center py-40 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-12">
                  <Layers className="mx-auto text-slate-100 mb-10 animate-bounce" size={80} />
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">No blueprints found</h3>
                  <p className="text-slate-400 font-medium text-base">Try adjusting your search or category filters.</p>
                </div>
              )}

              <div className="mt-16 flex justify-end">
                <PaginationControls />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        </div>
        <div className="container-standard text-center relative z-10">
          <h2 className="text-3xl lg:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
            Ready to build? <br />
            <span className="text-[#10B981]">Start for free.</span>
          </h2>

          <div className="flex gap-5 justify-center flex-wrap">
            <button className="btn-secondary !bg-white !text-slate-900 hover:!bg-slate-100 !border-none group min-w-[220px] shadow-xl shadow-black/20">
              <span>Create Account</span>
              <Rocket size={18} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-xs font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all px-10 py-5">
              Talk to Sales →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
