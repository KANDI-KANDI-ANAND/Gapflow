import { useState } from 'react';
import { Rocket, Phone, Check, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('Monthly');

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      unit: '/mo',
      badge: 'Best for trying',
      features: [
        'Core builder',
        'Popular connectors',
        '100 runs/mo',
        'Community support'
      ],
      cta: { label: 'Start Free', action: '/app/signup' }
    },
    {
      name: 'Pro',
      price: '$49',
      unit: '/user/mo',
      badge: 'Most popular',
      features: [
        'Unlimited flows & runs',
        'All connectors',
        'AI actions',
        'Email support'
      ],
      cta: { label: 'Start Trial', action: '/app/signup?plan=pro' },
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: '',
      badge: 'For scale',
      features: [
        'SSO/RBAC',
        'Private cloud / on‑prem',
        'SLA & onboarding',
        'Dedicated success'
      ],
      cta: { label: 'Contact Sales', action: '/contact/sales' }
    }
  ];

  const comparisonRows = [
    ['Flows', 'Up to 3', 'Unlimited', 'Unlimited'],
    ['Runs/month', '100', 'Unlimited', 'Unlimited'],
    ['Connectors', 'Popular', 'All', 'All'],
    ['AI actions', 'Basic', 'Advanced', 'Advanced'],
    ['SSO/RBAC', '—', '—', '✔'],
    ['On‑prem/private cloud', '—', '—', '✔'],
    ['SLA/support', 'Community', 'Email', 'Priority + CSM']
  ];

  const faqs = [
    {
      q: 'What counts as a run?',
      a: 'Each completed execution of a flow is counted as one run.'
    },
    {
      q: 'Can I self‑host?',
      a: 'Yes. Enterprise offers private cloud or on‑prem deployment options.'
    },
    {
      q: 'Do you offer discounts?',
      a: 'Annual billing saves 20%. Volume and startup discounts available—contact sales.'
    }
  ];

  return (
    <div>
      <div className="bg-white py-4 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Pricing' }]} />
        </div>
      </div>

      <section id="pricing-hero" className="relative bg-white py-16 lg:py-20" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% -10%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D38A]/10 border border-[#32D38A]/20 mb-6">
            <Sparkles size={16} className="text-[#32D38A]" />
            <span className="text-sm text-slate-600 font-medium">Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Simple, scalable pricing
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto mb-12">
            Start free. Upgrade when you're ready to scale.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Start Free</span>
              <Rocket size={20} />
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-600 font-medium text-lg rounded-xl border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:text-slate-900 transition-all duration-300">
              <Phone size={20} />
              <span>Talk to Sales</span>
            </button>
          </div>
        </div>
      </section>

      <section id="plans" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8">Choose your plan</h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xxl)' }}>
            <button
              onClick={() => setBillingPeriod('Monthly')}
              className="px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300"
              style={{
                background: billingPeriod === 'Monthly' ? 'linear-gradient(135deg, #10B981, #059669)' : 'transparent',
                color: billingPeriod === 'Monthly' ? '#fff' : '#64748b',
                border: billingPeriod === 'Monthly' ? 'none' : '1px solid #e2e8f0'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('Yearly')}
              className="px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300"
              style={{
                background: billingPeriod === 'Yearly' ? 'linear-gradient(135deg, #10B981, #059669)' : 'transparent',
                color: billingPeriod === 'Yearly' ? '#fff' : '#64748b',
                border: billingPeriod === 'Yearly' ? 'none' : '1px solid #e2e8f0'
              }}
            >
              Yearly
            </button>
            <span className="text-sm text-[#32D38A] font-medium">Yearly saves 20%</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? 'border-2 border-[#10B981]' : 'border border-slate-200'} hover:border-[#10B981]/50`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                {!plan.highlight && plan.badge && (
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">{plan.name}</h3>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <span className="text-5xl font-bold text-[#10B981]">{plan.price}</span>
                  <span className="text-lg text-slate-600 ml-1">{plan.unit}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-lg)' }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 mb-3">
                      <Check size={18} className="text-[#32D38A] flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${plan.highlight
                    ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 hover:scale-[1.02]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#10B981]/50 hover:text-slate-900'
                    }`}
                >
                  {plan.cta.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107,75,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Plan comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-white/50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-6 py-4 font-medium text-slate-600">{row[0]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[1]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[2]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Frequently asked questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#10B981] mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-final-cta" className="relative bg-gradient-to-b from-[#F8FAFC] to-slate-50 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(1200px 600px at 50% 50%, rgba(107, 75, 255, 0.25), transparent)'
          }} />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12">Ready to automate?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-slate-900 font-medium text-lg rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:scale-[1.02]">
              <span>Get Started</span>
              <Rocket size={20} />
            </button>
            <button className="text-[#10B981] font-medium hover:text-[#059669] transition-colors duration-300 px-8 py-4">
              <Phone size={20} className="inline mr-2" />
              Talk to Sales →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
