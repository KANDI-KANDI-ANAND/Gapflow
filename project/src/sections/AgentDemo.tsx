import { useState, useEffect } from 'react';
import { CheckCircle2, Play, Database, BrainCircuit, FileCheck } from 'lucide-react';
 
 const TASKS = [
     { 
         id: '1', 
         title: 'Automate Customer Support', 
         icon: <BrainCircuit className="w-5 h-5" />,
         steps: [
             { id: 'reasoning', label: 'Intent Analysis', description: 'Agent classifies ticket as "Billing" and retrieves customer history.' },
             { id: 'validation', label: 'Guardrail Check', description: 'Verifying refund policy constraints and secure PII handling.' },
             { id: 'execution', label: 'Auto-Resolution', description: 'Issuing partial credit and updating Zendesk ticket status.' }
         ]
     },
     { 
         id: '2', 
         title: 'Analyze Sales Data', 
         icon: <Database className="w-5 h-5" />,
         steps: [
             { id: 'reasoning', label: 'Data Mapping', description: 'Agent identifies Q3 sales vectors and isolates outlier regions.' },
             { id: 'validation', label: 'Schema Audit', description: 'Verifying currency conversion rates and cross-referencing CRM totals.' },
             { id: 'execution', label: 'Synthesis', description: 'Generating growth projections and pushing to Snowflake BI layer.' }
         ]
     },
     { 
         id: '3', 
         title: 'Generate Market Report', 
         icon: <FileCheck className="w-5 h-5" />,
         steps: [
             { id: 'reasoning', label: 'Deep Crawl', description: 'Agent scrapes competitor pricing and social sentiment trends.' },
             { id: 'validation', label: 'Source Verification', description: 'Filtering for high-confidence financial signals and removing noise.' },
             { id: 'execution', label: 'Drafting', description: 'Compiling PDF executive summary and dispatching via Slack.' }
         ]
     }
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
                     if (prev >= activeTask.steps.length - 1) {
                         setIsPlaying(false);
                         return activeTask.steps.length - 1;
                     }
                     return prev + 1;
                 });
             }, 2000);
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
 
     return (
         <section id="demo" className="section-padding bg-slate-50/50 overflow-hidden border-y border-slate-100">
             <div className="container-standard">
                 <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
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
                         
                         <p className="text-subcopy mb-10">
                             True agent autonomy at scale. See how Gapflow agents process real-world tasks through native reasoning and execution.
                         </p>
   
                         <div className="space-y-3 mb-10">
                             {TASKS.map((task) => (
                                 <button
                                     key={task.id}
                                     onClick={() => handleTaskClick(task)}
                                     className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${activeTask.id === task.id
                                         ? 'bg-white border-slate-900 text-slate-900 shadow-xl shadow-slate-200/20'
                                         : 'bg-white/50 border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-white'
                                         }`}
                                 >
                                     <div className={`p-2 rounded-lg transition-colors ${activeTask.id === task.id ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>
                                         {task.icon}
                                     </div>
                                     <span className="font-bold text-sm uppercase tracking-widest">{task.title}</span>
                                 </button>
                             ))}
                         </div>
   
                         <button
                             onClick={startDemo}
                             disabled={isPlaying}
                             className={`btn-primary w-full sm:w-auto flex items-center justify-center gap-3 ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
                         >
                             {isPlaying ? (
                                 <>
                                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                     Processing...
                                 </>
                             ) : (
                                 <>
                                     <Play className="w-4 h-4" fill="currentColor" /> Run Demo
                                 </>
                             )}
                         </button>
                     </div>
 
                     {/* Right Panel: Live Trace */}
                     <div className="flex-1 w-full max-w-xl">
                         <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                             <div className="absolute top-8 right-8 text-[10px] font-bold tracking-widest text-[#10B981] uppercase bg-emerald-50/50 border border-emerald-100/50 px-4 py-1.5 rounded-full">Live Trace</div>
                             
                             <div className="mt-10 space-y-10">
                                 {activeTask.steps.map((step, index) => {
                                       const isActive = currentStep === index;
                                       const isPast = currentStep > index || (currentStep === activeTask.steps.length - 1 && !isPlaying);
                                       const opacity = isPast || isActive ? 1 : 0.2;
   
                                       return (
                                           <div key={step.id} className="relative flex gap-6" style={{ opacity }}>
                                               {/* Connecting Line */}
                                               {index < activeTask.steps.length - 1 && (
                                                   <div className={`absolute left-[21px] top-12 bottom-[-40px] w-px transition-colors duration-500 ${isPast ? 'bg-[#10B981]' : 'bg-slate-100'}`} />
                                               )}
   
                                               {/* Step Indicator */}
                                               <div className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                                                   isPast && (!isActive || !isPlaying) 
                                                     ? 'bg-[#10B981] border-[#10B981] text-white' 
                                                     : isActive && isPlaying 
                                                       ? 'border-[#10B981] text-[#10B981] bg-white animate-pulse' 
                                                       : 'border-slate-100 bg-white text-slate-300'
                                                   }`}>
                                                   {isPast && (!isActive || !isPlaying) ? <CheckCircle2 className="w-5 h-5" /> : <span className="font-bold text-xs">{index + 1}</span>}
                                               </div>
   
                                               {/* Step Content */}
                                               <div className="flex-1 pt-1">
                                                   <h4 className={`text-lg font-bold mb-1 transition-colors ${
                                                       isPast && (!isActive || !isPlaying) ? 'text-slate-900' : isActive && isPlaying ? 'text-[#10B981]' : 'text-slate-400'
                                                   }`}>
                                                       {step.label}
                                                   </h4>
                                                   <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                       {step.description}
                                                   </p>
                                               </div>
                                           </div>
                                       );
                                   })}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     );
 }
