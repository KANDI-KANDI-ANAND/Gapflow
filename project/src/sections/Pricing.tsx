import { Check, Zap, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      features: ['Core builder', 'Community support', 'Popular connectors', '100 workflow runs/mo'],
      cta: 'Start free',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per user/month',
      features: ['Unlimited flows & runs', 'All connectors', 'Advanced AI actions', 'Priority support', 'Version control'],
      cta: 'Start trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      features: ['SSO/RBAC', 'On-prem/private cloud', 'SLA & dedicated support', 'Advanced security', 'Custom integrations'],
      cta: 'Talk to sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(50,211,138,0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
            <Zap size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Plans that grow with you
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 text-xs font-semibold rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 ${plan.highlighted
                    ? 'border-2 border-[#10B981] shadow-2xl shadow-[#10B981]/20'
                    : 'border border-slate-200 hover:border-[#10B981]/50'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    </div>
                    <p className="text-sm text-[#6B7280]">{plan.period}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={20} className="text-[#32D38A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-medium text-lg rounded-xl transition-all duration-300 ${plan.highlighted
                        ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 shadow-lg shadow-[#10B981]/30 hover:shadow-2xl hover:shadow-[#10B981]/50 hover:scale-[1.02]'
                        : 'bg-[#1A1B2E]/60 border border-slate-200 text-slate-600 hover:border-[#10B981]/50 hover:text-slate-900'
                      }`}
                  >
                    <span>{plan.cta}</span>
                    {plan.highlighted && <ArrowRight size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-2">All plans include 14-day free trial. No credit card required.</p>
          <p className="text-sm text-[#6B7280]">Questions? <button className="text-[#10B981] hover:text-[#059669] transition-colors">Contact our team →</button></p>
        </div>
      </div>
    </section>
  );
}
