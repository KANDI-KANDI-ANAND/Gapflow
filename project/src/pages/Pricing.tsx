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

      <section id="pricing-hero" className="py-24 lg:py-32 bg-white relative">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <Sparkles size={14} className="text-[#10B981]" />
            <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Simple, scalable pricing
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start free. Upgrade when you're ready to scale. No hidden fees.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white font-semibold text-lg rounded-full hover:bg-slate-800 transition-all duration-300">
              <span>Start Free</span>
              <Rocket size={18} />
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-slate-900 font-semibold text-lg rounded-full border border-slate-200 hover:border-slate-300 transition-all duration-300">
              <Phone size={18} />
              <span>Talk to Sales</span>
            </button>
          </div>
        </div>
      </section>

      <section id="plans" className="py-24 lg:py-32 bg-white relative border-t border-slate-100">
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20 tracking-tight">Choose your plan</h2>
 
          <div className="flex justify-center items-center gap-4 mb-20">
            <button
              onClick={() => setBillingPeriod('Monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${billingPeriod === 'Monthly' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('Yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${billingPeriod === 'Yearly' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500'}`}
            >
              Yearly
            </button>
            <span className="text-sm text-[#10B981] font-bold ml-2">Save 20%</span>
          </div>
 
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 lg:p-10 border transition-all duration-300 ${plan.highlight ? 'border-[#10B981] ring-1 ring-[#10B981]' : 'border-slate-100 bg-slate-50'}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-8">{plan.badge}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} className="text-[#10B981] flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300'
                    }`}
                >
                  {plan.cta.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section id="compare" className="py-24 lg:py-32 bg-white relative border-t border-slate-100">
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20 tracking-tight">Plan comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-5 text-sm font-semibold text-slate-700">{row[0]}</td>
                    <td className="px-6 py-5 text-center text-sm text-slate-500">{row[1]}</td>
                    <td className="px-6 py-5 text-center text-sm text-slate-500">{row[2]}</td>
                    <td className="px-6 py-5 text-center text-sm text-slate-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 lg:py-32 bg-white relative border-t border-slate-100">
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20 tracking-tight">Frequently asked questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-8 transition-all duration-300 hover:border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section id="pricing-final-cta" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight">Ready to automate?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-slate-900 font-bold text-lg rounded-full hover:bg-slate-100 transition-all duration-300">
              <span>Get Started</span>
              <Rocket size={18} />
            </button>
            <button className="px-8 py-3.5 text-white font-bold text-lg hover:text-[#10B981] transition-all duration-300">
              Talk to Sales →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
