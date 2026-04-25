import { AlertCircle, Info } from 'lucide-react';

interface LimitsSectionProps {
  limits: Array<{
    title: string;
    description: string;
  }>;
}

export default function LimitsSection({ limits }: LimitsSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#0E0918]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-2xl p-8 lg:p-12 border border-[#2A2B3E]">
          <div className="flex items-start mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#32D38A]/20 to-[#28B876]/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 border border-[#32D38A]/20">
              <AlertCircle className="w-6 h-6 text-[#32D38A]" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Limits & Notes
              </h2>
              <p className="text-lg text-[#C4BBD3] font-light">
                Important considerations when working with this integration
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {limits.map((limit, index) => (
              <div
                key={index}
                className="bg-[#1A1B2E]/40 rounded-xl p-6 border border-[#2A2B3E]/50 hover:border-[#10B981]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-[#10B981] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {limit.title}
                    </h3>
                    <p className="text-[#C4BBD3] leading-relaxed font-light">
                      {limit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#10B981]/10 rounded-xl border border-[#10B981]/20">
            <p className="text-sm text-[#C4BBD3] leading-relaxed font-light">
              <strong className="text-white">Pro Tip:</strong> Always test your workflows in a development or sandbox environment before deploying to production. This helps identify potential issues and ensures smooth operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
