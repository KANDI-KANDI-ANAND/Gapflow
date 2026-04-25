import { useState } from 'react';
import {
  Workflow, GitBranch, Repeat, Play, Bot, BookOpen, CheckCircle,
  MessageSquare, Shield, FileText, BarChart, AlertTriangle, Code2,
  Terminal, Webhook, FileJson, Rocket, Layers, Sparkles, Plug,
  Settings, Zap, Lock, Eye, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import ImageLightbox from '../components/ImageLightbox';
import CommandCenter from '../sections/CommandCenter';
import XRayEngine from '../components/XRayEngine';
import LogicTrace from '../components/LogicTrace';
import SlotMachine from '../components/SlotMachine';
import { DragDropAnimation, BranchingAnimation, TemplateAnimation, RunDebugAnimation, ModelChoiceAnimation, RAGAnimation, EvalAnimation, RoutingAnimation } from '../components/FeatureAnimations';
import DevConsole from '../components/DevConsole';

export default function Features() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeDevFeature, setActiveDevFeature] = useState('sdk');
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);


  const visualBuilderFeatures = [
    { icon: Workflow, animation: DragDropAnimation, title: 'Drag-and-drop nodes', desc: 'Compose flows with triggers, logic, and actions.' },
    { icon: GitBranch, animation: BranchingAnimation, title: 'Branching & variables', desc: 'Create complex paths and reuse context across steps.' },
    { icon: Repeat, animation: TemplateAnimation, title: 'Reusable templates', desc: 'Shareable blueprints for common automations.' },
    { icon: Play, animation: RunDebugAnimation, title: 'Run & debug', desc: 'Step through runs, inspect payloads, retry failed steps.' }
  ];

  const aiActions = [
    { icon: Bot, animation: ModelChoiceAnimation, title: 'Model choice', desc: 'OpenAI, Claude, Gemini, Bedrock.' },
    { icon: BookOpen, animation: RAGAnimation, title: 'RAG & grounding', desc: 'Bring your docs and KB into the loop.' },
    { icon: CheckCircle, animation: EvalAnimation, title: 'Eval hooks', desc: 'Judge outputs, score quality, enforce guardrails.' },
    { icon: MessageSquare, animation: RoutingAnimation, title: 'Summaries & routing', desc: 'Summarise tickets, classify intents, escalate.' }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Dynamics 365', 'Power BI', 'BigQuery', 'Snowflake',
    'PostgreSQL', 'Google Sheets', 'Slack', 'Twilio', 'WhatsApp', 'Bright Pattern'
  ];

  const governance = [
    { icon: Shield, title: 'SSO & RBAC', desc: 'Role-based access, SSO providers, SCIM.' },
    { icon: FileText, title: 'Audit & versioning', desc: 'Track changes, lock workflows, export history.' },
    { icon: BarChart, title: 'Run metrics', desc: 'Success rates, latency, and throughput dashboards.' },
    { icon: AlertTriangle, title: 'Alerting', desc: 'Notify on failures, retries, and SLA thresholds.' }
  ];

  const featureHighlights = [
    { icon: Plug, title: 'Customizable blocks', desc: 'Pre-integrated with CRMs, contact centers, and tools with configurable logic for real use cases.' },
    { icon: Eye, title: 'Visual workflow designer', desc: 'Drag-and-drop blocks to create powerful automations without writing code.' },
    { icon: Settings, title: 'Customizable logic', desc: 'Set rules, conditions, and branching paths to tailor workflows to your business.' },
    { icon: Lock, title: 'Enterprise-grade security', desc: 'SSO, role-based access, and detailed audit logs ensure full control and compliance.' },
    { icon: AlertTriangle, title: 'Error handling & observability', desc: 'Standardized error codes, separate block vs API logs, and alerting to Slack/Teams/Email.' },
    { icon: GitBranch, title: 'Workflow versioning', desc: 'Save, rollback, or activate workflow versions with clear history for collaboration.' },
    { icon: Zap, title: 'Large-scale data execution', desc: 'Batch, schedule, or run workflows in parallel — designed for enterprise data volumes.' },
    { icon: Code2, title: 'Workflow-as-API', desc: 'Deploy workflows as APIs to trigger automations directly from your apps.' },
    { icon: BarChart, title: 'Insights & reporting', desc: 'Track execution stats, run times, and performance with intuitive dashboards and logs.' }
  ];

  const developerFeatures = [
    { id: 'sdk', icon: Code2, text: 'Custom nodes SDK' },
    { id: 'cli', icon: Terminal, text: 'CLI & REST API' },
    { id: 'webhooks', icon: Webhook, text: 'Webhooks (in/out)' },
    { id: 'import_export', icon: FileJson, text: 'YAML/JSON import/export' },
    { id: 'local_dev', icon: Layers, text: 'Local dev + environments' }
  ];

  return (
    <div className="relative">
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
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .pause-on-hover:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
      <section id="features-hero" className="relative bg-white pt-10 lg:pt-16 pb-2 overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6"
            >
              <Sparkles size={16} className="text-[#32D38A]" />
              <span className="text-sm text-slate-600 font-medium tracking-tight">Technical Deep-Dive</span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
              The Engine of <br />
              <span className="text-[#10B981]">Modern</span> Automation
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-xl mb-10 leading-relaxed">
              Analyze the inner workings of <SlotMachine words={['Gapflow', 'Agents', 'Workflows', 'Logic']} />. From semantic routing to vector memory, every component is engineered for production-grade scale.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-black transition-all shadow-xl shadow-slate-900/20">
                Explore The Core
              </button>
              <button className="px-8 py-4 bg-white text-slate-600 font-bold border border-slate-200 rounded-full hover:border-[#10B981] transition-all">
                Read Spec Sheet
              </button>
            </div>
          </div>

          <div className="relative">
            <XRayEngine />
          </div>
        </div>
      </section>

      {/* Autonomous Command Center Injection */}
      <section id="command-center-wrapper" className="relative bg-white">
        <CommandCenter />
      </section>

      {/* Logic Trace Feature Map */}
      <section id="feature-highlights" className="relative bg-white py-8 lg:py-12 overflow-hidden">
        <LogicTrace activeNode={hoveredNode} />
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Functional Logic Architecture</h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Our features aren't just tools—they are interconnected nodes in a high-performance automation ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {featureHighlights.slice(0, 6).map((feature, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredNode(i)}
                onMouseLeave={() => setHoveredNode(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 hover:border-[#10B981]/30 hover:shadow-2xl hover:shadow-[#10B981]/10 transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute ${i % 3 === 0 ? '-right-2' : i % 3 === 2 ? '-left-2' : 'left-1/2 -translate-x-1/2 -bottom-2'} top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-[#10B981] shadow-lg scale-0 group-hover:scale-125 transition-transform duration-300 z-20`} />
                <div className="relative z-10 text-center lg:text-left">
                  <div className="mx-auto lg:mx-0 flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-50 mb-8 group-hover:bg-[#10B981] transition-colors duration-500 shadow-sm">
                    <feature.icon size={32} className="text-[#10B981] group-hover:text-slate-900 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="visual-builder" className="relative bg-white py-10 lg:py-12">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">Visual Flow Builder</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualBuilderFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileHover="hover"
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      {feature.animation ? (
                        <feature.animation />
                      ) : (
                        <feature.icon size={24} className="text-slate-900" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-white border border-slate-200 overflow-hidden cursor-pointer hover:border-[#10B981]/50 transition-all duration-300" onClick={() => setLightboxOpen(true)}>
            <img
              src="/features/flow_builder_ui_visualization.jpg"
              alt="Flow builder UI visualization showing the visual workflow designer interface"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="ai-actions" className="relative bg-white py-10 lg:py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">AI‑Native Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiActions.map((feature, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileHover="hover"
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      {feature.animation ? (
                        <feature.animation />
                      ) : (
                        <feature.icon size={24} className="text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations-deep" className="relative bg-white py-10 lg:py-12">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(50,211,138,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-6">Integrations & Connectors</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Native connectors for <SlotMachine words={['Salesforce', 'Slack', 'Twilio', 'HubSpot', 'BigQuery']} />, communications, data stores, and developer tools.
          </p>
          <div className="relative overflow-hidden py-4 -mx-6 pause-on-hover px-6">
            {/* Top Row: Moving Left */}
            <div className="flex mb-8 overflow-hidden">
              <div className="flex gap-6 whitespace-nowrap marquee-content animate-marquee-left">
                {[...integrations, ...integrations].map((logo, i) => (
                  <div key={`left-${i}`} className="bg-white border border-slate-100 rounded-2xl px-10 py-6 flex items-center justify-center text-slate-800 font-bold text-sm shadow-sm hover:border-[#10B981]/30 transition-all cursor-pointer">
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Moving Right */}
            <div className="flex overflow-hidden">
              <div className="flex gap-6 whitespace-nowrap marquee-content animate-marquee-right">
                {[...integrations, ...integrations].map((_, i) => (
                  <div key={`right-${i}`} className="bg-white border border-slate-100 rounded-2xl px-10 py-6 flex items-center justify-center text-slate-800 font-bold text-sm shadow-sm hover:border-[#10B981]/30 transition-all cursor-pointer">
                    {[...integrations].reverse()[i % integrations.length]}
                  </div>
                ))}
              </div>
            </div>

            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
          <div className="text-center mt-12">
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300">
              See all connectors →
            </button>
          </div>
        </div>
      </section>

      <section id="governance" className="relative bg-white py-10 lg:py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">Governance & Observability</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governance.map((feature, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={24} className="text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="developers" className="relative bg-white py-10 lg:py-12">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Built for Developers</h2>
              <ul className="space-y-2 mb-12">
                {developerFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    onMouseEnter={() => setActiveDevFeature(feature.id)}
                    className="group relative flex items-center gap-4 p-4 rounded-xl cursor-pointer"
                  >
                    {activeDevFeature === feature.id && (
                      <motion.div
                        layoutId="activeDevHighlight"
                        className="absolute inset-0 bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl z-0"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <div className={`relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 transition-colors duration-300 ${activeDevFeature === feature.id ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                      <feature.icon size={20} />
                    </div>
                    <span className={`relative z-10 text-lg font-medium transition-colors duration-300 ${activeDevFeature === feature.id ? 'text-slate-900' : 'text-slate-600'
                      }`}>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-[#10B981] hover:scale-105 hover:shadow-xl hover:shadow-[#10B981]/20 active:scale-95 transition-all duration-300 group">
                Open the API docs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              <div className="relative">
                <DevConsole activeId={activeDevFeature} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features-final-cta" className="relative bg-white py-16 lg:py-24">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Ship your first automation in minutes</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Get Started</span>
              <Rocket size={20} />
            </button>
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300 px-8 py-4">
              Explore Templates →
            </button>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/features/flow_builder_ui_visualization.jpg"
          alt="Flow builder UI visualization"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
