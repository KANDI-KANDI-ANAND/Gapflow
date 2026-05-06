import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Network,
    Database,
    BrainCircuit,
    Activity,
    Zap,
    CheckCircle2,
    Play,
    FileCheck
} from 'lucide-react';

const TASKS = [
    {
        id: '1',
        title: 'Automate Customer Support',
        icon: <BrainCircuit className="w-5 h-5" />,
        steps: [
            { id: 'router', label: 'Intent Analysis', description: 'Agent classifies ticket as "Billing" and retrieves customer history.', node: 'router' },
            { id: 'analyst', label: 'Guardrail Check', description: 'Verifying refund policy constraints and secure PII handling.', node: 'analyst' },
            { id: 'execution', label: 'Auto-Resolution', description: 'Issuing partial credit and updating Zendesk ticket status.', node: 'execution' }
        ],
        consoleSteps: [
            '> [Router] Ingesting webhook... routing to compute node.',
            '> [Analyst] Payload sanitized... mapping knowledge requirements.',
            '> [Memory] Vector SIM 0.94... context retrieved.',
            '> [Analyst] Logic synthesized... preparing final command.',
            '> [Exec] SUCCESS: response_33X dispatched.'
        ]
    },
    {
        id: '2',
        title: 'Analyze Sales Data',
        icon: <Database className="w-5 h-5" />,
        steps: [
            { id: 'router', label: 'Data Mapping', description: 'Agent identifies Q3 sales vectors and isolates outlier regions.', node: 'router' },
            { id: 'analyst', label: 'Schema Audit', description: 'Verifying currency conversion rates and cross-referencing CRM totals.', node: 'analyst' },
            { id: 'execution', label: 'Synthesis', description: 'Generating growth projections and pushing to Snowflake BI layer.', node: 'execution' }
        ],
        consoleSteps: [
            '> [Router] Accessing Snowflake connection... authorized.',
            '> [Analyst] Scanning tables... mapping Q3 relational schemas.',
            '> [Memory] Retrieving historical fiscal data... SIM 0.89.',
            '> [Analyst] Running regression model... outliers identified.',
            '> [Exec] PUSHED: Analytics report sync completed.'
        ]
    },
    {
        id: '3',
        title: 'Generate Market Report',
        icon: <FileCheck className="w-5 h-5" />,
        steps: [
            { id: 'router', label: 'Deep Crawl', description: 'Agent scrapes competitor pricing and social sentiment trends.', node: 'router' },
            { id: 'analyst', label: 'Source Verification', description: 'Filtering for high-confidence financial signals and removing noise.', node: 'analyst' },
            { id: 'execution', label: 'Drafting', description: 'Compiling PDF executive summary and dispatching via Slack.', node: 'execution' }
        ],
        consoleSteps: [
            '> [Router] Initiating web crawler... searching sentiment vectors.',
            '> [Analyst] Data cleaning... filtering 4.2k noise signals.',
            '> [Memory] Querying competitive landscape archives... done.',
            '> [Analyst] Summarizing findings... logic layer generated.',
            '> [Exec] COMPILED: Report.pdf sent to #market-updates.'
        ]
    }
];

export default function OrchestrationEngine() {
    const [activeTask, setActiveTask] = useState(TASKS[0]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentStep((prev) => {
                    if (prev >= activeTask.consoleSteps.length - 1) {
                        setIsPlaying(false);
                        return activeTask.consoleSteps.length - 1;
                    }
                    return prev + 1;
                });
            }, 1500);
        }
        return () => clearInterval(interval);
    }, [isPlaying, activeTask]);

    const handleTaskClick = (task: typeof TASKS[0]) => {
        setActiveTask(task);
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const startDemo = () => {
        setCurrentStep(0);
        setIsPlaying(true);
    };

    const isNodeActive = (node: string) => {
        if (!isPlaying && currentStep === 0) return false;
        if (node === 'router') return currentStep === 0;
        if (node === 'analyst') return currentStep === 1 || currentStep === 3;
        if (node === 'memory') return currentStep === 2;
        if (node === 'execution') return currentStep === 4;
        return false;
    };

    // Maps console step (0-4) to trace step (0-2)
    const getTraceActiveIndex = () => {
        if (currentStep <= 0) return 0;
        if (currentStep <= 3) return 1;
        return 2;
    };

    const traceActiveIndex = getTraceActiveIndex();

    return (
        <section id="orchestration" className="section-padding bg-white relative overflow-hidden">
            <div className="container-standard">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-8">
                        <Network size={14} className="text-[#10B981]" />
                        <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Multi-Agent Orchestration</span>
                    </div>
                    <h2 className="heading-section mb-8">
                        Isolated Intelligence.<br />
                        <span className="text-slate-300">Seamless Context.</span>
                    </h2>
                    <p className="text-subcopy max-w-3xl mx-auto">
                        Don't rely on a single bottleneck. Gapflow provisions isolated, specialized AI agents that seamlessly exchange context in real-time to solve complex operations.
                    </p>
                </div>

                {/* Task Switcher Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {TASKS.map((task) => (
                        <button
                            key={task.id}
                            onClick={() => handleTaskClick(task)}
                            className={`px-6 py-3 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${activeTask.id === task.id
                                ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200'
                                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {task.icon}
                            {task.title}
                        </button>
                    ))}
                    <button
                        onClick={startDemo}
                        disabled={isPlaying}
                        className={`px-8 py-3 rounded-full bg-[#10B981] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:bg-[#0da070] disabled:opacity-50 disabled:cursor-not-allowed ml-4`}
                    >
                        {isPlaying ? <Activity size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}
                        {isPlaying ? 'Running...' : 'Run Demo'}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left: Swarm Visual */}
                    <div className="lg:col-span-6 bg-slate-50 border border-slate-100 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden flex items-center justify-center min-h-[500px]">
                        <div className="relative w-full max-w-sm aspect-square scale-90 sm:scale-100">
                            {/* SVG Connections */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                <path d="M 100 200 L 200 100" fill="none" stroke={isNodeActive('router') || isNodeActive('analyst') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('router') ? '0' : '4 4'} className="transition-all duration-500" />
                                <path d="M 200 100 L 200 300" fill="none" stroke={isNodeActive('analyst') || isNodeActive('memory') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('analyst') && currentStep === 1 ? '0' : '4 4'} className="transition-all duration-500" />
                                <path d="M 200 300 L 200 100" fill="none" stroke={isNodeActive('memory') || isNodeActive('analyst') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('memory') ? '0' : '4 4'} className="transition-all duration-500" />
                                <path d="M 200 100 L 300 200" fill="none" stroke={isNodeActive('analyst') || isNodeActive('execution') ? '#10B981' : '#e2e8f0'} strokeWidth="2" strokeDasharray={isNodeActive('analyst') && currentStep === 3 ? '0' : '4 4'} className="transition-all duration-500" />
                            </svg>

                            {/* Nodes */}
                            <div className={`absolute top-1/2 left-[0%] -translate-y-1/2 w-16 h-16 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('router') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                <BrainCircuit size={24} className={isNodeActive('router') ? 'text-slate-900' : 'text-slate-300'} />
                                <span className="absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest text-slate-400">Router</span>
                            </div>

                            <div className={`absolute top-[0%] left-1/2 -translate-x-1/2 w-16 h-16 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('analyst') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                <Activity size={24} className={isNodeActive('analyst') ? 'text-slate-900' : 'text-slate-300'} />
                                <span className="absolute -top-6 text-[8px] font-bold uppercase tracking-widest text-slate-400">Analyst</span>
                            </div>

                            <div className={`absolute top-[92%] left-1/2 -translate-x-1/2 w-16 h-16 bg-white border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('memory') ? 'border-slate-900 shadow-2xl scale-110' : 'border-slate-100'}`}>
                                <Database size={24} className={isNodeActive('memory') ? 'text-slate-900' : 'text-slate-300'} />
                                <span className="absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest text-slate-400">Memory</span>
                            </div>

                            <div className={`absolute top-1/2 right-[0%] -translate-y-1/2 w-20 h-20 bg-slate-900 border rounded-2xl flex items-center justify-center transition-all duration-500 ${isNodeActive('execution') ? 'shadow-2xl scale-110' : 'border-slate-800'}`}>
                                <Zap size={28} className={isNodeActive('execution') ? 'text-[#10B981]' : 'text-slate-600'} />
                                <span className="absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest text-slate-400">Execution</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Live Trace & Console */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Live Trace */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-slate-200/50">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-bold tracking-widest text-[#10B981] uppercase bg-emerald-50 px-3 py-1 rounded-full">Logic Trace</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stage {traceActiveIndex + 1} / 3</span>
                            </div>

                            <div className="space-y-8">
                                {activeTask.steps.map((step, index) => {
                                    const isActive = traceActiveIndex === index;
                                    const isPast = traceActiveIndex > index || (currentStep === 4 && !isPlaying);
                                    const opacity = isPast || isActive ? 1 : 0.2;

                                    return (
                                        <div key={step.id} className="relative flex gap-5" style={{ opacity }}>
                                            {/* Line */}
                                            {index < activeTask.steps.length - 1 && (
                                                <div className={`absolute left-[17px] top-10 bottom-[-32px] w-px transition-colors duration-500 ${isPast ? 'bg-[#10B981]' : 'bg-slate-100'}`} />
                                            )}

                                            <div className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isPast ? 'bg-[#10B981] border-[#10B981] text-white' : isActive ? 'border-[#10B981] text-[#10B981] bg-white' : 'border-slate-100 bg-white text-slate-300'
                                                }`}>
                                                {isPast ? <CheckCircle2 size={16} /> : <span className="font-bold text-[10px]">{index + 1}</span>}
                                            </div>

                                            <div className="flex-1">
                                                <h4 className={`text-sm font-bold mb-0.5 transition-colors ${isPast ? 'text-slate-900' : isActive ? 'text-[#10B981]' : 'text-slate-400'}`}>
                                                    {step.label}
                                                </h4>
                                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* System Console */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Agent System Console</p>
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]/20" />
                                </div>
                            </div>
                            <div className="space-y-2.5 font-mono text-[10px] leading-relaxed">
                                {activeTask.consoleSteps.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={false}
                                        animate={{ opacity: i <= currentStep ? 1 : 0.1, x: i === currentStep ? 5 : 0 }}
                                        className={`transition-colors duration-500 ${i <= currentStep ? 'text-[#10B981]' : 'text-slate-700'}`}
                                    >
                                        {line}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
