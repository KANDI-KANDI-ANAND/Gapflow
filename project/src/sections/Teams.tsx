import { Users, GitBranch, MessageSquare } from 'lucide-react';

export default function Teams() {
  const highlights = [
    {
      icon: Users,
      title: 'Roles & permissions',
      desc: 'Granular access control by workspace, project, and workflow level',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: GitBranch,
      title: 'Versioning & locks',
      desc: 'Freeze critical flows, track changes, and enable safe collaborative editing',
      color: 'from-[#059669] to-[#34D399]'
    },
    {
      icon: MessageSquare,
      title: 'Comments & reviews',
      desc: 'Discuss workflow steps, request approvals, and maintain team context',
      color: 'from-[#32D38A] to-[#28B876]'
    }
  ];

  return (
    <section id="teams" className="relative bg-white pt-4 pb-12">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
            <Users size={16} className="text-[#10B981]" />
            <span className="text-sm text-slate-600 font-medium">Collaboration First</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Built for teams that scale
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Enterprise-grade collaboration tools that keep your team aligned and productive
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon size={26} className="text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{highlight.title}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">{highlight.desc}</p>

                <div className="aspect-video rounded-lg bg-white border border-slate-200/50 overflow-hidden relative">
                  {i === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <style>{`
                        @keyframes userPulse {
                          0%, 100% { opacity: 0.6; transform: scale(1); }
                          50% { opacity: 1; transform: scale(1.05); }
                        }
                        @keyframes checkAppear {
                          0% { opacity: 0; transform: scale(0.5); }
                          100% { opacity: 1; transform: scale(1); }
                        }
                        @keyframes permissionFlow {
                          0% { opacity: 0.3; }
                          50% { opacity: 0.8; }
                          100% { opacity: 0.3; }
                        }
                        .user-pulse { animation: userPulse 3s ease-in-out infinite; }
                        .check-appear { animation: checkAppear 0.5s ease-out forwards; }
                        .permission-flow { animation: permissionFlow 2s ease-in-out infinite; }
                      `}</style>
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <radialGradient id="userGlow">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient id="adminGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                          <linearGradient id="editorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#34D399" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                          <linearGradient id="viewerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#32D38A" />
                            <stop offset="100%" stopColor="#28B876" />
                          </linearGradient>
                        </defs>

                        <circle cx="100" cy="35" r="18" fill="url(#userGlow)" className="user-pulse" />
                        <circle cx="100" cy="35" r="12" fill="url(#adminGrad)" stroke="#10B981" strokeWidth="2" />
                        <path d="M100 30 Q100 26 96 26 Q92 26 92 30 L92 33 Q92 34 93 34 L97 34 L97 38 Q97 40 100 40 Q103 40 103 38 L103 34 L107 34 Q108 34 108 33 L108 30 Q108 26 104 26 Q100 26 100 30 M100 43 Q95 43 95 46 L95 48 Q95 49 96 49 L104 49 Q105 49 105 48 L105 46 Q105 43 100 43" fill="#fff" opacity="0.9" />

                        <text x="100" y="60" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="600">Admin</text>

                        <g transform="translate(30, 85)">
                          <circle r="10" fill="url(#editorGrad)" stroke="#34D399" strokeWidth="1.5" className="user-pulse" style={{ animationDelay: '0.5s' }} />
                          <path d="M0 -3 L0 3 M-3 0 L3 0" stroke="#fff" strokeWidth="1.5" />
                          <text y="20" fill="#34D399" fontSize="6" textAnchor="middle" fontWeight="600">Editor</text>
                        </g>

                        <g transform="translate(100, 85)">
                          <circle r="10" fill="url(#editorGrad)" stroke="#34D399" strokeWidth="1.5" className="user-pulse" style={{ animationDelay: '1s' }} />
                          <path d="M0 -3 L0 3 M-3 0 L3 0" stroke="#fff" strokeWidth="1.5" />
                          <text y="20" fill="#34D399" fontSize="6" textAnchor="middle" fontWeight="600">Editor</text>
                        </g>

                        <g transform="translate(170, 85)">
                          <circle r="10" fill="url(#viewerGrad)" stroke="#32D38A" strokeWidth="1.5" className="user-pulse" style={{ animationDelay: '1.5s' }} />
                          <path d="M-3 -1 Q0 -3 3 -1 M-4 1 L-4 3 Q-4 4 -3 4 L3 4 Q4 4 4 3 L4 1" fill="#fff" opacity="0.9" />
                          <text y="20" fill="#32D38A" fontSize="6" textAnchor="middle" fontWeight="600">Viewer</text>
                        </g>

                        <path d="M100 47 L30 75" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" className="permission-flow" />
                        <path d="M100 47 L100 75" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" className="permission-flow" style={{ animationDelay: '0.3s' }} />
                        <path d="M100 47 L170 75" stroke="#32D38A" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" className="permission-flow" style={{ animationDelay: '0.6s' }} />

                        <g transform="translate(145, 25)">
                          <rect x="-15" y="-8" width="30" height="16" rx="3" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="1" />
                          <path d="M-8 0 L-5 3 L-2 -2" stroke="#10B981" strokeWidth="1.5" fill="none" className="check-appear" style={{ animationDelay: '1s' }} />
                          <text x="5" y="3" fill="#10B981" fontSize="5" fontWeight="600">Write</text>
                        </g>

                        <g transform="translate(145, 45)">
                          <rect x="-15" y="-8" width="30" height="16" rx="3" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="1" />
                          <path d="M-8 0 L-5 3 L-2 -2" stroke="#34D399" strokeWidth="1.5" fill="none" className="check-appear" style={{ animationDelay: '1.3s' }} />
                          <text x="5" y="3" fill="#34D399" fontSize="5" fontWeight="600">Read</text>
                        </g>
                      </svg>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <style>{`
                        @keyframes branchGrow {
                          0% { stroke-dashoffset: 100; opacity: 0; }
                          100% { stroke-dashoffset: 0; opacity: 1; }
                        }
                        @keyframes commitPulse {
                          0%, 100% { transform: scale(1); opacity: 0.8; }
                          50% { transform: scale(1.15); opacity: 1; }
                        }
                        @keyframes lockShake {
                          0%, 100% { transform: rotate(0deg); }
                          25% { transform: rotate(-5deg); }
                          75% { transform: rotate(5deg); }
                        }
                        .branch-grow { animation: branchGrow 2s ease-out forwards; }
                        .commit-pulse { animation: commitPulse 2s ease-in-out infinite; }
                        .lock-shake { animation: lockShake 0.5s ease-in-out; }
                      `}</style>
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id="versionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#059669" />
                            <stop offset="100%" stopColor="#34D399" />
                          </linearGradient>
                          <radialGradient id="commitGlow">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </radialGradient>
                        </defs>

                        <line x1="30" y1="30" x2="170" y2="30" stroke="url(#versionGrad)" strokeWidth="2" />

                        <g transform="translate(30, 30)">
                          <circle r="8" fill="url(#commitGlow)" />
                          <circle r="5" fill="#059669" stroke="#10B981" strokeWidth="1.5" className="commit-pulse" />
                          <text y="20" fill="#059669" fontSize="6" textAnchor="middle" fontWeight="600">v1.0</text>
                        </g>

                        <g transform="translate(80, 30)">
                          <circle r="8" fill="url(#commitGlow)" />
                          <circle r="5" fill="#10B981" stroke="#34D399" strokeWidth="1.5" className="commit-pulse" style={{ animationDelay: '0.3s' }} />
                          <text y="20" fill="#10B981" fontSize="6" textAnchor="middle" fontWeight="600">v1.1</text>
                        </g>

                        <g transform="translate(130, 30)">
                          <circle r="8" fill="url(#commitGlow)" />
                          <circle r="5" fill="#34D399" stroke="#10B981" strokeWidth="1.5" className="commit-pulse" style={{ animationDelay: '0.6s' }} />
                          <text y="20" fill="#34D399" fontSize="6" textAnchor="middle" fontWeight="600">v1.2</text>
                        </g>

                        <g transform="translate(170, 30)">
                          <circle r="8" fill="url(#commitGlow)" />
                          <circle r="5" fill="#10B981" stroke="#32D38A" strokeWidth="1.5" className="commit-pulse" style={{ animationDelay: '0.9s' }} />
                          <circle r="12" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3">
                            <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                          </circle>
                          <text y="22" fill="#10B981" fontSize="6" textAnchor="middle" fontWeight="600">Latest</text>
                        </g>

                        <path d="M80 30 Q80 50 100 70" stroke="#34D399" strokeWidth="2" strokeDasharray="100" className="branch-grow" opacity="0.6" />
                        <line x1="100" y1="70" x2="140" y2="70" stroke="#34D399" strokeWidth="2" strokeDasharray="100" className="branch-grow" opacity="0.6" />

                        <g transform="translate(100, 70)">
                          <circle r="5" fill="#34D399" stroke="#10B981" strokeWidth="1.5" />
                          <text y="16" fill="#34D399" fontSize="5" textAnchor="middle" fontWeight="600">Branch</text>
                        </g>

                        <g transform="translate(140, 70)">
                          <circle r="5" fill="#32D38A" stroke="#28B876" strokeWidth="1.5" />
                          <text y="16" fill="#32D38A" fontSize="5" textAnchor="middle" fontWeight="600">Feature</text>
                        </g>

                        <g transform="translate(25, 75)" className="lock-shake" style={{ animationDelay: '2s' }}>
                          <rect x="-12" y="-10" width="24" height="18" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" />
                          <rect x="-5" y="0" width="10" height="6" rx="1" fill="#10B981" />
                          <circle cy="3" r="1.5" fill="#ffffff" />
                          <path d="M-4 -3 Q-4 -7 0 -7 Q4 -7 4 -3" fill="none" stroke="#10B981" strokeWidth="1.5" />
                          <text y="20" fill="#10B981" fontSize="5" textAnchor="middle" fontWeight="600">Locked</text>
                        </g>

                        <g transform="translate(50, 95)" opacity="0.5">
                          <rect x="-25" y="-6" width="50" height="12" rx="2" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="1" />
                          <text y="2" fill="#10B981" fontSize="5" textAnchor="middle" fontWeight="600">Production</text>
                        </g>
                      </svg>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <style>{`
                        @keyframes commentSlide {
                          0% { opacity: 0; transform: translateX(-10px); }
                          100% { opacity: 1; transform: translateX(0); }
                        }
                        @keyframes typingDot {
                          0%, 60%, 100% { opacity: 0.3; }
                          30% { opacity: 1; }
                        }
                        @keyframes approvalGlow {
                          0%, 100% { opacity: 0.5; }
                          50% { opacity: 1; }
                        }
                        .comment-slide { animation: commentSlide 0.5s ease-out forwards; }
                        .typing-dot { animation: typingDot 1.4s ease-in-out infinite; }
                        .approval-glow { animation: approvalGlow 2s ease-in-out infinite; }
                      `}</style>
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id="commentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#32D38A" />
                            <stop offset="100%" stopColor="#28B876" />
                          </linearGradient>
                          <filter id="commentShadow">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
                          </filter>
                        </defs>

                        <g className="comment-slide" style={{ animationDelay: '0.2s' }}>
                          <rect x="20" y="15" width="90" height="24" rx="6" fill="rgba(50, 211, 138, 0.15)" stroke="#32D38A" strokeWidth="1" filter="url(#commentShadow)" />
                          <circle cx="32" cy="27" r="6" fill="url(#commentGrad)" />
                          <text x="32" y="30" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="700">A</text>
                          <rect x="42" y="21" width="30" height="3" rx="1.5" fill="#32D38A" opacity="0.7" />
                          <rect x="42" y="27" width="20" height="3" rx="1.5" fill="#32D38A" opacity="0.5" />
                          <rect x="42" y="33" width="25" height="3" rx="1.5" fill="#32D38A" opacity="0.4" />
                        </g>

                        <g className="comment-slide" style={{ animationDelay: '0.5s' }}>
                          <rect x="90" y="45" width="90" height="24" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1" filter="url(#commentShadow)" />
                          <circle cx="102" cy="57" r="6" fill="url(#commentGrad)" />
                          <text x="102" y="60" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="700">B</text>
                          <rect x="112" y="51" width="35" height="3" rx="1.5" fill="#10B981" opacity="0.7" />
                          <rect x="112" y="57" width="25" height="3" rx="1.5" fill="#10B981" opacity="0.5" />
                          <rect x="112" y="63" width="30" height="3" rx="1.5" fill="#10B981" opacity="0.4" />
                        </g>

                        <g className="comment-slide" style={{ animationDelay: '0.8s' }}>
                          <rect x="20" y="75" width="90" height="24" rx="6" fill="rgba(52, 211, 153, 0.15)" stroke="#34D399" strokeWidth="1" filter="url(#commentShadow)" />
                          <circle cx="32" cy="87" r="6" fill="url(#commentGrad)" />
                          <text x="32" y="90" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="700">C</text>

                          <g transform="translate(50, 87)">
                            <circle r="1.5" fill="#34D399" className="typing-dot" />
                            <circle cx="6" r="1.5" fill="#34D399" className="typing-dot" style={{ animationDelay: '0.2s' }} />
                            <circle cx="12" r="1.5" fill="#34D399" className="typing-dot" style={{ animationDelay: '0.4s' }} />
                          </g>
                        </g>

                        <path d="M65 39 L95 45" stroke="#32D38A" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                        <path d="M125 69 L80 75" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />

                        <g transform="translate(155, 25)" className="approval-glow">
                          <rect x="-20" y="-12" width="40" height="24" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" />
                          <circle cy="0" r="6" fill="#10B981" />
                          <path d="M-2 0 L0 2 L3 -2" stroke="#fff" strokeWidth="1.5" fill="none" />
                          <text y="18" fill="#10B981" fontSize="6" textAnchor="middle" fontWeight="700">Approved</text>
                        </g>

                        <g transform="translate(155, 65)">
                          <rect x="-22" y="-10" width="44" height="20" rx="5" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="1" />
                          <text y="2" fill="#34D399" fontSize="5" textAnchor="middle" fontWeight="600">2 reviewers</text>
                        </g>

                        <path d="M110 57 L133 45" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" opacity="0.4">
                          <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite" />
                        </path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
