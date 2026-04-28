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
             desc: 'Average 4-hour response times. Support team burned out answering repetitive queries.'
         },
         after: {
             tag: 'After Gapflow',
             title: 'Instant & Predictive',
             desc: 'AI instantly resolves 80% of routine tickets, extracts sentiment, and routes escalated issues.'
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
             desc: 'Analysts spend 15 hours a week manually cleaning and moving files between systems.'
         },
         after: {
             tag: 'After Gapflow',
             title: 'Seamless Sync',
             desc: 'Agents autonomously monitor for new files, parse schemas, and run normalization rules instantly.'
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
             desc: 'Hiring external firms to compile competitor data, taking weeks for stale insights.'
         },
         after: {
             tag: 'After Gapflow',
             title: 'Real-Time Intelligence',
             desc: 'Agent recursively browses priority domains daily and summarizes positioning into Slack.'
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
         <section id="use-cases" className="section-padding bg-white overflow-hidden">
             <div className="container-standard">
                 <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                         <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Real-World ROI</span>
                     </div>
                     <h2 className="heading-section mb-6">
                         Measurable Impact. <br />
                         <span className="text-slate-300">Infinite Scalability.</span>
                     </h2>
                     <p className="text-subcopy max-w-xl mx-auto">
                         Analyze how enterprises leverage Gapflow agents to replace legacy bottlenecks with autonomous execution paths.
                     </p>
                 </div>
  
                 {/* Tabs */}
                 <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-20">
                     {USE_CASES.map((useCase) => (
                         <button
                             key={useCase.id}
                             onClick={() => setActiveTab(useCase.id)}
                             className={`flex items-center gap-3 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                               activeTab === useCase.id
                                 ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200/50'
                                 : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'
                               }`}
                         >
                             {useCase.icon} {useCase.title}
                         </button>
                     ))}
                 </div>
  
                 {/* Content Area */}
                 <div className="bg-slate-50/50 rounded-[2rem] border border-slate-100 p-8 lg:p-16 relative overflow-hidden">
                     <AnimatePresence mode="wait">
                         <motion.div
                             key={activeTab}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.3 }}
                             className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                         >
                             {/* Left: Transformation */}
                             <div className="space-y-8">
                                 <div>
                                     <h3 className="text-[10px] font-bold tracking-[0.3em] text-[#10B981] uppercase mb-3">Deployed Agent</h3>
                                     <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{activeCase.role}</h4>
                                 </div>
 
                                 <div className="space-y-6">
                                     <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                         <div className="flex items-start gap-4">
                                             <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                                 <XCircle size={14} className="text-red-400" />
                                             </div>
                                             <div>
                                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{activeCase.before.tag}</p>
                                                 <h5 className="text-base font-bold text-slate-900 mb-1">{activeCase.before.title}</h5>
                                                 <p className="text-slate-500 text-sm font-medium leading-relaxed">{activeCase.before.desc}</p>
                                             </div>
                                         </div>
                                     </div>
 
                                     <div className="bg-white border border-[#10B981] rounded-2xl p-6 shadow-xl shadow-emerald-900/5 ring-4 ring-[#10B981]/5">
                                         <div className="flex items-start gap-4">
                                             <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                                 <CheckCircle2 size={14} className="text-[#10B981]" />
                                             </div>
                                             <div>
                                                 <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">{activeCase.after.tag}</p>
                                                 <h5 className="text-base font-bold text-slate-900 mb-1">{activeCase.after.title}</h5>
                                                 <p className="text-slate-600 text-sm font-medium leading-relaxed">{activeCase.after.desc}</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
 
                              {/* Right: Metrics */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                  {activeCase.metrics.map((metric, idx) => (
                                      <div
                                          key={idx}
                                          className={`bg-white border border-slate-100 rounded-[1.5rem] p-8 text-center shadow-sm ${idx === 2 ? 'sm:col-span-2' : ''}`}
                                      >
                                          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{metric.label}</h5>
                                          <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1 tracking-tighter">{metric.value}</div>
                                          <div className="text-[#10B981] font-bold text-xs">
                                              {metric.change}
                                          </div>
                                      </div>
                                  ))}
 
                                  <div className="sm:col-span-2 bg-slate-900 rounded-[1.5rem] p-10 text-center shadow-xl shadow-slate-900/20">
                                      <p className="text-white font-bold text-lg mb-6">Ready to see these results?</p>
                                      <button className="btn-secondary !bg-white !text-slate-900 hover:!bg-[#10B981] hover:!text-white hover:!border-[#10B981] transition-all">
                                          Deploy Now
                                      </button>
                                  </div>
                              </div>
                         </motion.div>
                     </AnimatePresence>
                 </div>
             </div>
         </section>
     );
 }
