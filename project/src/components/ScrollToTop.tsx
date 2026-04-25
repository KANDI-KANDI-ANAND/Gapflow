import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-full shadow-lg shadow-[#10B981]/30 hover:shadow-2xl hover:shadow-[#10B981]/50 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
      style={{
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
}
