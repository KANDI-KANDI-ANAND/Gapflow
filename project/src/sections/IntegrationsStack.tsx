export default function IntegrationsStack() {
  const integrations = [
    { name: 'Salesforce', color: '#00A1E0', textColor: 'text-[#00A1E0]' },
    { name: 'OpenAI', color: '#000000', textColor: 'text-slate-900' },
    { name: 'Slack', color: '#4A154B', textColor: 'text-[#4A154B]' },
    { name: 'PostgreSQL', color: '#336791', textColor: 'text-[#336791]' },
    { name: 'Twilio', color: '#F22F46', textColor: 'text-[#F22F46]' },
    { name: 'HubSpot', color: '#FF7A59', textColor: 'text-[#FF7A59]' },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="bg-[#f8fafc] border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#00C07F] mb-8 shadow-sm">
                INTEGRATIONS
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
                Connect To Your Existing Stack
              </h2>

              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                Gapflow integrates with CRMs, databases, messaging platforms,
                APIs, AI providers, contact centres, and operational systems.
              </p>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrations.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col items-center justify-center text-center group hover:shadow-[0_15px_35px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 min-h-[120px] relative overflow-hidden"
                >

                  <div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: brand.color }}
                  />

                  <span className={`text-[13px] font-black uppercase tracking-widest leading-tight ${brand.textColor}`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
