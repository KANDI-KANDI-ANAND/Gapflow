import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Play, Database, BrainCircuit, Activity, FileCheck } from 'lucide-react';

const TASKS = [
    { id: '1', title: 'Automate Customer Support', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: '2', title: 'Analyze Sales Data', icon: <Database className="w-5 h-5" /> },
    { id: '3', title: 'Generate Market Report', icon: <FileCheck className="w-5 h-5" /> }
];

const AGENT_STEPS = [
    { id: 'decides', label: 'Agent Decides', description: 'Interpreting request & planning steps' },
    { id: 'validates', label: 'Validates', description: 'Checking guardrails & data access' },
    { id: 'executes', label: 'Executes', description: 'Processing task autonomously' }
];

export default function AgentDemo() {
    const [activeTask, setActiveTask] = useState(TASKS[0]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentStep((prev) => {
                    if (prev >= AGENT_STEPS.length - 1) {
                        setIsPlaying(false);
                        return 2;
                    }
                    return prev + 1;
                });
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleTaskClick = (task: typeof TASKS[0]) => {
        setActiveTask(task);
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const startDemo = () => {
        setCurrentStep(0);
        setIsPlaying(true);
    };

    return (
        <section className="pb-8 pt-10 lg:pt-12 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-300">AI</span> in Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Experience true agent autonomy. See how Gapflow agents process real-world tasks through reasoning, validation, and execution.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel: Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/10 rounded-full blur-[40px] -z-10" />
                        <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                            <Activity className="text-[#10B981]" /> Agent Playground
                        </h3>

                        <div className="space-y-4 mb-8">
                            {TASKS.map((task) => (
                                <button
                                    key={task.id}
                                    onClick={() => handleTaskClick(task)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${activeTask.id === task.id
                                        ? 'bg-[#10B981]/10 border-[#10B981]/50 text-slate-900 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                                        : 'bg-slate-100 border-transparent text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeTask.id === task.id ? 'bg-[#10B981]/20' : 'bg-slate-200'}`}>
                                        {task.icon}
                                    </div>
                                    <span className="font-medium text-lg">{task.title}</span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={startDemo}
                            disabled={isPlaying}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isPlaying
                                ? 'bg-[#10B981]/20 text-[#10B981] cursor-not-allowed border border-[#10B981]/30'
                                : 'bg-[#10B981] text-[#0A0B14] hover:bg-[#0ea5e9] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1'
                                }`}
                        >
                            {isPlaying ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Agent Processing...
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5" /> Execute Workflow
                                </>
                            )}
                        </button>
                    </motion.div>

                    {/* Right Panel: Agent Execution Trace */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 rounded-3xl p-8 font-mono relative"
                    >
                        <div className="absolute top-0 right-0 p-4 font-sans text-xs font-semibold tracking-wider text-[#10B981] uppercase bg-[#10B981]/10 rounded-bl-xl rounded-tr-3xl">Live Log</div>

                        <div className="mt-6 space-y-8">
                            {AGENT_STEPS.map((step, index) => {
                                const isActive = currentStep === index;
                                const isPast = currentStep > index || (currentStep === 2 && !isPlaying && activeTask); // Completed state correctly checks running status
                                const opacity = isPast || isActive ? 1 : 0.4;

                                return (
                                    <div key={step.id} className="relative flex gap-6" style={{ opacity }}>
                                        {/* Connecting Line */}
                                        {index < AGENT_STEPS.length - 1 && (
                                            <div className={`absolute left-5 top-12 bottom-[-40px] w-0.5 transition-colors duration-500 ${isPast ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                                        )}

                                        {/* Step Indicator */}
                                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-500 bg-white ${isPast && (!isActive || !isPlaying) ? 'border-[#10B981] text-[#10B981]' : isActive && isPlaying ? 'border-[#eab308] text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 'border-white/20 text-slate-900/50'
                                            }`}>
                                            {isPast && (!isActive || !isPlaying) ? <CheckCircle2 className="w-5 h-5" /> : <span>{index + 1}</span>}

                                            {/* Pulse effect if active */}
                                            {isActive && isPlaying && (
                                                <span className="absolute w-full h-full rounded-full border-2 border-[#eab308] animate-ping opacity-75" />
                                            )}
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-1 pt-1">
                                            <h4 className={`text-xl font-bold mb-2 transition-colors ${isPast && (!isActive || !isPlaying) ? 'text-[#10B981]' : isActive && isPlaying ? 'text-[#eab308]' : 'text-slate-900'
                                                }`}>
                                                {step.label}
                                            </h4>
                                            <p className="text-slate-600 font-sans">
                                                {step.description}
                                            </p>

                                            <AnimatePresence>
                                                {(isActive || isPast) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        className="mt-4 bg-slate-100 rounded-lg p-4 border border-slate-200"
                                                    >
                                                        <div className="flex items-center gap-2 text-sm text-[#10B981] mb-2">
                                                            <ChevronRight className="w-4 h-4" />
                                                            {isActive && isPlaying ? <span className="animate-pulse">Running process...</span> : <span>Process completed</span>}
                                                        </div>
                                                        <p className="text-xs text-slate-900/60 font-sans">
                                                            Target: {activeTask.title}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
