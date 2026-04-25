import Breadcrumbs from '../Breadcrumbs';

interface IntegrationHeroProps {
  data: {
    name: string;
    logo: string;
    categories: string[];
    hero: {
      heading: string;
      subheading: string;
      image: string;
    };
  };
}

export default function IntegrationHero({ data }: IntegrationHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0B14] via-[#0E0918] to-[#0A0B14] text-white py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(107,75,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Breadcrumbs items={[{ label: 'Integrations', path: '/integrations' }, { label: data.name }]} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              {data.hero.heading}
            </h1>
            <p className="text-lg lg:text-xl text-[#C4BBD3] leading-relaxed font-light">
              {data.hero.subheading}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {data.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 backdrop-blur-sm rounded-full text-sm font-medium border border-[#10B981]/20 text-[#C4BBD3]"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 text-center">
                Get Started
              </button>
              <button className="px-6 py-3 bg-[#1A1B2E]/60 border border-[#2A2B3E] text-[#C4BBD3] font-semibold rounded-xl hover:border-[#10B981]/50 hover:text-white transition-all duration-300 text-center">
                View Documentation
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#10B981]/20 blur-3xl rounded-full opacity-30"></div>
              <div className="relative bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] p-12 rounded-2xl border border-[#2A2B3E] shadow-2xl">
                <img
                  src={data.hero.image}
                  alt={`${data.name} logo`}
                  className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
