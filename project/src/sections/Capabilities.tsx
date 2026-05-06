import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCw, Cpu, Database, Network } from 'lucide-react';

const capabilities = [
  {
    icon: Shield,
    title: 'Enterprise Guardrails',
    desc: 'SOC2 Type II, GDPR, and HIPAA compliant. Enforce strict PII masking and data residency rules at the node level.',
    theme: 'blue',
    upcoming: true
  },
  {
    icon: Zap,
    title: 'Sub-second Latency',
    desc: 'Optimized Rust runtime ensures your agent workflows trigger and execute in real-time, even at millions of ops.',
    theme: 'emerald'
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing Loops',
    desc: 'Automated retry logic and fallback paths ensure mission-critical processes never stay broken.',
    theme: 'amber',
    upcoming: true
  },
  {
    icon: Cpu,
    title: 'Model Agnostic',
    desc: 'Switch between OpenAI, Claude, or local LLMs without rewriting a single line of your workflow logic.',
    theme: 'purple'
  },
  {
    icon: Database,
    title: 'Native Vector Memory',
    desc: 'Long-term memory for every agent. Persist context across conversations with built-in RAG capabilities.',
    theme: 'sky'
  },
  {
    icon: Network,
    title: 'Multi-Step Orchestration',
    desc: 'Coordinate complex tasks between specialized agents with seamless context handoffs.',
    theme: 'indigo'
  }
];

const themeMap: Record<string, { bg: string, icon: string, border: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'group-hover:border-blue-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'group-hover:border-emerald-200' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'group-hover:border-amber-200' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'group-hover:border-purple-200' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', border: 'group-hover:border-sky-200' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'group-hover:border-indigo-200' }
};

export default function Capabilities() {
  return (
    <section className="section-padding bg-[#F9FAFF] overflow-hidden">
      <div className="container-standard">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8">
            <Cpu size={14} className="text-[#10B981]" />
            <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">Platform Core</span>
          </div>
          <h2 className="heading-section">
            Infrastructure Built for <br />
            <span className="text-[#10B981]">The Autonomous Age.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, i) => {
            const theme = themeMap[item.theme];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className={`card-premium group transition-all duration-500 hover:-translate-y-1 ${theme.border} relative`}
              >
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 border border-slate-100`}>
                  <item.icon size={26} className={theme.icon} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                  {item.upcoming && (
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-sm ring-1 ring-white/10">
                      Upcoming
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
