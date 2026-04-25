import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/templates', label: 'Templates' },
    { path: '/integrations', label: 'Integrations' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-white py-5 border-transparent'}`}>
      <div className="w-full max-w-[1280px] xl:max-w-[1360px] mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-3 no-underline text-slate-900 font-bold text-[22px] tracking-tight">
            <Logo />
            Gapflow
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex flex-[2] justify-center items-center gap-10 xl:gap-14" aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              aria-current={isActive(link.path) ? 'page' : undefined}
              className={`group relative py-2 text-[15px] transition-colors duration-300 no-underline ${isActive(link.path) ? 'text-[#10B981] font-semibold' : 'text-slate-600 font-medium hover:text-slate-900'}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#10B981] rounded-full transition-all duration-300 ease-out ${isActive(link.path) ? 'w-full shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
            </Link>
          ))}
        </nav>

        {/* Right: Primary Call to Action */}
        <div className="hidden lg:flex flex-1 justify-end">
          <Link to="/" className="px-6 py-2.5 bg-slate-900 text-white text-[15px] font-medium rounded-full hover:bg-black transition-colors shadow-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex-1 flex lg:hidden justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center bg-transparent border-none text-slate-600 cursor-pointer p-2 hover:text-[#10B981] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-slate-200 py-6 shadow-xl" aria-label="Mobile navigation">
          <div className="container flex flex-col gap-4 px-6 mx-auto">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`text-base p-2 transition-colors duration-300 no-underline ${isActive(link.path) ? 'text-[#10B981] font-bold' : 'text-slate-600 font-medium hover:text-[#10B981]'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/" onClick={closeMobileMenu} className="px-6 py-3 block text-center bg-slate-900 text-white text-base font-medium rounded-full hover:bg-black transition-colors shadow-sm">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
