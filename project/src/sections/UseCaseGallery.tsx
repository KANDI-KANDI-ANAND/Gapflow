import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeadphonesIcon, DatabaseZap, FileSearch, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const USE_CASES = [
    {
        id: 'support',
        title: 'Customer Support',
        icon: <HeadphonesIcon className="w-5 h-5" />,
        role: 'Autonomous Tier 1 Agent',
        before: {
            tag: 'Before Gapflow',
            title: 'Manual & Reactive',
            desc: 'Average 4-hour response times. Support team burned out repeatedly answering the same underlying questions without automated categorizations.'
        },
        after: {
            tag: 'After Gapflow',
            title: 'Instant & Predictive',
            desc: 'AI instantly resolves 80% of routine tickets, intelligently extracts user sentiment, and routes escalated issues to right human departments.'
        },
        metrics: [
            { label: 'Resolution Time', value: 'Instant', change: '-99%' },
            { label: 'Cost Savings', value: '$12k', change: '/mo' },
            { label: 'Accuracy', value: '98%', change: '+15%' }
        ]
    },
    {
        id: 'data',
        title: 'Data Processing',
        icon: <DatabaseZap className="w-5 h-5" />,
        role: 'Automated Data Pipeline Agent',
        before: {
            tag: 'Before Gapflow',
            title: 'Siloed & Error-Prone',
            desc: 'Data analysts spend 15 hours a week manually extracting, cleaning, and moving CSV files between disconnected CRMs and external directories.'
        },
        after: {
            tag: 'After Gapflow',
            title: 'Seamless Synchronization',
            desc: 'Agents autonomously monitor for new files, parse complex schemas, run normalization rules, and bulk-upsert perfectly clean data to your warehouse.'
        },
        metrics: [
            { label: 'Time Saved', value: '15 hrs', change: '/wk' },
            { label: 'Data Quality', value: '100%', change: 'Error-free' },
            { label: 'Integration', value: 'Unlimited', change: 'Sources' }
        ]
    },
    {
        id: 'research',
        title: 'Market Research',
        icon: <FileSearch className="w-5 h-5" />,
        role: 'Web-Scraping Research Agent',
        before: {
            tag: 'Before Gapflow',
            title: 'Slow & Expensive',
            desc: 'Hiring external firms to compile competitor pricing data, taking weeks per report and costing thousands of dollars for stale insights.'
        },
        after: {
            tag: 'After Gapflow',
            title: 'Real-Time Intelligence',
            desc: 'Agent recursively browses priority domains daily, summarizes changes in positioning, and drops a synthesized multi-page brief into Slack.'
        },
        metrics: [
            { label: 'Report Delivery', value: 'Daily', change: 'vs weekly' },
            { label: 'Cost Reduction', value: '90%', change: 'vs agencies' },
            { label: 'Depth', value: '10x', change: 'More sources' }
        ]
    }
];

export default function UseCaseGallery() {
    const [activeTab, setActiveTab] = useState(USE_CASES[0].id);
    const activeCase = USE_CASES.find(c => c.id === activeTab) || USE_CASES[0];

    return (
        <section className="pt-8 pb-12 lg:py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Real ROI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-300">Measureable Impact.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        See exactly how businesses use Gapflow agents to replace legacy workflows with autonomous execution.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {USE_CASES.map((useCase) => (
                        <button
                            key={useCase.id}
                            onClick={() => setActiveTab(useCase.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === useCase.id
                                ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                : 'bg-white/50 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200'
                                }`}
                        >
                            {useCase.icon} {useCase.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-[80px] pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            {/* Left: Before/After */}
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-slate-900 flex flex-col gap-2">
                                    <span className="text-sm font-semibold tracking-wider text-[#10B981] uppercase">Deployed Agent</span>
                                    {activeCase.role}
                                </h3>

                                <div className="relative">
                                    {/* Connecting line between cards */}
                                    <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-red-500/20 via-white/10 to-[#10B981]/20 hidden md:block" />

                                    {/* Before Component */}
                                    <div className="relative z-10 bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 bg-red-500/20 p-1.5 rounded-full ring-4 ring-white">
                                                <XCircle className="w-5 h-5 text-red-400" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">{activeCase.before.tag}</div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">{activeCase.before.title}</h4>
                                                <p className="text-slate-600/80 leading-relaxed text-sm">{activeCase.before.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* After Component */}
                                    <div className="relative z-10 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 bg-[#10B981]/20 p-1.5 rounded-full ring-4 ring-white">
                                                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest mb-1">{activeCase.after.tag}</div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">{activeCase.after.title}</h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">{activeCase.after.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Metrics */}
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                    {activeCase.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.1 * idx }}
                                            className={`bg-white/50 border border-slate-200 rounded-2xl p-6 text-center hover:bg-white transition-colors ${idx === 2 ? 'sm:col-span-2' : ''}`}
                                        >
                                            <h5 className="text-slate-600 font-medium text-sm mb-3 uppercase tracking-wider">{metric.label}</h5>
                                            <div className="text-4xl font-extrabold text-slate-900 mb-1">{metric.value}</div>
                                            <div className="text-[#10B981] font-semibold flex items-center justify-center gap-1">
                                                <ArrowRight className="w-4 h-4" /> {metric.change}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Decorator Box */}
                                    <div className="sm:col-span-2 bg-gradient-to-r from-[#10B981]/20 to-blue-500/20 border border-slate-200 rounded-2xl p-6 mt-4 flex items-center justify-between">
                                        <div>
                                            <div className="text-slate-900 font-bold text-lg">Ready to see these results?</div>
                                            <div className="text-slate-600 text-sm">Deploy your first agent in minutes.</div>
                                        </div>
                                        <button className="bg-white text-[#0A0B14] px-4 py-2 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                            Start Free
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
