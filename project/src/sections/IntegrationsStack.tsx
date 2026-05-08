export default function IntegrationsStack() {
  const integrations = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="bg-[#f8fafc] border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
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

            {/* Right: Integrations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrations.map((i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-50 flex flex-col items-center justify-center text-center group hover:shadow-[0_15px_35px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 min-h-[120px]"
                >
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-tight">
                    [PLACEHOLDER <br /> INTEGRATION]
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
