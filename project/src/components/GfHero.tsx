import { ArrowRight } from 'lucide-react';

type GfHeroProps = {
  variant?: 'launch' | 'dev' | 'enterprise';
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  headlineOverride?: string;
  subcopyOverride?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
};

const copyVariants = {
  launch: {
    headlineParts: ['Remove Custom Engineering,', 'let Gapflow orchestrate.'],
    subcopy: 'Gapflow handles workflows, retries, triggers, integrations, AI agents, scheduling, and operational execution so your team can focus on shipping product.',
    primary: 'START BUILDING',
    secondary: 'WATCH DEMO'
  },
  dev: {
    headlineParts: ['The AI-Driven Workflow Engine', 'For Real-Time Ops.'],
    subcopy: 'Connect APIs, bots, and data flows visually — no limits, no code walls.',
    primary: 'Start Building',
    secondary: 'See Templates'
  },
  enterprise: {
    headlineParts: ['One Platform.', 'Infinite Automations.'],
    subcopy: 'Secure, visual, and deeply integrated with your existing AI stack.',
    primary: 'Book a Demo',
    secondary: 'Explore Integrations'
  }
};

export default function GfHero({
  variant = 'launch',
  onPrimaryClick,
  onSecondaryClick,
  headlineOverride,
  subcopyOverride,
  primaryCtaLabel,
  secondaryCtaLabel
}: GfHeroProps) {
  const copy = copyVariants[variant];
  const customHeadline = headlineOverride ? [headlineOverride, ''] : copy.headlineParts;
  const subcopy = subcopyOverride || copy.subcopy;
  const primaryLabel = primaryCtaLabel || copy.primary;
  const secondaryLabel = secondaryCtaLabel || copy.secondary;

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-6 lg:pt-14 lg:pb-8 border-b border-slate-100/50">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/40 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0l50 50L0 100zM100 0L50 50l50 50z' fill='%2310b981' fill-opacity='0.1'/%3E%3Cpath d='M0 0l100 0L50 50zM0 100l100 0L50 50z' fill='%2310b981' fill-opacity='0.05'/%3E%3C/svg%3E")`, backgroundSize: '160px 160px' }} />

      <div className="container-standard relative z-10">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">
            AI Workflow Infrastructure
          </div>

          <h1 className="mx-auto mt-8 max-w-6xl text-5xl md:text-6xl lg:text-7xl font-black leading-[0.94] tracking-[-0.055em] text-slate-950">
            {customHeadline[0]} <br />
            {customHeadline[1] && (
              <span className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-transparent">
                {customHeadline[1]}
              </span>
            )}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl font-medium leading-8 text-slate-500">
            {subcopy}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onPrimaryClick}
              className="btn-primary flex items-center justify-center gap-4 w-full sm:w-auto group min-w-[240px] !py-5 !bg-[#00C07F] hover:!bg-[#00a86f] shadow-[0_20px_40px_-12px_rgba(0,192,127,0.35)] transition-all duration-300 font-black tracking-widest text-xs uppercase"
            >
              {primaryLabel} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSecondaryClick}
              className="btn-secondary w-full sm:w-auto min-w-[240px] !py-5 !border-2 !border-slate-100 hover:!border-[#00C07F] hover:!text-[#00C07F] transition-all duration-300 font-black tracking-widest text-xs uppercase bg-white shadow-md"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
