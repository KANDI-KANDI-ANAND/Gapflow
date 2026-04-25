import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  categories: string[];
  thumbnails: string[];
}

interface SimilarTemplatesCarouselProps {
  templates: Template[];
  categoryName: string;
}

export default function SimilarTemplatesCarousel({ templates, categoryName }: SimilarTemplatesCarouselProps) {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (templates.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (templates.length * 400));
    }, 30);

    return () => clearInterval(interval);
  }, [templates.length, isPaused]);

  const scrollLeft = () => {
    setPosition((prev) => prev + 400);
  };

  const scrollRight = () => {
    setPosition((prev) => prev - 400);
  };

  if (templates.length === 0) {
    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Similar {categoryName} Templates
        </h2>
        <div className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] border border-[#2A2B3E] rounded-xl p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center">
            <Sparkles size={24} className="text-[#10B981]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">More templates coming soon</h3>
          <p className="text-[#C4BBD3] mb-6">
            We're constantly adding new workflow templates. Check back soon for more {categoryName} automation ideas.
          </p>
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E0918] border border-[#2A2B3E] rounded-lg text-sm text-[#C4BBD3] hover:border-[#10B981]/50 hover:text-white transition-all duration-300"
          >
            Browse all templates
          </Link>
        </div>
      </div>
    );
  }

  const duplicatedTemplates = [...templates, ...templates, ...templates];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6">
        Similar {categoryName} Templates
      </h2>

      <div
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0B14] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0B14] to-transparent z-10 pointer-events-none"></div>

        <button
          onClick={scrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1A1B2E]/95 border border-[#2A2B3E] rounded-full flex items-center justify-center text-white hover:border-[#10B981]/50 hover:text-[#10B981] hover:bg-[#1A1B2E] transition-all duration-300 shadow-xl backdrop-blur-sm ${isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1A1B2E]/95 border border-[#2A2B3E] rounded-full flex items-center justify-center text-white hover:border-[#10B981]/50 hover:text-[#10B981] hover:bg-[#1A1B2E] transition-all duration-300 shadow-xl backdrop-blur-sm ${isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        <div
          className="flex gap-6 py-4"
          style={{
            transform: `translateX(${position}px)`,
            transition: isPaused ? 'transform 0.3s ease-out' : 'transform 0.1s linear',
          }}
        >
          {duplicatedTemplates.map((similar, index) => (
            <Link
              key={`${similar.id}-${index}`}
              to={`/templates/${similar.slug}`}
              className="group bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] border border-[#2A2B3E] rounded-xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300 flex-shrink-0 w-96"
              style={{ textDecoration: 'none' }}
            >
              <div className="relative bg-gradient-to-br from-[#0A0B14] to-[#0E0918] border-b border-[#2A2B3E] flex items-center justify-center p-4" style={{ aspectRatio: '16/9' }}>
                {similar.thumbnails[0].startsWith('/') ? (
                  <img
                    src={similar.thumbnails[0]}
                    alt={similar.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-[#C4BBD3]/50 px-4">
                    <Sparkles size={32} className="text-[#10B981]/30 mx-auto mb-2" />
                    <p className="text-xs">{similar.title}</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 mb-2">
                  {similar.categories[0]}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition-colors">
                  {similar.title}
                </h3>
                <p className="text-sm text-[#C4BBD3] line-clamp-2">
                  {similar.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
