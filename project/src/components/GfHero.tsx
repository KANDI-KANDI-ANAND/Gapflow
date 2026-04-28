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
     headlineParts: ['Automate Everything.', 'Intelligently.'],
     subcopy: 'The AI-powered workflow builder that connects your contact center, CRM, and data systems with zero friction.',
     primary: 'Try Gapflow',
     secondary: 'Watch Demo'
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
    <section className="relative overflow-hidden bg-white pt-16 pb-8 lg:pt-24 lg:pb-14 border-b border-slate-100/50">
      {/* Subtle Background Treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/20 via-white to-white pointer-events-none" />
      
      <div className="container-standard relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Pill Badge - ADDED COLOR */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 backdrop-blur-sm shadow-sm text-emerald-700 text-[10px] font-bold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              Gapflow v1.0 is now live
            </div>
          </div>
 
          {/* Headline - ADDED COLOR ACCENT */}
          <h1 className="heading-hero">
            {customHeadline[0]}
            {customHeadline[1] && (
              <span className="text-[#10B981] block mt-2">{customHeadline[1]}</span>
            )}
          </h1>
 
          {/* Subcopy */}
          <p className="mt-4 text-subcopy max-w-2xl text-slate-500/90 font-medium">
            {subcopy}
          </p>
 
          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
            <button
              onClick={onPrimaryClick}
              className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto group min-w-[220px] !bg-[#10B981] hover:!bg-[#059669] shadow-lg shadow-emerald-200/50 transition-all duration-300"
            >
              {primaryLabel} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
 
            <button
              onClick={onSecondaryClick}
               className="btn-secondary w-full sm:w-auto min-w-[220px] !border-slate-200 hover:!border-[#10B981] hover:!text-[#10B981] transition-all duration-300"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
 }
