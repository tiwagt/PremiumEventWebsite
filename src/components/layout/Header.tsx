import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../common/LanguageToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Completely rewritten section detection using scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Get all sections
      const sections = [
        { id: 'home', element: document.querySelector('#home') },
        { id: 'portfolio', element: document.querySelector('#portfolio') },
        { id: 'services', element: document.querySelector('#services') },
        { id: 'about', element: document.querySelector('#about') },
        { id: 'contact', element: document.querySelector('#contact') }
      ].filter(section => section.element); // Only include sections that exist

      if (sections.length === 0) return;

      // If we're at the very top, always show home
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Find which section we're currently in
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.element!.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
        
        // If we're past this section but before the next one
        if (scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            {/*<Zap className="w-8 h-8 text-accent-500 group-hover:rotate-12 transition-transform duration-300" />*/}
            <span className="text-2xl font-bold text-white group-hover:text-accent-500 transition-colors duration-300">Premium Events Solution</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg group ${
                  isActiveLink(item.href)
                    ? 'text-accent-500 bg-accent-500/10'
                    : 'text-white hover:text-accent-500 hover:bg-white/5'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent-500 transition-all duration-300 ${
                  isActiveLink(item.href) ? 'w-6' : 'w-0 group-hover:w-4'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group bg-gradient-to-r from-accent-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium relative overflow-hidden min-h-[44px] min-w-[120px]"
            >
              <span className="relative z-10">{t('nav.getStarted')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button - Enhanced touch target */}
          <button
            className="md:hidden text-white p-3 hover:bg-white/10 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 animate-slideDown">
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-4 transition-all duration-300 min-h-[44px] flex items-center ${
                    isActiveLink(item.href)
                      ? 'text-accent-500 bg-accent-500/10 border-r-2 border-accent-500'
                      : 'text-white hover:text-accent-500 hover:bg-white/5'
                  }`}
                >
                  <span className="text-base font-medium">{item.name}</span>
                </button>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="px-4 py-2">
                <LanguageToggle />
              </div>
              
              <div className="px-4 py-4">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-accent-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 text-sm font-medium min-h-[44px]"
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;