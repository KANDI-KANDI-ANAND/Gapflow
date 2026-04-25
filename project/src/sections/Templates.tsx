import { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import templatesData from '../data/templates.json';

export default function Templates() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allCategories = Array.from(
    new Set(templatesData.templates.flatMap(t => t.categories))
  );
  const filters = ['All', ...allCategories];

  const allFilteredTemplates = activeFilter === 'All'
    ? templatesData.templates
    : templatesData.templates.filter(t => t.categories.includes(activeFilter));

  const filteredTemplates = allFilteredTemplates.slice().reverse().slice(0, 9);

  return (
    <section id="templates" className="relative bg-white pt-8 lg:pt-10 pb-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(50,211,138,0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
            <Zap size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Ready-to-Use Templates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Get started with pre-built workflow and deploy instantly
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${activeFilter === filter
                ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 shadow-lg shadow-[#10B981]/30'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-[#10B981]/50 hover:text-slate-900'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Link
              key={template.id}
              to={`/templates/${template.slug}`}
              className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="h-64 bg-white border-b border-slate-200 flex items-center justify-center p-4">
                  {template.thumbnails[0]?.startsWith('/') ? (
                    <img
                      src={template.thumbnails[0]}
                      alt={template.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-slate-600/50 px-6">
                      <Zap size={48} className="text-[#10B981]/30 mx-auto mb-4" />
                      <p className="text-sm">{template.title}</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900 flex-1 pr-3 group-hover:text-[#10B981] transition-colors duration-300">
                      {template.title}
                    </h3>
                    <span className="flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                      {template.categories[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[#10B981] hover:text-[#059669] transition-colors duration-300">
                    <span>Use template</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/templates"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold text-lg rounded-full border border-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-sm"
          >
            <span>Explore more</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
