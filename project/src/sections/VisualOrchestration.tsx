import { MousePointer2, Bot, Send } from 'lucide-react';

export default function VisualOrchestration() {
  const workflowSteps = [
    { title: "AI Agents", description: "Coordinate reasoning, actions, enrichment, approvals, and automation." },
    { title: "Event Driven", description: "Trigger workflows from APIs, webhooks, messages, databases, and systems." },
    { title: "Reliable Execution", description: "Retries, delays, checkpoints, monitoring, and visibility built in." },
    { title: "Embedded Integrations", description: "Connect CRMs, databases, messaging, storage, and analytics." }
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Select Triggers",
      description: "Connect your communication channels, CRMs, BI tools, or custom webhooks in seconds.",
      icon: <MousePointer2 size={16} className="text-slate-900" />
    },
    {
      number: "02",
      title: "Design Logic",
      description: "Layer in multi-agent reasoning, branching paths, and vector-backed knowledge.",
      icon: <Bot size={16} className="text-slate-900" />
    },
    {
      number: "03",
      title: "Automate Action",
      description: "Dispatch outcomes to APIs, ticketing systems, dashboards, and messaging platforms.",
      icon: <Send size={16} className="text-slate-900" />
    }
  ];

  return (
    <section className="pt-12 pb-0 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 mb-4 shadow-sm">
              VISUAL ORCHESTRATION
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-4">
              Build Operational Logic Visually
            </h2>

            <p className="text-base text-slate-500 font-bold leading-relaxed mb-8 max-w-xl">
              Design workflows, AI agent coordination, integrations, retries,
              scheduling, approvals, and execution logic from one orchestration layer.
            </p>

            <div className="space-y-8 mt-12">
              {methodologySteps.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i < methodologySteps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-32px] w-px bg-slate-100" />
                  )}

                  <div className="shrink-0 flex flex-col items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-slate-100 bg-white flex items-center justify-center shadow-sm relative z-10">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">
                        {step.number}
                      </div>
                      {step.icon}
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-wider">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0b] rounded-[3rem] p-6 lg:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase block mb-1">
                  WORKFLOW BUILDER
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Gapflow Orchestration
                </h4>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#00C07F]/10 border border-[#00C07F]/20">
                <span className="text-[9px] font-black text-[#00C07F] uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="space-y-3 relative">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative">
                  {i < workflowSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full w-px h-3 bg-slate-800/50 -translate-x-1/2" />
                  )}

                  <div className="bg-slate-900/40 border border-slate-800/40 rounded-xl p-5 hover:border-slate-700 transition-colors shadow-lg">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.2em]">
                        STEP {i + 1}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C07F]/40" />
                    </div>
                    <h5 className="text-[11px] font-black text-white uppercase tracking-widest mb-1">
                      {step.title}
                    </h5>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-relaxed">
                      {step.description}
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
