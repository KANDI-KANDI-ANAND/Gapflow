import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Your universal automation layer
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Connect, automate, and scale your entire tech stack from one intelligent platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border-slate-200 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 border border-[#10B981]/30 mb-3">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-600 mb-1">Apps</div>
                      <div className="text-xs text-[#6B7280]">CRM · Support · Comm</div>
                    </div>

                    <ArrowRight className="text-[#10B981] mx-4 flex-shrink-0" size={32} />

                    <div className="text-center flex-1">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] border border-[#10B981] mb-3 shadow-lg shadow-[#10B981]/30">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">Gapflow</div>
                      <div className="text-xs text-[#6B7280]">Flows · AI · Data</div>
                    </div>

                    <ArrowRight className="text-[#32D38A] mx-4 flex-shrink-0" size={32} />

                    <div className="text-center flex-1">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-[#32D38A]/20 to-[#28B876]/20 border border-[#32D38A]/30 mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div className="text-sm font-semibold text-[#32D38A] mb-1">Outputs</div>
                      <div className="text-xs text-[#6B7280]">Dashboards · Tickets</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#2A2B3E]">
                  <div className="w-2 h-2 rounded-full bg-[#32D38A] animate-pulse" />
                  <span className="text-xs text-slate-600 font-medium">Live</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#10B981]/20 to-[#32D38A]/20 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6">
            {[
              {
                icon: '🤖',
                title: 'Automate anything',
                description: 'Triggers, logic, AI actions, and outputs — all visual, no code required'
              },
              {
                icon: '🔌',
                title: 'Connect everything',
                description: 'CRMs, BI tools, bots, databases, and APIs in one unified platform'
              },
              {
                icon: '🚀',
                title: 'Scale with confidence',
                description: 'Enterprise-grade roles, versioning, audit logs, and SLAs built-in'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-xl bg-white/60 border border-[#2A2B3E] hover:border-[#10B981]/50 hover:bg-white transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
