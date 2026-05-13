import { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const audienceContent = {
  FOUNDERS: {
    label: "FOR FOUNDERS",
    header: "Ship Operational Capability Faster",
    description: "Launch AI-powered workflows, integrations, and execution systems without scaling backend complexity.",
    bullets: [
      "Reduce engineering overhead for operational tooling",
      "Add automation and integrations directly into your product",
      "Scale operational execution without rebuilding infrastructure"
    ],
    color: "bg-sky-100/60 border-sky-200/50"
  },
  PRODUCT_TEAMS: {
    label: "FOR PRODUCT TEAMS",
    header: "Turn Product Events Into Execution",
    description: "Coordinate workflows, AI actions, integrations, and operational logic from one orchestration layer.",
    bullets: [
      "Build workflows visually instead of hardcoding logic",
      "Trigger actions across APIs, CRMs, messaging, and databases",
      "Reuse orchestration across multiple product features"
    ],
    color: "bg-indigo-50/80 border-indigo-100"
  },
  AI_PLATFORMS: {
    label: "FOR AI PLATFORMS",
    header: "Operationalize AI Agents",
    description: "Move beyond chat experiences into workflows, integrations, and operational execution.",
    bullets: [
      "Trigger real-world actions from AI decisions",
      "Connect agents to APIs, CRMs, and business systems",
      "Monitor execution, retries, logs, and operational outcomes"
    ],
    color: "bg-sky-100/60 border-sky-200/50"
  },
  ENTERPRISE_OPS: {
    label: "FOR ENTERPRISE OPERATIONS",
    header: "Standardize Operational Execution",
    description: "Coordinate workflows across departments, systems, and operational teams from one execution layer.",
    bullets: [
      "Replace fragmented scripts and manual processes",
      "Improve execution visibility and governance",
      "Scale automation across multiple operational systems"
    ],
    color: "bg-indigo-50/80 border-indigo-100"
  }
};

export default function OrchestrationEngine() {
  const [activeTab, setActiveTab] = useState<keyof typeof audienceContent>('FOUNDERS');

  return (
    <section className="pt-12 pb-5 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="bg-[#f8fafc] border-2 border-slate-200/60 rounded-[3rem] py-10 lg:py-12 px-8 lg:px-16 relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-4 block">
                AUDIENCE LAYER
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tighter">Gapflow for Your Team</h3>

              <div className="space-y-3 flex-grow">
                {(Object.keys(audienceContent) as Array<keyof typeof audienceContent>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left rounded-2xl px-5 py-5 transition-all duration-300 border-2 ${activeTab === key
                        ? 'border-slate-900 translate-x-2 shadow-md'
                        : 'border-transparent'
                      } ${audienceContent[key].color}`}
                  >
                    <span className={`text-[10px] font-black uppercase tracking-widest leading-none ${activeTab === key ? 'text-slate-900' : 'text-slate-400'
                      }`}>
                      {audienceContent[key].label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center h-full min-h-[450px]">
              <div className="bg-[#0a0a0b] w-full max-w-[280px] aspect-square rounded-[3rem] flex flex-col items-center justify-center p-8 shadow-2xl relative group">
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

            <div className="h-[450px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 h-full flex flex-col"
                >
                  <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-6 block">
                    {audienceContent[activeTab].label}
                  </span>

                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
                    {audienceContent[activeTab].header}
                  </h3>

                  <p className="text-sm font-bold text-slate-500 leading-relaxed mb-8">
                    {audienceContent[activeTab].description}
                  </p>

                  <div className="space-y-4 mt-auto">
                    {audienceContent[activeTab].bullets.map((bullet, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1 bg-slate-50 rounded-full p-1 border border-slate-100">
                          <CheckCircle2 size={12} className="text-slate-900" />
                        </div>
                        <p className="text-[12px] font-bold text-slate-600 leading-snug">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
