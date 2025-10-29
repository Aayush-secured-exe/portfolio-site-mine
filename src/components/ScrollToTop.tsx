import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[var(--portfolio-bg)] text-[var(--portfolio-dark-card)] p-2 rounded-full shadow-lg border border-[var(--portfolio-dark-card)] transition-colors md:hidden"
          aria-label="Scroll to top"
        >
          <ChevronUp size={30} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;