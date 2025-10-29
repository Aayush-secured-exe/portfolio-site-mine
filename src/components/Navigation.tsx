import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <>
      <nav className="my-[8px] md:my-4 lg:m-4 z-50 bg-[var(--portfolio-dark-card)] rounded-2xl h-auto md:h-16">
        <div className="flex items-center justify-between h-full px-8 py-[30px] md:px-8 md:py-0">
          <div className="fade-in-up text-xl text-[var(--portfolio-bg)]">
            Aayush Shaw
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 fade-in-up">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-[var(--portfolio-bg)] hover:text-[#6c757d] font-medium transition-colors">
                {link.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden fade-in-up text-[var(--portfolio-bg)] relative z-[60]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Close button inside mobile menu */}
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-8 right-8 text-[var(--portfolio-dark-card)] p-2 hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        
        {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-[var(--portfolio-bg)] text-2xl font-medium hover:text-[#6c757d] transition-colors">
            {link.label}
          </button>)}
      </div>
    </>;
};
export default Navigation;