import { Sparkles } from 'lucide-react';

export default function OrchestrationEngine() {
  const productItems = [
    "New customer workflow triggered",
    "AI enrichment and routing executed",
    "Operational actions dispatched automatically"
  ];

  const outputItems = [
    "CRM Update", "AI Response",
    "Email", "SMS",
    "Analytics", "Webhook"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="bg-[#f8fafc] border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left: Product Layer Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#00C07F] uppercase mb-4 block">
                PRODUCT LAYER
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-8">AI SaaS Platform</h3>
              <div className="space-y-4">
                {productItems.map((item, i) => (
                  <div key={i} className="bg-slate-50/50 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-600 border border-slate-100/50">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Middle: Execution Engine Hub */}
            <div className="flex justify-center">
              <div className="bg-[#0a0a0b] w-full max-w-[280px] aspect-square rounded-[3rem] flex flex-col items-center justify-center p-8 shadow-2xl relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#00C07F]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-800">
                  <Sparkles className="text-[#00C07F]" size={28} />
                </div>
                
                <span className="text-[10px] font-black tracking-[0.3em] text-[#00C07F] uppercase mb-2">GAPFLOW</span>
                <h4 className="text-2xl font-black text-white text-center leading-tight mb-6">Execution Engine</h4>
                
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">
                  <span>Workflows</span> • <span>AI Agents</span> • <span>Integrations</span> • <span>Scheduling</span>
                </div>
              </div>
            </div>

            {/* Right: Execution Outputs & Advantage */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-6 block">
                  EXECUTION OUTPUTS
                </span>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {outputItems.map((item, i) => (
                    <div key={i} className="bg-slate-50/50 rounded-xl px-4 py-3 text-[11px] font-black text-slate-700 border border-slate-100 text-center">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
                  <span className="text-[9px] font-black tracking-[0.15em] text-[#008c5d] uppercase block mb-3">
                    INFRASTRUCTURE ADVANTAGE
                  </span>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed">
                    Ship operational capabilities faster without building orchestration infrastructure from scratch internally.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
