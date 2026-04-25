import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const menus = {
    Product: ['Features', 'Use Cases', 'Templates', 'Pricing'],
    Developers: ['Docs', 'API', 'SDK', 'Status'],
    Company: ['About', 'Partners', 'Contact', 'Careers'],
    Resources: ['Blog', 'Community', 'Security', 'Privacy']
  };

  return (
    <footer id="footer" className="relative bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Gapflow</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The AI-powered workflow platform that connects your apps, data, and teams.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#10B981] hover:text-[#10B981] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#10B981] hover:text-[#10B981] transition-all duration-300"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#10B981] hover:text-[#10B981] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {Object.entries(menus).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Gapcloud Pty Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
