import { MousePointer, Bot, Send, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MousePointer,
      title: 'Choose a trigger',
      desc: 'Connect your apps, CRMs, BI tools, or custom events in seconds',
      details: ['500+ pre-built connectors', 'Webhooks & real-time events', 'Scheduled BI syncs']
    },
    {
      number: '02',
      icon: Bot,
      title: 'Add logic & AI',
      desc: 'Layer in branching, variables, RAG, and reasoning',
      details: ['Smart decision trees', 'AI-powered analysis', 'Dynamic data flows']
    },
    {
      number: '03',
      icon: Send,
      title: 'Automate outputs',
      desc: 'Push to APIs, tickets, messages, and dashboards',
      details: ['Multi-channel delivery', 'Error handling', 'Audit logging']
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-sm text-slate-600 font-medium">Simple 3-Step Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How Gapflow works
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Build powerful automations in minutes with our visual workflow builder
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300 group">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-[#10B981]/30 z-10">
                    {step.number}
                  </div>

                  <div className="mt-6 mb-6 flex items-center gap-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 group-hover:bg-[#10B981]/20 group-hover:scale-110 transition-all duration-300">
                      <step.icon size={28} className="text-[#10B981]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{step.desc}</p>

                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <ArrowRight size={14} className="text-[#10B981] flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    {i === 0 && (
                      <div className="aspect-video rounded-lg bg-white border border-slate-200/50 overflow-hidden p-6 flex items-center justify-center">
                        <svg viewBox="0 0 300 180" className="w-full h-full">
                          <rect x="110" y="15" width="80" height="60" rx="8" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <text x="150" y="50" fill="#10B981" fontSize="12" textAnchor="middle" fontWeight="600">TRIGGER</text>

                          <g opacity="0.8">
                            <circle cx="40" cy="45" r="18" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <path d="M40 35 L40 55 M30 45 L50 45" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                          </g>
                          <path d="M60 45 L105 45" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />

                          <g opacity="0.8">
                            <circle cx="40" cy="100" r="18" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect x="32" y="95" width="16" height="10" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                          </g>
                          <path d="M60 100 L105 70" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />

                          <g opacity="0.8">
                            <circle cx="260" cy="45" r="18" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <circle cx="260" cy="45" r="8" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                            <circle cx="260" cy="45" r="4" fill="#94a3b8" />
                          </g>
                          <path d="M195 45 L240 45" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />

                          <g opacity="0.8">
                            <circle cx="260" cy="135" r="18" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect x="252" y="130" width="16" height="3" rx="1" fill="#94a3b8" />
                            <rect x="252" y="135" width="16" height="3" rx="1" fill="#94a3b8" />
                            <rect x="252" y="140" width="16" height="3" rx="1" fill="#94a3b8" />
                          </g>
                          <path d="M195 70 L240 135" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />
                        </svg>
                      </div>
                    )}

                    {i === 1 && (
                      <div className="aspect-video rounded-lg bg-white border border-slate-200/50 overflow-hidden p-6 flex items-center justify-center">
                        <svg viewBox="0 0 300 180" className="w-full h-full">
                          <rect x="115" y="15" width="70" height="40" rx="6" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <text x="150" y="40" fill="#C4BBD3" fontSize="11" textAnchor="middle">Input</text>

                          <path d="M150 58 L150 75" stroke="#10B981" strokeWidth="2" />

                          <path d="M90 90 L150 75 L210 90" stroke="#10B981" strokeWidth="2" fill="none" />

                          <rect x="55" y="95" width="70" height="40" rx="6" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <circle cx="90" cy="110" r="8" fill="#10B981" opacity="0.3" />
                          <text x="90" y="125" fill="#C4BBD3" fontSize="9" textAnchor="middle">AI Logic</text>

                          <rect x="175" y="95" width="70" height="40" rx="6" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <path d="M210 105 L210 120 M200 112.5 L220 112.5" stroke="#10B981" strokeWidth="2" />
                          <text x="210" y="125" fill="#C4BBD3" fontSize="9" textAnchor="middle">Branch</text>

                          <path d="M90 138 L90 155 L150 155" stroke="#10B981" strokeWidth="2" />
                          <path d="M210 138 L210 155 L150 155" stroke="#10B981" strokeWidth="2" />

                          <rect x="115" y="150" width="70" height="25" rx="6" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <text x="150" y="167" fill="#C4BBD3" fontSize="10" textAnchor="middle">Output</text>
                        </svg>
                      </div>
                    )}

                    {i === 2 && (
                      <div className="aspect-video rounded-lg bg-white border border-slate-200/50 overflow-hidden p-6 flex items-center justify-center">
                        <svg viewBox="0 0 300 180" className="w-full h-full">
                          <circle cx="150" cy="90" r="35" fill="#ffffff" stroke="#10B981" strokeWidth="2" />
                          <text x="150" y="95" fill="#C4BBD3" fontSize="12" textAnchor="middle" fontWeight="600">DATA</text>

                          <g>
                            <path d="M150 55 L150 25" stroke="#10B981" strokeWidth="2" />
                            <circle cx="150" cy="20" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect x="145" y="16" width="10" height="8" rx="1" fill="#94a3b8" />
                          </g>

                          <g>
                            <path d="M185 90 L235 65" stroke="#10B981" strokeWidth="2" />
                            <rect x="235" y="55" width="24" height="20" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <path d="M242 62 L252 62 M242 68 L252 68" stroke="#94a3b8" strokeWidth="1.5" />
                          </g>

                          <g>
                            <path d="M185 110 L235 135" stroke="#10B981" strokeWidth="2" />
                            <circle cx="247" cy="135" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <circle cx="247" cy="135" r="5" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                            <path d="M247 130 L247 140" stroke="#94a3b8" strokeWidth="1.5" />
                          </g>

                          <g>
                            <path d="M115 90 L65 65" stroke="#10B981" strokeWidth="2" />
                            <rect x="41" y="55" width="24" height="20" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect x="47" y="60" width="12" height="10" rx="1" fill="#94a3b8" />
                          </g>

                          <g>
                            <path d="M115 110 L65 135" stroke="#10B981" strokeWidth="2" />
                            <circle cx="53" cy="135" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect x="48" y="130" width="10" height="10" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                            <circle cx="53" cy="135" r="3" fill="#94a3b8" />
                          </g>

                          <g>
                            <path d="M150 125 L150 160" stroke="#10B981" strokeWidth="2" />
                            <rect x="138" y="155" width="24" height="18" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                            <path d="M145 162 L155 162 M145 166 L155 166" stroke="#94a3b8" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-24 -right-6 items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-[#10B981]/30 z-20">
                    <ArrowRight size={20} className="text-[#10B981]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
              <span>See it in action</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
