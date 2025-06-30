import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-accent-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-accent-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;