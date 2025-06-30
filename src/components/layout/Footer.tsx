import React from 'react';
import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: X, href: '#', label: 'X' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const services = [
    t('footer.services.brand'),
    t('footer.services.web'),
    t('footer.services.marketing'),
    t('footer.services.ecommerce'),
    t('footer.services.seo')
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
              <Zap className="w-8 h-8 text-accent-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold text-white">Premium Events Solution</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 bg-gray-900/50 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-accent-500 hover:border-accent-500 transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-gray-300 hover:text-accent-500 transition-all duration-300 text-left flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-accent-500 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="group text-gray-300 hover:text-accent-500 transition-all duration-300 cursor-pointer flex items-center space-x-2">
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-accent-500 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Mail className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:hello@premiumevents.com"
                  className="text-gray-300 hover:text-accent-500 transition-colors duration-300"
                >
                  hello@premiumevents.com
                </a>
              </div>
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Phone className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-accent-500 transition-colors duration-300"
                >
                  (+237) 123-456-7890
                </a>
              </div>
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">Akwa Paris Dancing, Douala, CM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section 
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="bg-gray-950/50 rounded-2xl p-8 text-center border border-white/5 hover:border-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 mb-6">{t('footer.newsletter.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
              />
              <button className="group bg-gradient-to-r from-accent-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 font-medium relative overflow-hidden">
                <span className="relative z-10">{t('footer.newsletter.subscribe')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>*/}

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Premium Events Solution. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="group text-gray-400 hover:text-accent-500 text-sm transition-all duration-300 relative">
              <span className="group-hover:translate-x-0.5 transition-transform duration-300 inline-block">{t('footer.privacy')}</span>
            </a>
            <a href="#" className="group text-gray-400 hover:text-accent-500 text-sm transition-all duration-300 relative">
              <span className="group-hover:translate-x-0.5 transition-transform duration-300 inline-block">{t('footer.terms')}</span>
            </a>
            <a href="#" className="group text-gray-400 hover:text-accent-500 text-sm transition-all duration-300 relative">
              <span className="group-hover:translate-x-0.5 transition-transform duration-300 inline-block">{t('footer.cookies')}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;