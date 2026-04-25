import { Zap, Bot, Plug, FileText, Package, Puzzle, Rocket, MessageCircle, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Pill from '../components/Pill';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Docs() {
  const quickStarts = [
    { icon: Zap, title: 'Create your first flow', desc: 'Visual builder walkthrough', action: '/docs/getting-started' },
    { icon: Bot, title: 'Add an AI action', desc: 'Models, prompts, evals', action: '/docs/ai-actions' },
    { icon: Plug, title: 'Connect an app', desc: 'Webhooks and OAuth', action: '/docs/connectors' }
  ];

  const references = [
    { icon: FileText, title: 'API', desc: 'Endpoints & auth', action: '/docs/api' },
    { icon: Package, title: 'SDKs', desc: 'JavaScript, Python', action: '/docs/sdks' },
    { icon: Puzzle, title: 'Connector SDK', desc: 'Create custom nodes', action: '/docs/connectors' }
  ];

  const examples = [
    { title: 'Power BI → Slack digest', action: '/docs/examples/powerbi-slack' },
    { title: 'RAG: docs to answers', action: '/docs/examples/rag' },
    { title: 'Incident → on‑call paging', action: '/docs/examples/oncall' }
  ];

  return (
    <div>
      <div className="bg-white py-4 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Docs' }]} />
        </div>
      </div>

      <section id="docs-hero" className="relative bg-white py-16 lg:py-20" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% -10%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
            <BookOpen size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Documentation</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Build with Gapflow
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto mb-12">
            Guides, API reference, SDKs, and examples to ship automations quickly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Get Started</span>
              <Rocket size={20} />
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-600 font-medium text-lg rounded-xl border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:text-slate-900 transition-all duration-300">
              <span>API Reference</span>
            </button>
          </div>
        </div>
      </section>

      <section id="quick-start" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Quick starts</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickStarts.map((item, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={28} className="text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="references" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">References</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {references.map((item, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={28} className="text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Examples</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {examples.map((item, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[120px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <h3 className="text-xl font-bold text-slate-900 relative">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="relative bg-gradient-to-b from-[#F8FAFC] to-slate-50 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% 50%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Need help?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join the community or contact support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <MessageCircle size={20} />
              <span>Community</span>
            </button>
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300 px-8 py-4">
              Contact Support →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
