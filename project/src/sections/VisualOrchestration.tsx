import { Sparkles } from 'lucide-react';

export default function VisualOrchestration() {
  const features = [
    {
      title: "AI Agents",
      description: "Coordinate reasoning, actions, enrichment, approvals, and automation across workflows."
    },
    {
      title: "Event Driven",
      description: "Trigger workflows from APIs, webhooks, messages, databases, and operational systems."
    },
    {
      title: "Reliable Execution",
      description: "Retries, delays, checkpoints, monitoring, and execution visibility built in."
    },
    {
      title: "Embedded Integrations",
      description: "Connect CRMs, databases, messaging, storage, analytics, and enterprise systems."
    }
  ];

  const workflowSteps = [
    { step: 1, label: "[PLACEHOLDER START BLOCK]" },
    { step: 2, label: "[PLACEHOLDER AI AGENT BLOCK]" },
    { step: 3, label: "[PLACEHOLDER CONDITIONAL BLOCK]" },
    { step: 4, label: "[PLACEHOLDER CRM ACTION]" },
    { step: 5, label: "[PLACEHOLDER EMAIL/SMS ACTION]" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Content & Feature Cards */}
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-8 shadow-sm">
              VISUAL ORCHESTRATION
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              Build Operational Logic Visually
            </h2>
            
            <p className="text-lg text-slate-500 font-bold leading-relaxed mb-12 max-w-xl">
              Design workflows, AI agent coordination, integrations, retries, 
              scheduling, approvals, and execution logic from one orchestration layer.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.05)] transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Sparkles size={18} className="text-[#00C07F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Builder Mockup */}
          <div className="bg-[#0a0a0b] rounded-[3rem] p-8 lg:p-12 shadow-2xl relative">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase block mb-1">
                  WORKFLOW BUILDER
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  [PLACEHOLDER WORKFLOW NAME]
                </h4>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#00C07F]/10 border border-[#00C07F]/20">
                <span className="text-[9px] font-black text-[#00C07F] uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="space-y-4 relative">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Connector Line */}
                  {i < workflowSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full w-px h-4 bg-slate-800 -translate-x-1/2" />
                  )}
                  
                  <div className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-5 hover:border-slate-700 transition-colors">
                    <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.2em] block mb-2">
                      STEP {step.step}
                    </span>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      {step.label}
                    </p>
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
