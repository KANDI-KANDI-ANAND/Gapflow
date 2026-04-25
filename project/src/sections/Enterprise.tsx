import { ShieldCheck, Server, FileCheck, HelpCircle, Building2 } from 'lucide-react';

export default function Enterprise() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Security',
      desc: 'SSO, RBAC, encryption at rest & in transit',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Server,
      title: 'Deployment',
      desc: 'SaaS, private cloud, or on-prem options',
      color: 'from-[#059669] to-[#34D399]'
    },
    {
      icon: FileCheck,
      title: 'Compliance',
      desc: 'SOC 2, GDPR, Australian Privacy Principles',
      color: 'from-[#32D38A] to-[#28B876]'
    },
    {
      icon: HelpCircle,
      title: 'Support',
      desc: 'SLAs, onboarding, dedicated success',
      color: 'from-[#28B876] to-[#2AC47D]'
    }
  ];

  return (
    <section id="enterprise" className="relative bg-white py-8 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
            <Building2 size={16} className="text-[#10B981]" />
            <span className="text-sm text-slate-600 font-medium">Enterprise Ready</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Built for the enterprise
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Security, compliance, and support that meets your organization's standards
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={24} className="text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
