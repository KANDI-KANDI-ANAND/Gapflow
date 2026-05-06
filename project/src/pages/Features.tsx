import { useState } from 'react';
import {
  Workflow, GitBranch, Repeat, Play, Bot, BookOpen, CheckCircle,
  MessageSquare, Code2, Terminal, Webhook, FileJson, Sparkles, ArrowRight, Rocket, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CommandCenter from '../sections/CommandCenter';
import DevConsole from '../components/DevConsole';
import LazySection from '../components/LazySection';
import { lazy, Suspense } from 'react';

const Teams = lazy(() => import('../sections/Teams'));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-10 min-h-[20vh] w-full border border-slate-100 bg-white/50 animate-pulse my-6 rounded-2xl">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Initializing Module</span>
    </div>
  </div>
);

export default function Features() {
  const [activeDevFeature, setActiveDevFeature] = useState('sdk');

  const visualBuilderFeatures = [
    { icon: Workflow, title: 'Drag-and-drop nodes', desc: 'Compose flows with triggers, logic, and actions.' },
    { icon: GitBranch, title: 'Branching & variables', desc: 'Create complex paths and reuse context across steps.' },
    { icon: Repeat, title: 'Reusable templates', desc: 'Shareable blueprints for common automations.' },
    { icon: Play, title: 'Run & debug', desc: 'Step through runs, inspect payloads, retry failed steps.' }
  ];

  const aiActions = [
    { icon: Bot, title: 'Model choice', desc: 'OpenAI, Claude, Gemini, Bedrock.' },
    { icon: BookOpen, title: 'RAG & grounding', desc: 'Bring your docs and KB into the loop.' },
    { icon: CheckCircle, title: 'Eval hooks', desc: 'Judge outputs, score quality, enforce guardrails.' },
    { icon: MessageSquare, title: 'Summaries & routing', desc: 'Summarize tickets, classify intents, escalate.' }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Dynamics 365', 'Power BI', 'BigQuery', 'Snowflake',
    'PostgreSQL', 'Google Sheets', 'Slack', 'Twilio', 'WhatsApp', 'Bright Pattern'
  ];

  const developerFeatures = [
    { id: 'sdk', icon: Code2, text: 'Custom nodes SDK', tag: '(upcoming)', sub: 'Build your own custom integrations.' },
    { id: 'cli', icon: Terminal, text: 'CLI & REST API', tag: '(upcoming)', sub: 'Automate deployments directly.' },
    { id: 'webhooks', icon: Webhook, text: 'Webhooks (in/out)', sub: 'Event-driven instant triggers.' },
    { id: 'import_export', icon: FileJson, text: 'JSON export & import', sub: 'Portable workflow blueprints.' }
  ];

  return (
    <div className="bg-white">
      <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 45s linear infinite;
          }
        `}</style>

      {/* Hero Section */}
      <section className="pt-10 pb-6 lg:pt-14 lg:pb-8 border-b border-slate-100/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/20 via-white to-white pointer-events-none" />
        <div className="container-standard text-center relative z-10">
          <div className="inline-flex items-center justify-center w-full mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
              <Sparkles size={14} className="text-[#10B981]" />
              <span className="text-[10px] text-emerald-700 font-bold tracking-[0.15em] uppercase">Technical Deep-Dive</span>
            </div>
          </div>

          <h1 className="heading-hero mb-6">
            The Engine of <br />
            <span className="text-[#10B981]">Modern Automation.</span>
          </h1>

          <p className="text-subcopy max-w-2xl mx-auto mb-8 text-slate-500/90 text-center font-medium">
            Analyze the inner workings of Gapflow. From semantic routing to vector memory, every component is engineered for production-grade scale.
          </p>

          <div className="flex gap-5 justify-center flex-wrap">
            <button className="btn-primary min-w-[220px] shadow-lg shadow-emerald-200/50 !bg-[#10B981]">
              Explore The Core
            </button>
            <button className="btn-secondary min-w-[220px] border-slate-200 hover:border-[#10B981] hover:text-[#10B981]">
              Read Spec Sheet
            </button>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <Teams />
        </Suspense>
      </LazySection>

      {/* Platform Preview Section */}
      <section className="py-8 lg:py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="container-standard">
          <div className="w-full text-center mb-12">
            <h2 className="heading-section mb-4">The Unified Automation Engine</h2>
            <p className="text-subcopy text-slate-500/90 max-w-2xl mx-auto text-center">
              One interface for all your complex enterprise logic, from simple triggers to multi-agent swarms.
            </p>
          </div>
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#10B981]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative bg-white border border-slate-200/60 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              <img
                src="/features/flow_builder_ui_visualization.jpg"
                alt="Gapflow Platform Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flow Builder */}
      <section className="section-padding bg-emerald-50/30 border-y border-emerald-100/50">
        <div className="container-standard">
          <div className="w-full flex flex-col items-center justify-center text-center mb-16">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-emerald-100">
              <Workflow size={24} className="text-emerald-500" />
            </div>
            <h2 className="heading-section mb-6">Visual Flow Builder</h2>
            <p className="text-base text-slate-500 font-bold tracking-tight max-w-2xl mx-auto text-center">
              Modular nodes for <span className="text-emerald-600">infinite logical complexity.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {visualBuilderFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium group !bg-white shadow-sm hover:border-emerald-200 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100 transition-transform group-hover:scale-110">
                  <feature.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Native Actions */}
      <section className="section-padding bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-purple-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-full bg-blue-500/10 blur-[120px] rounded-full" />
        </div>
        <div className="container-standard relative z-10">
          <div className="w-full flex flex-col items-center justify-center text-center mb-16">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
              <Zap size={24} className="text-purple-400" />
            </div>
            <h2 className="text-white text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">AI-Native Actions</h2>
            <p className="text-xs lg:text-sm text-purple-400 font-bold tracking-[0.2em] uppercase max-w-2xl mx-auto text-center">
              Direct integration with <span className="text-white">industry-leading LLMs</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aiActions.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/15 transition-all duration-500 hover:border-purple-500/30 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <feature.icon size={22} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations & Connectors */}
      <section className="section-padding bg-white border-y border-slate-100 overflow-hidden">
        <div className="container-standard">
          <div className="w-full flex flex-col items-center justify-center text-center mb-16">
            <h2 className="heading-section mb-6">Integrations & Connectors</h2>
            <p className="text-base text-slate-500 font-bold tracking-tight max-w-2xl mx-auto text-center">
              Native connectors for <span className="text-[#10B981] font-black">500+</span> enterprise systems.
            </p>
          </div>

          <div className="relative">
            {/* Row 1: Left */}
            <div className="flex gap-6 mb-8 animate-marquee-left whitespace-nowrap">
              {[...integrations, ...integrations].map((item, i) => (
                <div key={`left-${i}`} className="inline-flex items-center justify-center px-10 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] text-slate-600 shadow-sm hover:border-[#10B981] hover:text-[#10B981] transition-all cursor-default min-w-[200px]">
                  {item}
                </div>
              ))}
            </div>

            {/* Row 2: Right */}
            <div className="flex gap-6 animate-marquee-right whitespace-nowrap">
              {[...integrations, ...integrations].map((_, i) => (
                <div key={`right-${i}`} className="inline-flex items-center justify-center px-10 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] text-slate-600 shadow-sm hover:border-[#10B981] hover:text-[#10B981] transition-all cursor-default min-w-[200px]">
                  {[...integrations].reverse()[i % integrations.length]}
                </div>
              ))}
            </div>

            {/* Fades */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

          <div className="mt-12 text-center">
            <Link to="/integrations" className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700 transition-all border-b border-transparent hover:border-emerald-600 pb-1 font-black">See all connectors →</Link>
          </div>
        </div>
      </section>

      {/* CommandCenter Section */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <CommandCenter />
      </section>

      {/* Developer Section */}
      <section className="section-padding bg-blue-50/20 overflow-hidden">
        <div className="container-standard">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center justify-center w-full mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                <Terminal size={14} className="text-blue-600" />
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">Developer First</span>
              </div>
            </div>
            <h2 className="heading-section mb-4">
              Built for <span className="text-blue-600">Engineering.</span>
            </h2>
            <p className="text-subcopy max-w-xl mx-auto text-slate-500/90 text-center">
              Direct access to the underlying engine. Export JSON blueprints, trigger via CLI, or build custom nodes with our SDK.
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-blue-500/5">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex-1 flex flex-col gap-4">
                  {developerFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      onMouseEnter={() => setActiveDevFeature(feature.id)}
                      className={`flex flex-1 items-center gap-8 p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border ${activeDevFeature === feature.id
                        ? 'bg-blue-50/50 border-blue-500 shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)]'
                        : 'bg-white border-transparent text-slate-400 hover:bg-blue-50/30 hover:border-blue-200'
                        }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${activeDevFeature === feature.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-50 text-slate-300 border border-slate-100 shadow-sm'
                        }`}>
                        <feature.icon size={24} />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${activeDevFeature === feature.id ? 'text-blue-900' : 'text-slate-500'}`}>
                            {feature.text}
                          </span>
                          {feature.tag && (
                            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                              {feature.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mt-1.5 leading-relaxed tracking-tight">{feature.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="btn-primary w-full justify-center !py-5 !bg-blue-600 hover:!bg-blue-700 shadow-lg shadow-blue-200/50 border-none transition-all">
                    Open Documentation
                    <ArrowRight size={18} className="ml-3" />
                  </button>
                </div>
              </div>

              <div className="relative h-full flex flex-col min-h-[400px]">
                <div className="absolute -inset-10 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative h-full bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
                  <DevConsole activeId={activeDevFeature} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        </div>
        <div className="container-standard text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-tight text-center">
            Ship your first <br />
            <span className="text-[#10B981]">Automation</span> in minutes.
          </h2>

          <div className="flex gap-5 justify-center flex-wrap">
            <button className="btn-secondary !bg-white !text-slate-900 hover:!bg-slate-100 !border-none group min-w-[220px]">
              <span>Get Started</span>
              <Rocket size={18} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/templates" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all px-8 py-5">
              Explore Templates →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
