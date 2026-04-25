import { useState } from 'react';

interface PossibilitiesSectionProps {
  data: {
    tabs: Array<{
      name: string;
      items: string[];
    }>;
  };
  integrationName: string;
}

export default function PossibilitiesSection({ data, integrationName }: PossibilitiesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 lg:py-20 bg-[#0E0918]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Possibilities with {integrationName}
          </h2>
          <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
            Discover what you can achieve with our powerful integration capabilities
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-2xl border border-[#2A2B3E] overflow-hidden">
          <div className="flex border-b border-[#2A2B3E] overflow-x-auto">
            {data.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-[150px] px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg shadow-[#10B981]/30'
                    : 'bg-[#1A1B2E]/60 text-[#C4BBD3] hover:text-white hover:bg-[#1A1B2E]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="p-8">
            <div className="space-y-3">
              {data.tabs[activeTab].items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-[#1A1B2E]/40 rounded-xl hover:bg-[#1A1B2E]/60 border border-[#2A2B3E]/50 hover:border-[#10B981]/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-full flex items-center justify-center text-[#10B981] font-semibold mr-4 border border-[#10B981]/20">
                    {index + 1}
                  </div>
                  <span className="text-[#C4BBD3] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
