import { useState } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  Layers,
  Rocket,
  ArrowRight
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import templatesData from '../data/templates.json';
import { searchTemplate } from '../utils/searchUtils';
import TemplateCard from '../components/TemplateCard';

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [aiExpanded, setAiExpanded] = useState(false);
  const [contactCentreExpanded, setContactCentreExpanded] = useState(false);
  const [aiSubcategories, setAiSubcategories] = useState<string[]>([]);
  const [contactCentreSubcategories, setContactCentreSubcategories] = useState<string[]>([]);

  const templates = templatesData.templates;

  const allCategories = Array.from(new Set(templates.flatMap(t => t.categories)));

  const filters = ['All', 'AI', 'Contact Centre', 'Sales & CRM', 'Marketing', 'Customer Support', 'Data & Analytics', 'IT & DevOps', 'Finance & Accounting', 'Communication', 'Productivity', 'Data & Storage'];

  const aiSubFilters = [
    'Agents',
    'Chains',
    'Vector Stores',
    'Tools',
    'Language Models',
    'Output Parsers',
    'Embeddings',
    'Rerankers',
    'Retrievers',
    'Memory',
    'Model Context Protocol',
    'Text Splitters',
    'Document Loaders'
  ];
  const contactCentreSubFilters = [
    'List Management',
    'Outbound Dialling',
    'Bright Pattern',
    'Genesys'
  ];
  const sortOptions = ['Newest', 'Popular', 'A‑Z'];

  const isFilterEnabled = (filter: string) => {
    if (filter === 'All') return true;
    return templates.some(t => t.categories.includes(filter));
  };

  const toggleAiSubcategory = (subcategory: string) => {
    setAiSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const toggleContactCentreSubcategory = (subcategory: string) => {
    setActiveFilter('Contact Centre');
    setContactCentreExpanded(true);
    setContactCentreSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const filteredAndSortedTemplates = templates.filter(t => {
    let matchesFilter = false;

    if (activeFilter === 'All') {
      matchesFilter = true;
    } else if (activeFilter === 'Contact Centre') {
      if (contactCentreSubcategories.length === 0) {
        matchesFilter = t.categories.includes('Contact Centre');
      } else {
        matchesFilter = contactCentreSubcategories.some(sub => {
          const normalizedSub = sub.toLowerCase().replace(/\s+/g, '-');
          return t.tags.some(tag => tag.toLowerCase() === normalizedSub) ||
            t.categories.some(cat => cat.toLowerCase() === sub.toLowerCase()) ||
            t.title.toLowerCase().includes(sub.toLowerCase()) ||
            t.integrations?.some(int => int.toLowerCase().includes(sub.toLowerCase()));
        });
      }
    } else {
      matchesFilter = t.categories.includes(activeFilter);
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

  return (
    <div>
      <ScrollToTop />
      <section id="templates-hero" className="relative bg-white py-8 lg:py-12" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% -10%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-4">
            <Layers size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Templates Library</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Start fast with ready‑made flows
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 font-light max-w-3xl mx-auto mb-8">
            Pick a blueprint, connect your apps, and customise.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-base rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Browse All</span>
              <Layers size={18} />
            </button>
            <button className="inline-flex items-center gap-3 px-7 py-3 bg-white/60 backdrop-blur-sm text-slate-600 font-medium text-base rounded-xl border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:text-slate-900 transition-all duration-300">
              <span>Create from Scratch</span>
            </button>
          </div>
        </div>
      </section>

      <section id="catalog" className="relative bg-white py-8 lg:py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">Template Library</h2>

          <div className="mb-12">
            <div className="relative w-full max-w-4xl mx-auto group">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-[#10B981] transition-colors" />
              <input
                type="text"
                placeholder="Search templates and integrations…"
                aria-label="Search templates"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-[#6B7280] focus:outline-none focus:border-[#10B981]/50 transition-all duration-300"
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-lg)', maxWidth: '1400px', margin: '0 auto' }} className="flex-col md:flex-row">
            <aside style={{
              flexShrink: 0,
              height: 'fit-content',
              maxHeight: 'calc(100vh - 120px)'
            }} className="w-[220px] md:sticky md:top-[100px] bg-white border border-slate-200 rounded-2xl p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                Categories
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                maxHeight: 'calc(100vh - 340px)',
                overflowY: 'auto',
                overflowX: 'hidden',
                marginLeft: '-4px',
                marginRight: '-4px',
                paddingLeft: '4px',
                paddingRight: '4px'
              }}>
                {filters.map(filter => {
                  const isAI = filter === 'AI';
                  const isContactCentre = filter === 'Contact Centre';
                  const filterEnabled = isFilterEnabled(filter);
                  return (
                    <div key={filter}>
                      <label
                        className="flex items-center justify-between px-2 py-2 rounded-lg transition-all duration-200"
                        style={{
                          backgroundColor: activeFilter === filter ? 'rgba(107, 75, 255, 0.15)' : 'transparent',
                          color: !filterEnabled ? '#9ca3af' : (activeFilter === filter ? '#10B981' : '#475569'),
                          fontWeight: activeFilter === filter ? 600 : 400,
                          cursor: filterEnabled ? 'pointer' : 'not-allowed',
                          opacity: filterEnabled ? 1 : 0.5
                        }}
                        onMouseEnter={(e) => {
                          if (activeFilter !== filter && filterEnabled) {
                            e.currentTarget.style.backgroundColor = 'rgba(26, 27, 46, 0.6)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeFilter !== filter) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type="radio"
                            name="category"
                            value={filter}
                            checked={activeFilter === filter}
                            disabled={!filterEnabled}
                            onChange={() => {
                              if (filterEnabled) {
                                setActiveFilter(filter);
                                if (filter !== 'AI') {
                                  setAiSubcategories([]);
                                }
                                if (filter === 'Contact Centre') {
                                  setContactCentreSubcategories(contactCentreSubFilters);
                                } else {
                                  setContactCentreSubcategories([]);
                                }
                              }
                            }}
                            className="mr-2 accent-[#10B981] cursor-pointer flex-shrink-0"
                            style={{ width: '14px', height: '14px' }}
                          />
                          <span className="text-sm">{filter}</span>
                        </div>
                        {isAI && filterEnabled && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setAiExpanded(!aiExpanded);
                            }}
                            className="bg-transparent border-0 cursor-pointer flex items-center p-0 text-slate-600 flex-shrink-0"
                          >
                            {aiExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                        {isContactCentre && filterEnabled && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setContactCentreExpanded(!contactCentreExpanded);
                            }}
                            className="bg-transparent border-0 cursor-pointer flex items-center p-0 text-slate-600 flex-shrink-0"
                          >
                            {contactCentreExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </label>

                      {isAI && aiExpanded && (
                        <div style={{
                          marginTop: '4px',
                          marginLeft: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px'
                        }}>
                          {aiSubFilters.map(subFilter => (
                            <label
                              key={subFilter}
                              className="flex items-center px-1.5 py-1 rounded cursor-pointer transition-all duration-200 text-sm text-slate-600"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(26, 27, 46, 0.6)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={aiSubcategories.includes(subFilter)}
                                onChange={() => toggleAiSubcategory(subFilter)}
                                className="mr-2 accent-[#10B981] cursor-pointer flex-shrink-0"
                                style={{ width: '13px', height: '13px' }}
                              />
                              {subFilter}
                            </label>
                          ))}
                        </div>
                      )}

                      {isContactCentre && contactCentreExpanded && (
                        <div style={{
                          marginTop: '4px',
                          marginLeft: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px'
                        }}>
                          {contactCentreSubFilters.map(subFilter => (
                            <label
                              key={subFilter}
                              className="flex items-center px-1.5 py-1 rounded cursor-pointer transition-all duration-200 text-sm text-slate-600"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(26, 27, 46, 0.6)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={contactCentreSubcategories.includes(subFilter)}
                                onChange={() => toggleContactCentreSubcategory(subFilter)}
                                className="mr-2 accent-[#10B981] cursor-pointer flex-shrink-0"
                                style={{ width: '13px', height: '13px' }}
                              />
                              {subFilter}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </aside>

            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-center mb-8">
                <p className="text-slate-500 text-sm font-medium">
                  {filteredAndSortedTemplates.length} template{filteredAndSortedTemplates.length !== 1 ? 's' : ''} found
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium cursor-pointer focus:outline-none focus:border-[#10B981] transition-all duration-300 hover:border-slate-300 shadow-sm"
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {filteredAndSortedTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>

              {filteredAndSortedTemplates.length === 0 && (
                <div style={{ textAlign: 'center', padding: 'var(--space-xxl)', color: '#6B7280' }}>
                  <p className="text-lg">No templates found matching your criteria.</p>
                </div>
              )}

              <div className="mt-16 text-center text-slate-500 text-sm">
                Showing {filteredAndSortedTemplates.length} of {templates.length} templates
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="submit-template" className="relative bg-white py-12 lg:py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Have a great flow? Share it.</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Contribute a template to help the community move faster.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#10B981] transition-all duration-300 group">
            <span>Submit a template</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section id="templates-final-cta" className="relative bg-white py-12 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16,185,129,0.2) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Ready to build?</h2>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#10B981] transition-all duration-300 group">
              <span>Start Building</span>
              <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="text-slate-600 font-bold hover:text-[#10B981] transition-colors duration-300 flex items-center gap-2 group">
              Go to Docs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
