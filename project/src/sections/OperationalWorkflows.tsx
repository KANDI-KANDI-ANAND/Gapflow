import { LayoutGrid } from 'lucide-react';

export default function OperationalWorkflows() {
  const useCases = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-standard">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-10">
            Built For Real Operational Workflows
          </h2>

          <p className="text-lg lg:text-xl text-slate-500 font-bold max-w-4xl mx-auto leading-relaxed">
            Power AI products, operational automation, customer workflows, integrations,
            notifications, and enterprise execution from one orchestration platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-[0_12px_40px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-8">
                <LayoutGrid size={20} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                [PLACEHOLDER USE CASE {i}]
              </h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                [PLACEHOLDER USE CASE DESCRIPTION]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
