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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-10 shadow-sm">
            WHY TEAMS USE GAPFLOW
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-10">
            Stop Building Operational Infrastructure Internally
          </h2>

          <p className="text-lg lg:text-xl text-slate-500 font-bold max-w-3xl mx-auto leading-relaxed mb-6">
            Most teams waste engineering time rebuilding workflows, retries, integrations,
            queues, triggers, scheduling, AI coordination, and execution systems from scratch.
          </p>

          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] max-w-3xl mx-auto">
            Gapflow gives your product these capabilities out of the box.
          </p>
        </div>

        <div className="bg-[#0a0a0b] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00C07F]/5 blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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

            <div className="space-y-2.5">
              {builtInFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-slate-900/40 border border-slate-700/80 rounded-xl p-4 group hover:border-[#00C07F]/30 transition-all duration-300 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.5)]"
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
