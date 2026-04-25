import { motion, Variants } from 'framer-motion';
import { ArrowRight, Database, MessageSquare, Zap, Sparkles } from 'lucide-react';

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
    subcopy: 'Meet Gapflow — the AI-powered workflow builder that connects your contact center, CRM, and data systems with zero friction.',
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
    subcopy: 'Secure, visual, and deeply integrated with Bright Pattern, Dynamics 365, and your AI stack.',
    primary: 'Book a Demo',
    secondary: 'Explore Integrations'
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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
  // Note: if someone gives a headlineOverride, we split it in half or just use it as string
  const customHeadline = headlineOverride ? [headlineOverride, ''] : copy.headlineParts;
  const subcopy = subcopyOverride || copy.subcopy;
  const primaryLabel = primaryCtaLabel || copy.primary;
  const secondaryLabel = secondaryCtaLabel || copy.secondary;

  const floatingNodes = [
    { id: 1, icon: Database, label: 'Data Sync', color: 'text-blue-600', gradient: 'from-blue-100 to-indigo-50 border-blue-200', rotate: -12, top: '12%', left: '3%', delay: '0s' },
    { id: 2, icon: MessageSquare, label: 'CRM / Support', color: 'text-emerald-600', gradient: 'from-emerald-100 to-teal-50 border-emerald-200', rotate: 8, top: '65%', left: '6%', delay: '2s' },
    { id: 3, icon: Zap, label: 'Webhooks', color: 'text-orange-600', gradient: 'from-amber-100 to-orange-50 border-orange-200', rotate: 16, top: '15%', right: '3%', delay: '1s' },
    { id: 4, icon: Sparkles, label: 'AI Logic', color: 'text-purple-600', gradient: 'from-fuchsia-100 to-purple-50 border-purple-200', rotate: -10, top: '60%', right: '7%', delay: '3.5s' },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-8 lg:pt-16 lg:pb-12">
      {/* Colorful Floating Stickers */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none z-0">
        {floatingNodes.map((node) => (
          <div
            key={node.id}
            className="absolute hidden lg:block animate-float-slow hover-pause-animation pointer-events-auto z-0"
            style={{
              top: node.top,
              ...(node.left ? { left: node.left } : {}),
              ...(node.right ? { right: node.right } : {}),
              animationDelay: node.delay
            }}
          >
            <div
              className={`flex flex-col items-center justify-center p-6 px-8 rounded-3xl bg-gradient-to-br ${node.gradient} border shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}
              style={{ transform: `rotate(${node.rotate}deg)` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm flex items-center justify-center mb-3 ${node.color}`}>
                <node.icon size={28} strokeWidth={2.5} />
              </div>
              <span className={`font-black tracking-tight text-xl ${node.color} opacity-90 whitespace-nowrap`}>{node.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Pill Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-500 text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Gapflow v1.0 is now live
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            <span className="text-slate-900 block">{customHeadline[0]}</span>
            {customHeadline[1] && (
              <span className="text-slate-500 block">{customHeadline[1]}</span>
            )}
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl lg:text-2xl text-slate-500 max-w-3xl leading-relaxed font-light"
          >
            {subcopy}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-5 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPrimaryClick}
              aria-label={primaryLabel}
              className="flex items-center justify-center gap-2 px-10 py-4 lg:py-5 bg-black text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-slate-900 transition-all duration-300 w-full sm:w-auto"
            >
              {primaryLabel} <ArrowRight size={20} className="stroke-[2.5px]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSecondaryClick}
              aria-label={secondaryLabel}
              className="flex items-center justify-center px-10 py-4 lg:py-5 bg-white text-slate-900 font-semibold text-lg rounded-full border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-white transition-all duration-300 w-full sm:w-auto"
            >
              {secondaryLabel}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
