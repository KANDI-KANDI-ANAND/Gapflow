import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
     <header className={`sticky top-0 z-[100] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-white py-5'}`}>
       <div className="container-standard flex items-center justify-between">
 
         {/* Left: Logo */}
         <div className="flex-1 flex justify-start">
           <Link to="/" className="flex items-center gap-2.5 no-underline text-slate-900 font-bold text-lg tracking-tight">
             <Logo />
             <span>Gapflow</span>
           </Link>
         </div>
 
         {/* Center: Navigation Links */}
         <nav className="hidden lg:flex flex-[2] justify-center items-center gap-10" aria-label="Main navigation">
           {navLinks.map(link => (
             <Link
               key={link.path}
               to={link.path}
               onClick={closeMobileMenu}
               aria-current={isActive(link.path) ? 'page' : undefined}
               className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 no-underline ${isActive(link.path) ? 'text-[#10B981]' : 'text-slate-400 hover:text-slate-900'}`}
             >
               {link.label}
             </Link>
           ))}
         </nav>
  
         {/* Right: Primary Call to Action */}
         <div className="hidden lg:flex flex-1 justify-end">
           <Link to="/" className="px-7 py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-black transition-all shadow-md shadow-slate-200/50">
             Get Started
           </Link>
         </div>
 
         {/* Mobile Toggle Button */}
         <div className="flex-1 flex lg:hidden justify-end">
           <button
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="text-slate-900 p-2"
             aria-label="Toggle menu"
           >
             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {mobileMenuOpen && (
           <motion.nav 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 py-8 shadow-xl px-6" 
             aria-label="Mobile navigation"
           >
             <div className="flex flex-col gap-5">
               {navLinks.map(link => (
                 <Link
                   key={link.path}
                   to={link.path}
                   onClick={closeMobileMenu}
                   className={`text-xs font-bold uppercase tracking-widest ${isActive(link.path) ? 'text-[#10B981]' : 'text-slate-900'}`}
                 >
                   {link.label}
                 </Link>
               ))}
               <Link to="/" onClick={closeMobileMenu} className="mt-2 px-6 py-3.5 text-center bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Get Started
               </Link>
             </div>
           </motion.nav>
         )}
       </AnimatePresence>
     </header>
   );
 }
