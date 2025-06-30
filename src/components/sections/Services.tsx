import React, { useState } from 'react';
import { Code, Palette, TrendingUp, Smartphone, Globe, Zap, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ServiceCategory } from '../../types';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredListItem, setHoveredListItem] = useState<string | null>(null);
  const { t } = useLanguage();

  const serviceCategories: ServiceCategory[] = [
    {
      id: 1,
      title: t('services.strategy.title'),
      description: t('services.strategy.description'),
      services: [
        t('services.strategy.brand'),
        t('services.strategy.digital'),
        t('services.strategy.ux'),
        t('services.strategy.conversion'),
        t('services.strategy.analytics')
      ]
    },
    {
      id: 2,
      title: t('services.development.title'),
      description: t('services.development.description'),
      services: [
        t('services.development.web'),
        t('services.development.mobile'),
        t('services.development.ecommerce'),
        t('services.development.custom'),
        t('services.development.api')
      ]
    },
    {
      id: 3,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      services: [
        t('services.marketing.seo'),
        t('services.marketing.ppc'),
        t('services.marketing.social'),
        t('services.marketing.content'),
        t('services.marketing.email')
      ]
    }
  ];

  const getIcon = (index: number) => {
    const icons = [TrendingUp, Code, Globe];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8 text-accent-500 group-hover:scale-110 transition-transform duration-300" />;
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('services.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              {t('services.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className="group bg-gray-900/50 rounded-2xl p-8 border border-white/10 hover:bg-gray-900/70 hover:border-accent-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              onMouseEnter={() => setHoveredService(category.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-white/10 group-hover:border-accent-500/30 transition-colors duration-300">
                    {getIcon(index)}
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    hoveredService === category.id ? 'bg-accent-500 scale-150' : 'bg-gray-600'
                  }`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Enhanced Services List */}
                <div className="space-y-2 mb-8">
                  {category.services.map((service, serviceIndex) => {
                    const itemKey = `${category.id}-${serviceIndex}`;
                    return (
                      <div 
                        key={serviceIndex} 
                        className="group/item relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-gray-800/30 hover:border-accent-500/20 border border-transparent"
                        style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                        onMouseEnter={() => setHoveredListItem(itemKey)}
                        onMouseLeave={() => setHoveredListItem(null)}
                      >
                        {/* Background gradient for hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-purple-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative flex items-center space-x-3 p-3 hover:translate-x-1 transition-transform duration-300">
                          {/* Enhanced icon with animation */}
                          <div className="relative flex-shrink-0">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                              hoveredListItem === itemKey 
                                ? 'bg-accent-500 scale-110' 
                                : 'bg-accent-500/20 border border-accent-500/30'
                            }`}>
                              <CheckCircle className={`w-3 h-3 transition-all duration-300 ${
                                hoveredListItem === itemKey 
                                  ? 'text-white scale-110' 
                                  : 'text-accent-500'
                              }`} />
                            </div>
                          </div>
                          
                          {/* Enhanced text with better typography */}
                          <span className={`text-sm font-medium transition-all duration-300 ${
                            hoveredListItem === itemKey 
                              ? 'text-white' 
                              : 'text-gray-300 group-hover/item:text-gray-200'
                          }`}>
                            {service}
                          </span>
                          
                          {/* Subtle arrow indicator on hover 
                          <div className={`ml-auto transition-all duration-300 ${
                            hoveredListItem === itemKey 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 translate-x-2'
                          }`}>
                            <ArrowRight className="w-3 h-3 text-accent-500" />
                          </div>*/}
                        </div>
                        
                        {/* Bottom border accent 
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-500 to-purple-600 transition-all duration-300 ${
                          hoveredListItem === itemKey ? 'w-full' : 'w-0'
                        }`}></div>*/}
                      </div>
                    );
                  })}
                </div>

                {/* Single Consolidated CTA Button 
                <div className="mt-8">
                  <button 
                    onClick={scrollToContact}
                    className="group/btn w-full bg-gradient-to-r from-accent-500/10 to-purple-600/10 border border-accent-500/20 text-accent-500 hover:bg-gradient-to-r hover:from-accent-500 hover:to-purple-600 hover:text-white px-6 py-4 rounded-lg transition-all duration-300 font-medium text-sm min-h-[44px] flex items-center justify-center space-x-3 hover:shadow-lg hover:shadow-accent-500/25 hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">{t('services.cta.discuss')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>*/}
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-accent-500/10"></div>
            </div>
          ))}
        </div>

        {/* Single Global CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-white/10 hover:border-accent-500/30 transition-all duration-300 group max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {t('services.cta.transform')}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Ready to elevate your digital presence? Let's discuss your project.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 text-lg font-semibold group-hover:scale-105 hover:-translate-y-1 min-h-[56px] min-w-[200px] flex items-center justify-center space-x-2"
              >
                <span>{t('services.cta.getStarted')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;