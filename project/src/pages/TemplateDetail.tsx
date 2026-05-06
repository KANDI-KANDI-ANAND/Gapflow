import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Calendar,
  Link as LinkIcon,
  Clock,
  BarChart3,
  Sparkles
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import ImageLightbox from '../components/ImageLightbox';
import SimilarTemplatesCarousel from '../components/SimilarTemplatesCarousel';
import templatesData from '../data/templates.json';

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function TemplateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; index: number } | null>(null);

  const template = templatesData.templates.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!template) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Template Not Found</h1>
          <Link to="/templates" className="text-[#10B981] hover:text-[#059669]">
            Browse all templates →
          </Link>
        </div>
      </div>
    );
  }

  const similarTemplates = templatesData.templates
    .filter(t =>
      t.id !== template.id &&
      t.categories.some(cat => template.categories.includes(cat))
    )
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShareX = () => {
    const text = `Check out this automation template: ${template.title}`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const validThumbnails = template ? template.thumbnails.filter(thumb => thumb.startsWith('/')) : [];

  const handleNavigateLightbox = (newIndex: number) => {
    if (validThumbnails[newIndex]) {
      setLightboxImage({
        src: validThumbnails[newIndex],
        alt: `${template?.title} screenshot ${newIndex + 1}`,
        index: newIndex
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
          images={validThumbnails}
          currentIndex={lightboxImage.index}
          onNavigate={handleNavigateLightbox}
        />
      )}

      <section className="relative bg-white pt-6 pb-2">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>


        </div>
      </section>

      <section className="relative bg-white pt-2 pb-16">
        <div className="container mx-auto px-6">
          <div style={{ display: 'flex', gap: 'var(--space-xxl)', maxWidth: '1400px', margin: '0 auto' }}>

            <aside style={{ width: '320px', flexShrink: 0, position: 'sticky', top: '100px', height: 'fit-content' }}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <h1 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {template.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {template.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02] mb-6">
                  <Download size={20} />
                  <span>Download Template</span>
                </button>

                <div className="border-t border-slate-200 pt-6 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-4">
                    <Calendar size={16} />
                    <span>Last updated: {new Date(template.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-4">
                    <Clock size={16} />
                    <span>Setup time: {template.estimatedSetupTime}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
                    <BarChart3 size={16} />
                    <span>Difficulty: {template.difficulty}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-sm font-semibold text-slate-600 mb-3">Share this template</h3>

                  <button
                    onClick={handleCopyLink}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-[#10B981]/50 hover:text-slate-900 transition-all duration-300 mb-2"
                  >
                    <LinkIcon size={18} />
                    <span>{copiedLink ? 'Link copied!' : 'Copy link'}</span>
                  </button>

                  <button
                    onClick={handleShareX}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-[#10B981]/50 hover:text-slate-900 transition-all duration-300 mb-2"
                  >
                    <XIcon />
                    <span>Share on X</span>
                  </button>

                  <button
                    onClick={handleShareLinkedIn}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-[#10B981]/50 hover:text-slate-900 transition-all duration-300"
                  >
                    <LinkedInIcon />
                    <span>Share on LinkedIn</span>
                  </button>
                </div>
              </div>
            </aside>

            <div style={{ flex: 1 }}>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
                  <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                    {template.longDescription}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {validThumbnails.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxImage({ src: thumb, alt: `${template.title} screenshot ${idx + 1}`, index: idx })}
                      className="relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer group"
                      style={{ aspectRatio: '16/9' }}
                    >
                      <img
                        src={thumb}
                        alt={`${template.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Workflow Steps</h3>
                  <div className="flex flex-wrap gap-3">
                    {template.useCaseBlocks.map((block, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-slate-600 text-sm font-medium">
                          {block}
                        </div>
                        {idx < template.useCaseBlocks.length - 1 && (
                          <span className="text-[#6B7280]">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {template.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Sparkles size={20} className="text-[#32D38A] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {template.howToSteps && template.howToSteps.length > 0 && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">How to Build This Workflow</h3>
                    <div className="space-y-6">
                      {template.howToSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center">
                            <span className="text-[#10B981] text-sm font-bold">{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Integrations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {template.integrations.map((integration, idx) => (
                    <Link
                      key={idx}
                      to={`/integrations/${integration}`}
                      className="bg-white border border-slate-200 rounded-xl p-4 hover:border-[#10B981]/50 transition-all duration-300 text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-800">{integration.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <span className="text-sm text-slate-600 capitalize">
                        {integration.replace(/-/g, ' ')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {similarTemplates.length > 0 && (
        <section className="relative bg-white py-16 border-t border-slate-200">
          <div className="container mx-auto px-6">
            <SimilarTemplatesCarousel
              templates={similarTemplates}
              categoryName={template.categories[0]}
            />
          </div>
        </section>
      )}
    </div>
  );
}
