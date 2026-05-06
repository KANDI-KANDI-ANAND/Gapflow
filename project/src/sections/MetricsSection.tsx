import { motion } from 'framer-motion';

const stats = [
  { label: 'OpenAI Ecosystem', value: '25M+', description: 'Total autonomous agents deployed via GPT-4o', color: 'text-emerald-400' },
  { label: 'Claude (Anthropic)', value: '100M+', description: 'Monthly interactions via Claude Code & Desktop', color: 'text-blue-400' },
  { label: 'Google Gemini', value: '35M+', description: 'Agents integrated with Workspace & Vertex AI', color: 'text-purple-400' },
  { label: 'CrewAI Framework', value: '5M+', description: 'Multi-agent orchestration flows active', color: 'text-teal-400' },
];

export default function MetricsSection() {
  return (
    <section className="section-padding bg-slate-900 overflow-hidden relative">
      {/* Abstract Background Elements - ADDED MULTI-COLOR GLOWS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-emerald-500/10 blur-[120px] rounded-full rotate-12 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[100%] bg-blue-500/10 blur-[120px] rounded-full -rotate-12" />
      </div>

      <div className="container-standard relative z-10">
        <div className="max-w-4xl mb-20 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Global AI Agents <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Landscape
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col group relative"
            >
              {/* Decorative Vertical Line */}
              <div className={`absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-50 hidden lg:block`} />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 group-hover:text-white transition-colors duration-500">
                {stat.label}
              </span>

              <h3 className={`text-4xl lg:text-6xl font-black mb-6 tracking-tighter ${stat.color} transition-transform duration-500 group-hover:scale-105`}>
                {stat.value}
              </h3>

              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 leading-relaxed max-w-[200px] border-t border-slate-800 pt-6">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
