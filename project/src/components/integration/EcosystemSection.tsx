import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BarChart3, MessageSquare, Sparkles, Bot, Settings, TrendingUp } from 'lucide-react';
import templatesData from '../../data/templates.json';

interface EcosystemSectionProps {
  integrationId: string;
  integrationName: string;
}

const templateIcons: Record<string, any> = {
  'Data & Analytics': BarChart3,
  'Customer Support': MessageSquare,
  'Marketing': TrendingUp,
  'AI & Automation': Bot,
  'IT & DevOps': Settings,
  'default': Sparkles
};

export default function EcosystemSection({ integrationId, integrationName }: EcosystemSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const relatedTemplates = templatesData.templates.filter(template =>
    template.integrations.includes(integrationId)
  );

  const filteredTemplates = relatedTemplates.filter(template =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayedTemplates = filteredTemplates.slice(0, visibleCount);

  if (relatedTemplates.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-[#0A0B14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore the Ecosystem
          </h2>
          <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
            Pre-built workflows and templates to get you started with {integrationName}
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1A1B2E]/60 border border-[#2A2B3E] text-white placeholder-[#6B7280] focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {displayedTemplates.map((template) => {
            const IconComponent = templateIcons[template.categories[0]] || templateIcons['default'];

            return (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="group relative bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] border border-[#2A2B3E] rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300"
                  style={{
                    transform: 'translateY(0)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ marginBottom: 'var(--space-sm)' }}>
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        {template.categories[0]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{
                      lineHeight: 1.3
                    }}>
                      {template.title}
                    </h3>
                    <p className="text-sm text-[#C4BBD3] mb-4 leading-relaxed" style={{
                      flex: 1
                    }}>
                      {template.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-xs)',
                      marginBottom: 'var(--space-md)'
                    }}>
                      {template.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 rounded bg-[#0E0918] text-[#6B7280] font-medium border border-[#2A2B3E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-medium rounded-lg shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]">
                      View template
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[#6B7280]">No templates found matching your search.</p>
          </div>
        )}

        {visibleCount < filteredTemplates.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
