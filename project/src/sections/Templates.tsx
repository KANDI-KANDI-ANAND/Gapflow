import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import templatesData from '../data/templates.json';

export default function Templates() {
  const displayTemplates = templatesData.templates.slice(0, 4);

  return (
    <section id="templates" className="py-24 bg-white border-y border-slate-100/50">
      <div className="container-standard relative z-10">

        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8">
            <span className="text-[10px] text-slate-900 font-black tracking-[0.15em] uppercase">ACCELERATORS & TEMPLATES</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-10">
            Launch Faster With Prebuilt Workflow Templates
          </h2>

          <p className="text-lg lg:text-xl text-slate-500 font-bold max-w-4xl mx-auto leading-relaxed">
            Start with production-ready templates for AI workflows, operational automation,
            integrations, notifications, and business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayTemplates.map((template) => (
            <Link
              key={template.id}
              to={`/templates/${template.slug}`}
              className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:border-slate-900/10 transition-all duration-500 shadow-[0_12px_40px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] flex flex-col h-full"
            >

              <div className="h-64 bg-slate-100/50 flex items-center justify-center p-8 border-b border-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center">
                  <Zap size={32} className="mx-auto mb-4 text-slate-300 group-hover:text-[#00C07F] transition-colors duration-500" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-300">Thumbnail Preview</span>
                </div>
              </div>


              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-lg font-black text-slate-900 leading-tight mb-3 uppercase tracking-tight">
                  {template.title}
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed line-clamp-2">
                  {template.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/templates"
            className="btn-primary min-w-[240px] !bg-slate-900 hover:!bg-black"
          >
            <span>Explore all templates</span>
            <ArrowRight size={18} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
