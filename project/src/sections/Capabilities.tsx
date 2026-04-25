import { Workflow, Sparkles, Plug, Lock, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Workflow,
      title: 'Visual Flow Builder',
      description: 'Design complex workflows with an intuitive drag-and-drop interface',
      points: ['Library of 200+ Nodes', 'Visual Debugger Mode', 'Conditional Branching', 'State Variable Store'],
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Sparkles,
      title: 'AI-Native Actions',
      description: 'Integrate cutting-edge AI models directly into your workflows',
      points: ['Full Claude 3.5 Support', 'GPT-4o Reasoning Hub', 'Search-Augmented RAG', 'Automated Guardrails'],
      color: 'from-[#059669] to-[#34D399]'
    },
    {
      icon: Plug,
      title: 'Deep Integrations',
      description: 'Connect seamlessly with your entire tech stack',
      points: ['Native Salesforce Sync', 'Realtime Slack Webhooks', 'Structured SQL Connect', '500+ Ecosystem Apps'],
      color: 'from-[#32D38A] to-[#28B876]'
    },
    {
      icon: Lock,
      title: 'Enterprise Core',
      description: 'Built-in governance and observability for high-scale operations',
      points: ['99.9% Uptime SLA', 'PII Data Masking', 'Multi-region Redundancy', 'Full Audit Traceability'],
      color: 'from-[#28B876] to-[#2AC47D]'
    }
  ];

  return (
    <section id="capabilities" className="relative bg-white py-12 lg:py-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(50,211,138,0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
            <Sparkles size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Automate</span>
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Everything you need to build, deploy, and govern high-performance AI agents in production.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" style={{ perspective: '2000px' }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              className="relative w-full h-[640px] cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              initial="unflipped"
              whileHover="flipped"
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                variants={{
                  unflipped: { rotateY: 0 },
                  flipped: { rotateY: 180 }
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              >
                {/* FRONT FACE: Minimal & Premium */}
                <div
                  className="absolute inset-0 bg-white border border-slate-200 rounded-[32px] p-8 flex flex-col items-center text-center shadow-xl shadow-slate-100 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500`}>
                    <cap.icon size={40} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 h-16">{cap.description}</p>

                  <div className="w-full space-y-3">
                    {cap.points.map((point, j) => (
                      <div key={j} className="flex items-center gap-3 justify-start bg-slate-50/80 rounded-xl p-3 border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                        <Check size={16} className="text-[#32D38A] shrink-0" />
                        <span className="text-xs font-semibold text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto text-[10px] uppercase tracking-widest text-[#10B981] font-bold animate-pulse">
                    Hover to Reveal
                  </div>
                </div>

                {/* BACK FACE: High-Fidelity "Visual Theater" */}
                <div
                  className="absolute inset-0 bg-slate-950 border border-slate-800 rounded-[32px] p-1 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-full h-full rounded-[30px] overflow-hidden relative border border-white/5 bg-slate-950 p-8 flex flex-col">

                    {/* Visual Theater (Top 60%) */}
                    <div className="h-[60%] w-full relative mb-6 rounded-2xl bg-black/50 border border-white/5 overflow-hidden">
                      {i === 0 && ( /* Node Web Visual */
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 bg-[#10B981]/5 animate-pulse" />
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <style>{`
                               @keyframes nodeDrift { 
                                 0%, 100% { transform: translate(0, 0); }
                                 50% { transform: translate(10px, -10px); }
                               }
                             `}</style>
                            <g className="animate-[nodeDrift_4s_ease-in-out_infinite]">
                              <circle cx="60" cy="60" r="4" fill="#10B981" />
                              <circle cx="140" cy="80" r="4" fill="#32D38A" />
                              <circle cx="100" cy="140" r="4" fill="#10B981" />
                              <path d="M 60 60 L 140 80 L 100 140 Z" stroke="#10B981" strokeWidth="1" fill="rgba(16,185,129,0.1)" />
                            </g>
                          </svg>
                        </div>
                      )}

                      {i === 1 && ( /* AI Signal Visual */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-end gap-1 h-32">
                            {[...Array(12)].map((_, n) => (
                              <motion.div
                                key={n}
                                className="w-2 bg-[#10B981] rounded-full"
                                animate={{ height: [20, 60, 10, 40, 20] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: n * 0.1,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {i === 2 && ( /* Particle Stream Visual - FIXED */
                        <div className="absolute inset-0">
                          <style>{`
                             @keyframes particleAscend {
                               0% { transform: translateY(100%) scale(0); opacity: 0; }
                               20% { opacity: 1; }
                               100% { transform: translateY(-120%) scale(1.5); opacity: 0; }
                             }
                             .p-dot { animation: particleAscend 3s linear infinite; }
                           `}</style>
                          <div className="absolute bottom-0 left-0 w-full h-full flex justify-around items-end">
                            <div className="p-dot w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981]" style={{ animationDelay: '0s' }} />
                            <div className="p-dot w-1.5 h-1.5 bg-[#32D38A] rounded-full shadow-[0_0_15px_#32D38A]" style={{ animationDelay: '0.8s' }} />
                            <div className="p-dot w-2.5 h-2.5 bg-[#059669] rounded-full shadow-[0_0_15px_#059669]" style={{ animationDelay: '1.5s' }} />
                            <div className="p-dot w-1 h-1 bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981]" style={{ animationDelay: '2.2s' }} />
                            <div className="p-dot w-2 h-2 bg-[#32D38A] rounded-full shadow-[0_0_15px_#32D38A]" style={{ animationDelay: '0.4s' }} />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black" />
                        </div>
                      )}

                      {i === 3 && ( /* 3D Shield Sphere */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full border border-[#10B981]/40 relative animate-spin" style={{ animationDuration: '12s' }}>
                            <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-[#10B981] rounded-full" />
                            <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 bg-[#10B981] rounded-full" />
                            <div className="absolute inset-4 rounded-full border border-white/10 border-dashed" />
                          </div>
                          <Lock className="absolute text-[#10B981]" size={48} />
                        </div>
                      )}
                    </div>

                    {/* Content Group (Popped out via translateZ) */}
                    <div className="relative z-10 text-center" style={{ transform: 'translateZ(60px)' }}>
                      <div className={`w-12 h-12 rounded-xl bg-[#10B981]/10 mx-auto flex items-center justify-center mb-4 border border-[#10B981]/20`}>
                        <cap.icon size={24} className="text-[#10B981]" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{cap.title}</h4>
                      <p className="text-slate-400 text-xs font-semibold px-4 leading-relaxed max-w-sm mx-auto">
                        High-performance infrastructure engineered for zero-latency execution and visual reasoning.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
