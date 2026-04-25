import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle2, Activity, Cpu } from 'lucide-react';
import Button from '../components/Button';

export default function FinalCTA() {
  const [prompt, setPrompt] = useState('');
  const [chatState, setChatState] = useState<'idle' | 'typing' | 'generating' | 'done'>('idle');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    "Build a Zendesk refund agent",
    "Create a lead qualification bot",
    "Monitor AWS logs for anomalies"
  ];

  const handleSend = (text: string) => {
    if (!text) return;
    setPrompt('');
    setChatState('typing');
    setMessages([{ role: 'user', text }]);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'Analyzing intent... mapping endpoints for ' + text.split(' ')[2] + '...' }]);

      setTimeout(() => {
        setChatState('generating');
        setMessages(prev => [...prev, { role: 'ai', text: 'Scaffolding neural pathways and deploying secure agent matrix.' }]);

        setTimeout(() => {
          setChatState('done');
          setMessages(prev => [...prev, { role: 'ai', text: 'Agent deployed successfully. Ready for operations.' }]);
        }, 3000);
      }, 1500);
    }, 800);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="pt-8 pb-20 bg-white relative border-t border-slate-200">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Command Your First Agent</h2>
          <p className="text-xl text-slate-600">Just type what you need. Our AI writes the workflows, connects the APIs, and deploys instantly.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[480px]">

          {/* Left: Chat Interface */}
          <div className="flex-1 flex flex-col border-r border-slate-200 bg-white">
            <div className="p-4 border-b border-slate-200 flex items-center gap-3">
              <Terminal className="text-[#10B981]" size={20} />
              <div className="font-mono text-sm text-slate-500">gapflow-terminal // deploy_agent.sh</div>
            </div>

            <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-6 scroll-smooth">
              <AnimatePresence>
                {chatState === 'idle' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <p className="text-[#32D38A]">&gt; System initialized. Awaiting architectural directives.</p>
                    <p className="text-slate-600">Select a template or type a custom command:</p>
                    <div className="flex flex-col gap-2 mt-4">
                      {samplePrompts.map((p, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(p)}
                          className="text-left px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:text-[#10B981] hover:border-[#10B981] hover:bg-[#10B981]/10 transition-colors w-max"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'text-slate-900' : 'text-[#32D38A]'}`}
                  >
                    <span>{msg.role === 'user' ? '>' : '⚡'}</span>
                    <p>{msg.text}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(prompt)}
                  disabled={chatState !== 'idle'}
                  placeholder={chatState === 'idle' ? "Describe your agent..." : "Deployment in progress..."}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#10B981] disabled:opacity-50"
                />
                <button
                  onClick={() => handleSend(prompt)}
                  disabled={!prompt.trim() || chatState !== 'idle'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#10B981] disabled:opacity-50 hover:bg-[#10B981]/10 rounded-lg transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Visual Processing Diagram */}
          <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center min-h-[300px]">
            {chatState === 'idle' && (
              <div className="text-center opacity-30">
                <Cpu size={64} className="mx-auto text-[#10B981] mb-4" />
                <p className="font-mono text-[#10B981]">AWAITING INPUT</p>
              </div>
            )}

            {(chatState === 'typing' || chatState === 'generating') && (
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Dynamic generation animation */}
                <style>{`
                    @keyframes wireDraw { to { stroke-dashoffset: 0; } }
                    @keyframes pulseNode { 50% { transform: scale(1.2); filter: drop-shadow(0 0 15px rgba(16,185,129,0.8)); } }
                  `}</style>
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-80" preserveAspectRatio="xMidYMid meet">
                  {chatState === 'generating' && (
                    <>
                      <path d="M 50 150 L 150 150 L 200 80 L 300 80" fill="none" stroke="#32D38A" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'wireDraw 2s ease-out forwards' }} />
                      <path d="M 150 150 L 200 220 L 300 220" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'wireDraw 2s ease-out 0.5s forwards' }} />
                      <circle cx="50" cy="150" r="10" fill="#10B981" style={{ animation: 'pulseNode 1s infinite' }} />
                      <circle cx="150" cy="150" r="8" fill="#10B981" style={{ animation: 'pulseNode 1s 0.2s infinite' }} />
                      <circle cx="200" cy="80" r="12" fill="#32D38A" style={{ animation: 'pulseNode 1s 0.4s infinite' }} />
                      <circle cx="200" cy="220" r="12" fill="#059669" style={{ animation: 'pulseNode 1s 0.6s infinite' }} />
                      <circle cx="300" cy="80" r="15" fill="#34D399" style={{ animation: 'pulseNode 1s 0.8s infinite' }} />
                      <circle cx="300" cy="220" r="15" fill="#34D399" style={{ animation: 'pulseNode 1s 1s infinite' }} />

                      <text x="50" y="130" fill="#64748b" fontSize="10" textAnchor="middle" className="font-mono">Trigger</text>
                      <text x="300" y="60" fill="#64748b" fontSize="10" textAnchor="middle" className="font-mono">Action_A</text>
                      <text x="300" y="250" fill="#64748b" fontSize="10" textAnchor="middle" className="font-mono">Action_B</text>
                    </>
                  )}
                  <circle cx="200" cy="150" r="80" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '4s' }} />
                  <circle cx="200" cy="150" r="60" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="10 10" className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '3s', animationDirection: 'reverse' }} />

                  <Activity size={32} className="text-[#10B981] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </svg>
              </div>
            )}

            {chatState === 'done' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="w-20 h-20 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Agent Compiled</h3>
                <p className="text-slate-600 mb-8 max-w-[250px] mx-auto text-sm">Create your free account to access and configure this agent pipeline.</p>
                <Button variant="primary" label="Create Free Account" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
