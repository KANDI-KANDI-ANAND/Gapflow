import { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Search, Users, BookOpen, BarChart3, DollarSign, MapPin,
  Play, CheckCircle2, Target, ShieldAlert, Zap, Calendar,
  MessageSquare, AlertTriangle, Loader2
} from 'lucide-react';

const demos = [
  {
    id: 'news', icon: <Search size={14} />, label: 'AI NEWS AGENT TRACKER',
    steps: [
      { title: "Source Aggregation", description: "Monitoring 50+ tech publications." },
      { title: "Sentiment Analysis", description: "Evaluating market impact." },
      { title: "Knowledge Update", description: "Indexing into vector DB." }
    ]
  },
  {
    id: 'prospecting', icon: <Users size={14} />, label: 'PROSPECTING AND OUTREACH',
    steps: [
      { title: "Lead Discovery", description: "Scanning LinkedIn profiles." },
      { title: "Context Enrichment", description: "Gathering company news." },
      { title: "Personalized Draft", description: "Generating outreach." }
    ]
  },
  {
    id: 'book', icon: <BookOpen size={14} />, label: 'BOOK SEARCH AND FORECASTING',
    steps: [
      { title: "Library Indexing", description: "Scanning global databases." },
      { title: "Demand Analysis", description: "Cross-referencing social buzz." },
      { title: "Inventory Prediction", description: "Calculating stock levels." }
    ]
  },
  {
    id: 'competitive', icon: <BarChart3 size={14} />, label: 'COMPETITIVE ANALYSIS',
    steps: [
      { title: "Feature Extraction", description: "Parsing changelogs." },
      { title: "Gap Assessment", description: "Identifying missing capabilities." },
      { title: "Strategic Roadmap", description: "Prioritizing development." }
    ]
  },
  {
    id: 'financial', icon: <DollarSign size={14} />, label: 'FINANCIAL NEWS SCRAPER',
    steps: [
      { title: "SEC Monitoring", description: "Real-time filing alerts." },
      { title: "Metric Extraction", description: "Pulling EPS and revenue." },
      { title: "Alert Dispatch", description: "Notifying analysts." }
    ]
  },
  {
    id: 'startup-finder', icon: <MapPin size={14} />, label: 'STARTUP FINDER IN SYDNEY',
    steps: [
      { title: "Ecosystem Crawling", description: "Scanning incubators." },
      { title: "Stage Verification", description: "Classifying startups." },
      { title: "Relationship Mapping", description: "Identifying founders." }
    ]
  },
  {
    id: 'lead-scoring', icon: <Target size={14} />, label: 'AI LEAD SCORING & ROUTING',
    steps: [
      { title: "Behavioral Analysis", description: "Tracking engagement." },
      { title: "Propensity Scoring", description: "Predicting conversion." },
      { title: "Optimal Routing", description: "Assigning leads." }
    ]
  },
  {
    id: 'sla', icon: <ShieldAlert size={14} />, label: 'SLA BREACH PREVENTION',
    steps: [
      { title: "Ticket Monitoring", description: "Tracking response times." },
      { title: "Escalation Logic", description: "Identifying breaches." },
      { title: "Resource Reallocation", description: "Auto-assigning experts." }
    ]
  },
  {
    id: 'data-orch', icon: <Zap size={14} />, label: 'REAL-TIME DATA ORCHESTRATION',
    steps: [
      { title: "Event Detection", description: "Capturing user actions." },
      { title: "Stream Processing", description: "Enriching events." },
      { title: "Action Execution", description: "Triggering webhooks." }
    ]
  },
  {
    id: 'daily-digest', icon: <Calendar size={14} />, label: 'AUTOMATED DAILY DIGESTS',
    steps: [
      { title: "Activity Collection", description: "Pulling metrics." },
      { title: "Summarization", description: "Generating summaries." },
      { title: "Scheduled Delivery", description: "Dispatching reports." }
    ]
  },
  {
    id: 'support-sum', icon: <MessageSquare size={14} />, label: 'AI SUPPORT SUMMARIES',
    steps: [
      { title: "Thread Analysis", description: "Reading conversations." },
      { title: "Issue Clustering", description: "Identifying root causes." },
      { title: "Product Feedback", description: "Synthesizing requests." }
    ]
  },
  {
    id: 'incident', icon: <AlertTriangle size={14} />, label: 'INCIDENT ROUTING & RESPONSE',
    steps: [
      { title: "Anomaly Detection", description: "Monitoring logs." },
      { title: "Severity Leveling", description: "Categorizing impact." },
      { title: "On-Call Activation", description: "Paging engineers." }
    ]
  }
];

interface DemoCardProps {
  demo: { id: string; icon: any; label: string };
  activeTab: string;
  onSelect: (id: string) => void;
  index: number;
  scrollProgress: any;
}

function DemoCard({ demo, activeTab, onSelect, index, scrollProgress }: DemoCardProps) {

  const yTranslate = useTransform(scrollProgress, [0, 1], [0, -240]);
  const rowIndex = Math.floor(index / 2);

  const opacity = useTransform(yTranslate, (y) => {
    const cardTop = rowIndex * 80 + y;
    const cardBottom = cardTop + 72;
    return (cardTop >= -1 && cardBottom <= 241) ? 1 : 0;
  });

  return (
    <motion.button
      onClick={() => onSelect(demo.id)}
      style={{ opacity }}
      className={`flex items-center gap-3 px-5 py-3 h-[72px] rounded-xl border-2 transition-all duration-300 text-left relative shadow-sm ${activeTab === demo.id
        ? 'bg-slate-900 border-slate-900 text-white shadow-xl z-10'
        : 'bg-white border-slate-200 text-slate-500 hover:border-[#10B981]/30 hover:bg-slate-50'
        }`}
    >
      <span className={activeTab === demo.id ? 'text-[#10B981]' : 'text-slate-400'}>
        {demo.icon}
      </span>
      <span className="text-[9px] font-black uppercase tracking-widest leading-tight">
        {demo.label}
      </span>
    </motion.button>
  );
}

export default function AgentDemo() {
  const [activeTab, setActiveTab] = useState('startup-finder');
  const [isRunning, setIsRunning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const currentDemo = useMemo(() => demos.find(d => d.id === activeTab) || demos[0], [activeTab]);

  const handleRunDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <section ref={sectionRef} className="relative h-[90vh] bg-white">
      <div className="sticky top-0 h-screen flex items-start pt-0 overflow-hidden">
        <div className="container-standard w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="pt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[10px] text-[#10B981] font-bold tracking-widest uppercase">Autonomous Core</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-5">
                Watch <span className="text-[#10B981]">AI</span> in Action.<br />
                <span className="text-slate-300">Total Logic Autonomy.</span>
              </h2>

              <p className="text-base text-slate-500 font-bold max-w-xl mb-6 leading-relaxed">
                True agent autonomy at scale. See how Gapflow agents process real-world tasks through native reasoning and execution.
              </p>

              <div className="relative h-[240px] w-full mb-6 overflow-hidden">
                <motion.div
                  style={{ y: useTransform(smoothProgress, [0, 1], [0, -240]) }}
                  className="grid grid-cols-2 gap-2"
                >
                  {demos.map((demo, i) => (
                    <DemoCard
                      key={demo.id}
                      demo={demo}
                      activeTab={activeTab}
                      onSelect={setActiveTab}
                      index={i}
                      scrollProgress={smoothProgress}
                    />
                  ))}
                </motion.div>
              </div>

              <button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#10B981] transition-all duration-500 shadow-xl disabled:opacity-50"
              >
                {isRunning ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Play size={16} fill="white" />
                )}
                {isRunning ? 'Executing Logic...' : 'Run Demo'}
              </button>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 lg:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] relative z-10"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-emerald-500 animate-pulse' : 'bg-slate-200'}`} />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        {isRunning ? 'System Active' : 'Standby'}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[9px] font-black text-[#10B981] uppercase tracking-[0.2em]">
                      Live Trace
                    </div>
                  </div>

                  <div className="space-y-10 relative">
                    <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-50" />

                    {currentDemo.steps.map((step, i) => (
                      <div key={i} className="flex gap-6 relative z-10">
                        <div className={`w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 ${isRunning ? 'border-[#10B981] scale-110 shadow-emerald-50' : 'border-slate-100'
                          }`}>
                          {isRunning ? (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.5 }}>
                              <CheckCircle2 size={20} className="text-[#10B981]" />
                            </motion.div>
                          ) : (
                            <span className="text-slate-300 text-sm font-black">{i + 1}</span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-slate-900 mb-1">{step.title}</h4>
                          <p className="text-xs font-bold text-slate-400 leading-relaxed max-w-xs">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-6 border-t border-slate-50 flex items-center gap-3">
                    <CheckCircle2 size={16} className={isRunning ? "text-[#10B981]" : "text-slate-200"} />
                    <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isRunning ? "text-[#10B981]" : "text-slate-300"
                      }`}>
                      Logic Path Verified
                    </span>
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
