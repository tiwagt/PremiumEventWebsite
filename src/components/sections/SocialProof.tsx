import React from 'react';
import { Award, Star, TrendingUp, Users, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  const clientLogos = [
    { name: 'TechCorp', logo: 'TC', industry: t('socialProof.industry.technology') },
    { name: 'InnovateLab', logo: 'IL', industry: t('socialProof.industry.saas') },
    { name: 'BrandForward', logo: 'BF', industry: t('socialProof.industry.retail') },
    { name: 'FinanceFlow', logo: 'FF', industry: t('socialProof.industry.fintech') },
    { name: 'HealthTech', logo: 'HT', industry: t('socialProof.industry.healthcare') },
    { name: 'EduPlatform', logo: 'EP', industry: t('socialProof.industry.education') },
    { name: 'GreenEnergy', logo: 'GE', industry: t('socialProof.industry.energy') },
    { name: 'FoodieApp', logo: 'FA', industry: t('socialProof.industry.food') }
  ];

  const awards = [
    {
      title: t('socialProof.awards.webby.title'),
      year: '2023',
      category: t('socialProof.awards.webby.category'),
      icon: Award,
      description: t('socialProof.awards.webby.description')
    },
    {
      title: t('socialProof.awards.css.title'),
      year: '2023',
      category: t('socialProof.awards.css.category'),
      icon: Star,
      description: t('socialProof.awards.css.description')
    },
    {
      title: t('socialProof.awards.awwwards.title'),
      year: '2022',
      category: t('socialProof.awards.awwwards.category'),
      icon: Zap,
      description: t('socialProof.awards.awwwards.description')
    },
    {
      title: t('socialProof.awards.fwa.title'),
      year: '2022',
      category: t('socialProof.awards.fwa.category'),
      icon: Globe,
      description: t('socialProof.awards.fwa.description')
    }
  ];

  const industryStats = [
    {
      metric: '98%',
      label: t('socialProof.stats.satisfaction.label'),
      description: t('socialProof.stats.satisfaction.description'),
      icon: Users
    },
    {
      metric: '300+',
      label: t('socialProof.stats.projects.label'),
      description: t('socialProof.stats.projects.description'),
      icon: TrendingUp
    },
    {
      metric: '10+',
      label: t('socialProof.stats.clients.label'),
      description: t('socialProof.stats.clients.description'),
      icon: Star
    },
    {
      metric: '5+',
      label: t('socialProof.stats.experience.label'),
      description: t('socialProof.stats.experience.description'),
      icon: Award
    }
  ];

  const certifications = [
    t('socialProof.certifications.google'),
    t('socialProof.certifications.aws'),
    t('socialProof.certifications.hubspot'),
    t('socialProof.certifications.shopify'),
    t('socialProof.certifications.meta'),
    t('socialProof.certifications.microsoft')
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Trusted by Industry Leaders */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('socialProof.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              {t('socialProof.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            {t('socialProof.subtitle')}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-20">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{client.name}</div>
              <div className="text-gray-400 text-xs">{client.industry}</div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('socialProof.awards.title')}</h3>
            <p className="text-gray-300 text-lg">{t('socialProof.awards.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 rounded-2xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <award.icon className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{award.title}</h4>
                <div className="text-accent-500 font-semibold mb-2">{award.category}</div>
                <div className="text-gray-400 text-sm mb-3">{award.year}</div>
                <p className="text-gray-300 text-xs leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Statistics 
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('socialProof.numbers.title')}</h3>
            <p className="text-gray-300 text-lg">{t('socialProof.numbers.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                  {stat.metric}
                </div>
                <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>*/}

        {/* Certifications & Partnerships */}
        <div className="bg-gray-950/50 rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('socialProof.partners.title')}</h3>
            <p className="text-gray-300">{t('socialProof.partners.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg p-4 border border-white/10 hover:border-accent-500/30 transition-all duration-300 text-center group"
              >
                <div className="text-white text-sm font-medium group-hover:text-accent-500 transition-colors duration-300">
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            {t('socialProof.cta.text')}
          </p>
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 font-medium hover:-translate-y-1"
          >
            {t('socialProof.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;