import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedQuestions: string[];
}

export default function FAQSection({ faqs, relatedQuestions }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#0E0918]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
            Find answers to common questions about this integration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-xl border border-[#2A2B3E] overflow-hidden hover:border-[#10B981]/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1B2E]/40 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {expandedIndex === index ? (
                        <Minus className="w-5 h-5 text-[#10B981]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#6B7280]" />
                      )}
                    </div>
                  </button>
                  {expandedIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#C4BBD3] leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-xl p-6 border border-[#2A2B3E] sticky top-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Related Questions
              </h3>
              <ul className="space-y-3">
                {relatedQuestions.map((question, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#C4BBD3] hover:text-[#10B981] transition-colors text-sm flex items-start font-light"
                    >
                      <span className="text-[#10B981] mr-2">→</span>
                      {question}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
