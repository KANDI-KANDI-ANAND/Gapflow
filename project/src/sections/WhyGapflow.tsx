import { LayoutGrid, Sparkles, ArrowRight, Server } from 'lucide-react';

export default function WhyGapflow() {
  const capabilities = [
    {
      title: "Workflows",
      description: "Build operational logic visually with branching, loops, approvals, scheduling, retries, and execution flows.",
      icon: <LayoutGrid className="text-emerald-500" size={24} />,
      bgColor: "bg-emerald-50"
    },
    {
      title: "AI Agents",
      description: "Coordinate AI reasoning, actions, enrichment, approvals, and operational automation across your product.",
      icon: <Sparkles className="text-blue-500" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Integrations",
      description: "Connect CRMs, APIs, databases, messaging platforms, contact centres, and storage systems in one layer.",
      icon: <ArrowRight className="text-purple-500" size={24} />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Execution Infrastructure",
      description: "Logging, retries, scheduling, execution history, monitoring, permissions, and governance built in.",
      icon: <Server className="text-orange-500" size={24} />,
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="text-center max-w-4xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-[0_12px_40px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-slate-300">
              <div className={`${cap.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-8`}>
                {cap.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{cap.title}</h3>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
