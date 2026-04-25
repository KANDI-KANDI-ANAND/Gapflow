import { Code2, Terminal, Webhook, FileJson } from 'lucide-react';

export default function Developers() {
  const features = [
    {
      icon: Code2,
      text: '(upcoming) Custom nodes (SDK)',
      description: 'Build your own integrations'
    },
    {
      icon: Terminal,
      text: '(upcoming) CLI & REST API',
      description: 'Automate deployments'
    },
    {
      icon: Webhook,
      text: 'Incoming/outgoing webhooks',
      description: 'Event-driven workflows'
    },
    {
      icon: FileJson,
      text: 'JSON export & import',
      description: 'Version control friendly'
    }
  ];

  return (
    <section id="developers" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
              <Code2 size={16} className="text-[#32D38A]" />
              <span className="text-sm text-slate-600 font-medium">Developer-Friendly</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Built for developers who ship
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Powerful APIs, SDKs, and tools that integrate seamlessly into your development workflow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>

              <div className="space-y-4 mb-12">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-[#32D38A]/50 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#32D38A]/20 to-[#28B876]/20 border border-[#32D38A]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={20} className="text-[#32D38A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.text}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#32D38A]/20 to-[#10B981]/20 rounded-2xl blur-3xl opacity-30" />

              <div className="relative bg-[#0A0B14] border border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1B2E] border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
                  </div>
                  <span className="ml-4 text-xs text-[#6B7280] font-medium">deploy-flow.js</span>
                </div>

                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-600">
                    <code>
                      <span className="text-[#FF79C6]">const</span> <span className="text-slate-900">response</span> = <span className="text-[#FF79C6]">await</span> <span className="text-[#50FA7B]">fetch</span>({'\n'}
                      {'  '}<span className="text-[#F1FA8C]">'https://api.gapflow.ai/v1/flows'</span>,{'\n'}
                      {'  '}{'{'}{'\n'}
                      {'    '}<span className="text-[#8BE9FD]">method</span>: <span className="text-[#F1FA8C]">'POST'</span>,{'\n'}
                      {'    '}<span className="text-[#8BE9FD]">headers</span>: {'{'}{'\n'}
                      {'      '}<span className="text-[#F1FA8C]">'Authorization'</span>: <span className="text-[#F1FA8C]">`Bearer </span><span className="text-[#FFB86C]">{'${TOKEN}'}</span><span className="text-[#F1FA8C]">`</span>,{'\n'}
                      {'      '}<span className="text-[#F1FA8C]">'Content-Type'</span>: <span className="text-[#F1FA8C]">'application/json'</span>{'\n'}
                      {'    '}{'}'},{'\n'}
                      {'    '}<span className="text-[#8BE9FD]">body</span>: <span className="text-slate-900">JSON</span>.<span className="text-[#50FA7B]">stringify</span>({'{'}){'\n'}
                      {'      '}<span className="text-[#8BE9FD]">name</span>: <span className="text-[#F1FA8C]">'Daily Digest'</span>,{'\n'}
                      {'      '}<span className="text-[#8BE9FD]">trigger</span>: <span className="text-[#F1FA8C]">'schedule'</span>,{'\n'}
                      {'      '}<span className="text-[#8BE9FD]">nodes</span>: [<span className="text-[#6B7280]">...</span>]{'\n'}
                      {'    '}{'}'}{'\n'}
                      {'  '}{'}'}{'\n'}
                      );{'\n\n'}
                      <span className="text-[#6272A4]">// ✓ Flow deployed successfully</span>
                    </code>
                  </pre>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#10B981]/20 to-[#32D38A]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
