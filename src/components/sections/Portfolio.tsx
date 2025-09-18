import React, { useState } from 'react';
import { TrendingUp, Eye, ArrowUpRight, Play, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { PortfolioItem } from '../../types';

const Portfolio: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { t } = useLanguage();

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'TechCorp Digital Transformation',
      category: 'Brand Identity & Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      metrics: { label: 'Conversion Increase', value: '+250%' },
      challenge: 'TechCorp needed a complete digital overhaul to compete in the modern market.',
      solution: 'We redesigned their brand identity and built a conversion-optimized website with advanced analytics.',
      results: [
        { metric: 'Conversion Rate', before: '2.1%', after: '7.3%', improvement: '+250%' },
        { metric: 'Page Load Speed', before: '4.2s', after: '1.1s', improvement: '+74%' },
        { metric: 'User Engagement', before: '1:23', after: '3:47', improvement: '+165%' }
      ],
      testimonial: {
        quote: "The transformation exceeded our wildest expectations. Our business has never been stronger.",
        author: "Sarah Johnson",
        role: "CEO, TechCorp"
      },
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      timeline: '3 months',
      industry: 'Technology'
    },
    {
      id: 2,
      title: 'E-Commerce Revolution',
      category: 'E-Commerce Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      metrics: { label: 'Revenue Growth', value: '+180%' },
      challenge: 'Outdated e-commerce platform limiting growth and user experience.',
      solution: 'Built a modern, scalable e-commerce platform with AI-powered recommendations.',
      results: [
        { metric: 'Revenue', before: '$2.1M', after: '$5.9M', improvement: '+180%' },
        { metric: 'Cart Abandonment', before: '68%', after: '31%', improvement: '-54%' },
        { metric: 'Mobile Sales', before: '23%', after: '67%', improvement: '+191%' }
      ],
      testimonial: {
        quote: "Our online sales have tripled since the new platform launch.",
        author: "Michael Chen",
        role: "Founder, RetailPlus"
      },
      technologies: ['Shopify Plus', 'React', 'GraphQL', 'Stripe'],
      timeline: '4 months',
      industry: 'Retail'
    },
    {
      id: 3,
      title: 'FinTech Mobile Innovation',
      category: 'Mobile App Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      metrics: { label: 'User Engagement', value: '+320%' },
      challenge: 'Creating a secure, user-friendly mobile banking experience.',
      solution: 'Developed a cutting-edge mobile app with biometric security and intuitive UX.',
      results: [
        { metric: 'Daily Active Users', before: '12K', after: '51K', improvement: '+320%' },
        { metric: 'Transaction Volume', before: '$1.2M', after: '$4.8M', improvement: '+300%' },
        { metric: 'App Store Rating', before: '3.2', after: '4.8', improvement: '+50%' }
      ],
      testimonial: {
        quote: "The app has revolutionized how our customers interact with their finances.",
        author: "Emily Rodriguez",
        role: "CTO, FinanceFlow"
      },
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      timeline: '6 months',
      industry: 'Financial Services'
    },
    {
      id: 4,
      title: 'SaaS Dashboard Redesign',
      category: 'Product Design & Development',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: false,
      metrics: { label: 'User Retention', value: '+95%' },
      challenge: 'Complex dashboard causing user confusion and high churn rates.',
      solution: 'Redesigned the entire user experience with data visualization and simplified workflows.',
      results: [
        { metric: 'User Retention', before: '45%', after: '88%', improvement: '+95%' },
        { metric: 'Feature Adoption', before: '23%', after: '67%', improvement: '+191%' },
        { metric: 'Support Tickets', before: '340/month', after: '89/month', improvement: '-74%' }
      ],
      testimonial: {
        quote: "Our users finally understand and love our product. Churn is at an all-time low.",
        author: "David Kumar",
        role: "Product Manager, DataFlow"
      },
      technologies: ['Vue.js', 'D3.js', 'Python', 'Docker'],
      timeline: '5 months',
      industry: 'SaaS'
    },
    {
      id: 5,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing & Strategy',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      metrics: { label: 'ROI', value: '+400%' },
      challenge: 'Low brand awareness and poor digital marketing performance.',
      solution: 'Comprehensive digital strategy including SEO, PPC, and content marketing.',
      results: [
        { metric: 'ROI', before: '120%', after: '600%', improvement: '+400%' },
        { metric: 'Organic Traffic', before: '2.1K', after: '18.7K', improvement: '+790%' },
        { metric: 'Lead Quality Score', before: '3.2', after: '8.9', improvement: '+178%' }
      ],
      testimonial: {
        quote: "Our marketing ROI has never been higher. The strategy is brilliant.",
        author: "Lisa Park",
        role: "Marketing Director, GrowthCo"
      },
      technologies: ['Google Ads', 'HubSpot', 'Analytics', 'SEMrush'],
      timeline: '2 months',
      industry: 'Marketing'
    },
    {
      id: 6,
      title: 'Healthcare Platform',
      category: 'Healthcare Technology',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      metrics: { label: 'Patient Satisfaction', value: '+85%' },
      challenge: 'Streamlining patient care and improving healthcare accessibility.',
      solution: 'Built a comprehensive telemedicine platform with AI-powered diagnostics.',
      results: [
        { metric: 'Patient Satisfaction', before: '6.2/10', after: '9.1/10', improvement: '+85%' },
        { metric: 'Consultation Time', before: '45min', after: '22min', improvement: '-51%' },
        { metric: 'Platform Adoption', before: '0%', after: '78%', improvement: 'New' }
      ],
      testimonial: {
        quote: "This platform has transformed how we deliver healthcare to our patients.",
        author: "Dr. Amanda Foster",
        role: "Chief Medical Officer, HealthTech"
      },
      technologies: ['React', 'WebRTC', 'HIPAA', 'AI/ML'],
      timeline: '8 months',
      industry: 'Healthcare'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('portfolio.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              {t('portfolio.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Portfolio Grid */}
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {portfolioItems.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-500"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute inset-0 z-10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
            <span className="text-accent-500 text-sm font-medium px-3 py-1 bg-accent-500/10 rounded-full border border-accent-500/20 self-start mb-3">
              {item.category}
            </span>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent-500 transition-colors duration-300">
              {item.title}
            </h3>
            
            <div className="space-y-4">
              {/* Metrics */}
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">{item.metrics?.label}:</span>
                <span className="text-green-400 font-bold">{item.metrics?.value}</span>
              </div>
              
              {/* Industry and Timeline */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{item.industry}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{item.timeline}</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to={`/case-study/${item.id}`}
                className="group/btn bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 text-sm font-medium flex items-center space-x-2 w-fit"
              >
                <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                <span>{t('portfolio.cta.viewCase')}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      {/* Call to Action */}
      <div className="text-center">
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group border border-gray-600 text-white px-8 py-4 rounded-full hover:border-accent-500 hover:text-accent-500 transition-all duration-300 font-medium relative overflow-hidden min-h-[44px]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('portfolio.cta.discuss')}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
      </div>
    </section>
  );
};

export default Portfolio;