import { ArrowRight, Sparkles } from 'lucide-react';

export default function Integrations() {
  const categories = [
    {
      name: 'AI & ML',
      logos: ['OpenAI', 'Anthropic', 'Gemini', 'Bedrock']
    },
    {
      name: 'CRM & Sales',
      logos: ['Salesforce', 'HubSpot', 'Dynamics 365', 'Pipedrive']
    },
    {
      name: 'Communication',
      logos: ['Bright Pattern', 'Twilio', 'WhatsApp', 'Slack']
    },
    {
      name: 'Data & Analytics',
      logos: ['Power BI', 'BigQuery', 'Snowflake', 'Tableau']
    }
  ];

  return (
    <section id="integrations" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
            <Sparkles size={16} className="text-[#10B981]" />
            <span className="text-sm text-slate-600 font-medium">500+ Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Connect Gapflow to your entire stack
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Pre-built connectors for all your favorite tools and platforms
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    <div className="relative">
                      <div className="aspect-square rounded-lg bg-white border border-slate-200 mb-4 flex items-center justify-center group-hover:border-[#10B981]/30 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                          <span className="text-xl opacity-50">🔌</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-slate-600 text-center group-hover:text-slate-900 transition-colors duration-300">
                        {logo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Can't find what you need? We probably have it.</p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
            <span>Browse all connectors</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
