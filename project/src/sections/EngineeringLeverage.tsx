export default function EngineeringLeverage() {
  const builtInFeatures = [
    "Retry Systems",
    "Webhook Infrastructure",
    "Scheduling Engines",
    "Workflow State Management",
    "Execution Logging",
    "AI Agent Coordination"
  ];

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="container-standard max-w-6xl mx-auto">
        <div className="bg-[#0a0a0b] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00C07F]/5 blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Content */}
            <div className="max-w-lg">
              <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#00C07F] mb-6">
                ENGINEERING LEVERAGE
              </div>

              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Focus On Shipping Product. Not Building Plumbing.
              </h2>

              <p className="text-base text-slate-400 font-bold leading-relaxed">
                Gapflow becomes the orchestration and execution layer behind your application
                so your engineering teams can move faster without rebuilding operational
                systems repeatedly.
              </p>
            </div>

            {/* Right: Built-in Features List */}
            <div className="space-y-2.5">
              {builtInFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 group hover:border-[#00C07F]/30 transition-all duration-300"
                >
                  <span className="text-[13px] font-black text-slate-300 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                  <div className="px-3 py-1 rounded bg-[#00C07F]/10 border border-[#00C07F]/20">
                    <span className="text-[8px] font-black text-[#00C07F] uppercase tracking-widest">
                      BUILT IN
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
