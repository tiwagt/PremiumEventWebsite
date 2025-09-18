import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const floatingImages = [
    {
      src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Modern web development workspace with multiple screens showing code and design',
      direction: 'left',
      delay: '0s',
      size: 'w-32 h-32'
    },
    {
      src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'E-commerce shopping interface on mobile device',
      direction: 'right',
      delay: '1s',
      size: 'w-24 h-24'
    },
    {
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Data analytics dashboard with charts and graphs',
      direction: 'top',
      delay: '2s',
      size: 'w-28 h-28'
    },
    {
      src: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Social media marketing and digital communication icons',
      direction: 'bottom',
      delay: '3s',
      size: 'w-36 h-36'
    },
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Digital marketing strategy planning with laptop and notes',
      direction: 'left',
      delay: '4s',
      size: 'w-20 h-20'
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Healthcare technology interface on tablet device',
      direction: 'right',
      delay: '5s',
      size: 'w-40 h-40'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white pt-24 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 via-transparent to-purple-600/5"></div>

      {/* Floating Images with proper alt text */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingImages.map((image, index) => (
          <div
            key={index}
            className={`absolute ${image.size} rounded-2xl overflow-hidden opacity-20 hover:opacity-30 transition-opacity duration-500`}
            style={{
              animationDelay: image.delay,
              ...(image.direction === 'left' && {
                left: '-10%',
                top: `${20 + index * 15}%`,
                animation: 'floatFromLeft 20s ease-in-out infinite'
              }),
              ...(image.direction === 'right' && {
                right: '-10%',
                top: `${30 + index * 10}%`,
                animation: 'floatFromRight 22s ease-in-out infinite'
              }),
              ...(image.direction === 'top' && {
                top: '-10%',
                left: `${20 + index * 20}%`,
                animation: 'floatFromTop 18s ease-in-out infinite'
              }),
              ...(image.direction === 'bottom' && {
                bottom: '-10%',
                left: `${30 + index * 15}%`,
                animation: 'floatFromBottom 24s ease-in-out infinite'
              })
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover filter blur-sm"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-600/20"></div>
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent-500/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-purple-600/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-accent-500/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight relative">
            {t('hero.title.we')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent relative">
              {t('hero.title.digital')}
              {/* Floating accent elements around the word */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-accent-500/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-600/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </span>
            <br />
            {/*t('hero.title.experiences')*/}
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
              {t('hero.subtitle')}
            </p>
            
            {/* Subtle floating elements around the description */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border border-accent-500/20 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 border border-purple-600/20 rounded-full animate-spin-slow opacity-20" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            {/* Primary CTA - Enhanced */}
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2 text-lg font-medium backdrop-blur-sm relative overflow-hidden min-h-[56px]"
              aria-label="Start your project with EyeKiller Digital Agency"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('hero.cta.start')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            
            {/* Secondary CTA - Enhanced */}
            <button 
              onClick={scrollToPortfolio}
              className="group flex items-center space-x-3 text-white hover:text-accent-500 transition-colors duration-300 backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-accent-500/50 min-h-[56px]"
              aria-label="View our portfolio of successful projects"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-accent-500 transition-colors duration-300 bg-white/10">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <span className="text-lg font-medium">{t('hero.cta.view')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;