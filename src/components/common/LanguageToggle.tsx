import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 hover:border-accent-500/30 text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium min-h-[44px]"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Français' : 'English'}`}
    >
      <Globe className="w-4 h-4 text-accent-500 group-hover:rotate-12 transition-transform duration-300" />
      <span className="uppercase font-bold">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
      <div className="hidden sm:block text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {language === 'en' ? 'Français' : 'English'}
      </div>
    </button>
  );
};

export default LanguageToggle;