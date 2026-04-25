import { BookOpen, ArrowRight } from 'lucide-react';

interface DocumentationSectionProps {
  documentation: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

export default function DocumentationSection({ documentation }: DocumentationSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#0E0918]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Documentation
          </h2>
          <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
            Comprehensive guides to help you get the most out of this integration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {documentation.map((doc, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-xl p-8 border border-[#2A2B3E] hover:border-[#10B981]/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-xl flex items-center justify-center mb-4 border border-[#10B981]/20 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {doc.title}
              </h3>
              <p className="text-[#C4BBD3] mb-4 leading-relaxed font-light">
                {doc.description}
              </p>
              <a
                href={doc.link}
                className="inline-flex items-center text-[#10B981] font-semibold hover:text-[#059669] transition-colors"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[#1A1B2E]/60 border border-[#2A2B3E] text-[#C4BBD3] font-semibold rounded-xl hover:border-[#10B981]/50 hover:text-white transition-all duration-300">
            Explore More Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
