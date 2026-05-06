import { useState } from 'react';
import {
    Search,
    Users,
    Book,
    BarChart,
    DollarSign,
    MapPin,
    Play,
    CheckCircle2
} from 'lucide-react';

const TASKS = [
    {
        id: '1',
        title: 'AI News Agent Tracker',
        icon: <Search className="w-4 h-4" />,
        steps: [
            { id: '1-1', label: 'News Source Discovery', description: 'Agent identifies and authenticates over 50+ global AI news feeds.' },
            { id: '1-2', label: 'Semantic Filtering', description: 'Removing noise and classifying updates by technical impact score.' },
            { id: '1-3', label: 'Newsletter Synthesis', description: 'Generating concise summaries and auto-publishing to internal Slack.' }
        ]
    },
    {
        id: '2',
        title: 'Prospecting and Outreach',
        icon: <Users className="w-4 h-4" />,
        steps: [
            { id: '2-1', label: 'Lead Intelligence', description: 'Extracting intent signals from LinkedIn and company quarterly reports.' },
            { id: '2-2', label: 'Personalization Engine', description: 'Crafting unique value propositions based on prospect tech stack.' },
            { id: '2-3', label: 'Multi-Channel Sync', description: 'Scheduling sequences across Email and CRM with automated follow-ups.' }
        ]
    },
    {
        id: '3',
        title: 'Book Search and Forecasting',
        icon: <Book className="w-4 h-4" />,
        steps: [
            { id: '3-1', label: 'Trend Analysis', description: 'Monitoring global bestseller lists and library loan velocity data.' },
            { id: '3-2', label: 'Demand Modeling', description: 'Predicting regional print runs using historical seasonal regression.' },
            { id: '3-3', label: 'Inventory Logic', description: 'Auto-adjusting supply chain triggers to prevent out-of-stock events.' }
        ]
    },
    {
        id: '4',
        title: 'Competitive Analysis',
        icon: <BarChart className="w-4 h-4" />,
        steps: [
            { id: '4-1', label: 'Publisher Auditing', description: 'Tracking competitor release schedules and marketing spend signals.' },
            { id: '4-2', label: 'Pricing Intelligence', description: 'Real-time monitoring of dynamic discount strategies across retailers.' },
            { id: '4-3', label: 'Gap Identification', description: 'Locating underserved genres and high-converting niche categories.' }
        ]
    },
    {
        id: '5',
        title: 'Financial News Scrapper',
        icon: <DollarSign className="w-4 h-4" />,
        steps: [
            { id: '5-1', label: 'Ticker Monitoring', description: 'Connecting to real-time financial wires and institutional feeds.' },
            { id: '5-2', label: 'Sentiment Scoring', description: 'Applying LLM-based sentiment analysis to market volatility signals.' },
            { id: '5-3', label: 'Alert Dispatch', description: 'Triggering high-priority trade signals to execution dashboards.' }
        ]
    },
    {
        id: '6',
        title: 'Startup Finder in Sydney',
        icon: <MapPin className="w-4 h-4" />,
        steps: [
            { id: '6-1', label: 'Ecosystem Crawling', description: 'Scanning Sydney-based incubators, venture labs, and domain reg.' },
            { id: '6-2', label: 'Stage Verification', description: 'Classifying startups by funding round, headcount, and tech maturity.' },
            { id: '6-3', label: 'Relationship Mapping', description: 'Identifying key founders and cross-referencing industry connections.' }
        ]
    }
];

export default function AgentDemo() {
    const [activeTask, setActiveTask] = useState(TASKS[0]);

    const handleTaskClick = (task: typeof TASKS[0]) => {
        setActiveTask(task);
    };

    const startDemo = () => {
        // This URL should be updated to the actual demo website
        window.open('https://app.gapflow.ai/', '_blank');
    };

    return (
        <section id="demo" className="section-padding bg-slate-50/50 overflow-hidden border-y border-slate-100">
            <div className="container-standard">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Panel: Content */}
                    <div className="flex-1 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Autonomous Core</span>
                        </div>

                        <h2 className="heading-section mb-6">
                            Watch <span className="text-[#10B981]">AI</span> in Action.<br />
                            <span className="text-slate-300">Total Logic Autonomy.</span>
                        </h2>

                        <p className="text-subcopy mb-8">
                            True agent autonomy at scale. See how Gapflow agents process real-world tasks through native reasoning and execution.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {TASKS.map((task) => (
                                <button
                                    key={task.id}
                                    onClick={() => handleTaskClick(task)}
                                    className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${activeTask.id === task.id
                                        ? 'bg-white border-slate-900 text-slate-900 shadow-lg shadow-slate-200/20 scale-[1.02]'
                                        : 'bg-white/50 border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-white'
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-lg transition-colors ${activeTask.id === task.id ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>
                                        {task.icon}
                                    </div>
                                    <span className="font-bold text-[11px] uppercase tracking-wider truncate">{task.title}</span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={startDemo}
                            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 !bg-slate-900 hover:!bg-black"
                        >
                            <Play className="w-4 h-4" fill="currentColor" /> Run Demo
                        </button>
                    </div>

                    {/* Right Panel: Live Trace (Static) */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                            <div className="absolute top-8 right-8 text-[10px] font-bold tracking-widest text-[#10B981] uppercase bg-emerald-50/50 border border-emerald-100/50 px-4 py-1.5 rounded-full">Live Trace</div>

                            <div className="mt-8 space-y-8">
                                {activeTask.steps.map((step, index) => (
                                    <div key={step.id} className="relative flex gap-6">
                                        {/* Connecting Line */}
                                        {index < activeTask.steps.length - 1 && (
                                            <div className="absolute left-[21px] top-12 bottom-[-32px] w-px bg-slate-100" />
                                        )}

                                        {/* Step Indicator */}
                                        <div className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center border-2 border-[#10B981] bg-white text-[#10B981]">
                                            <span className="font-bold text-xs">{index + 1}</span>
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-1 pt-1">
                                            <h4 className="text-lg font-bold mb-1 text-slate-900">
                                                {step.label}
                                            </h4>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-[#10B981]">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Logic Path Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
