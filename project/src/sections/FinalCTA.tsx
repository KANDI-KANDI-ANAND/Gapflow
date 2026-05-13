import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="get-started" className="py-16 lg:py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[100%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[100%] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-standard relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.15em]">Instant Deployment</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Deploy your first agent <br />
              <span className="text-slate-500">in seconds.</span>
            </h2>

            <p className="text-lg lg:text-xl font-medium text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto tracking-tight">
              Describe your automation, and Gapflow will handle the logic, security, and orchestration. No complex codebases required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/signup" className="group btn-primary !bg-[#10B981] !text-slate-900 !px-10 !py-5 text-base hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-12px_rgba(16,185,129,0.3)]">
                <span>Deploy</span>
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
