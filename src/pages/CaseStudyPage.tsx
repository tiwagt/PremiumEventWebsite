import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  BarChart3,
  Lightbulb,
  Rocket,
  Star,
  Quote,
  Download,
  Share2,
  Eye,
  Clock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import type { PortfolioItem } from '../types';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [caseStudy, setCaseStudy] = useState<PortfolioItem | null>(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Extended portfolio data with comprehensive case study information
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'TechCorp Digital Transformation',
      category: 'Brand Identity & Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      metrics: { label: 'Conversion Increase', value: '+250%' },
      challenge: 'TechCorp, a traditional B2B software company, was struggling with an outdated digital presence that failed to reflect their innovative solutions. Their website had a 2.1% conversion rate, slow loading times, and poor mobile experience, resulting in lost leads and diminished brand credibility.',
      solution: 'We implemented a comprehensive digital transformation strategy, including complete brand redesign, modern responsive website development, conversion optimization, and advanced analytics integration. The new platform featured intuitive UX, fast loading times, and seamless mobile experience.',
      results: [
        { metric: 'Conversion Rate', before: '2.1%', after: '7.3%', improvement: '+250%' },
        { metric: 'Page Load Speed', before: '4.2s', after: '1.1s', improvement: '+74%' },
        { metric: 'User Engagement', before: '1:23', after: '3:47', improvement: '+165%' },
        { metric: 'Mobile Traffic', before: '23%', after: '67%', improvement: '+191%' },
        { metric: 'Lead Quality Score', before: '3.2', after: '8.9', improvement: '+178%' },
        { metric: 'Bounce Rate', before: '68%', after: '31%', improvement: '-54%' }
      ],
      testimonial: {
        quote: "The transformation exceeded our wildest expectations. Our business has never been stronger, and we're seeing unprecedented growth in both leads and conversions.",
        author: "Sarah Johnson",
        role: "CEO & Founder, TechCorp"
      },
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript', 'Tailwind CSS'],
      timeline: '3 months',
      industry: 'Technology',
      projectDetails: {
        duration: '12 weeks',
        teamSize: '6 specialists',
        budget: '$75,000 - $100,000',
        deliverables: [
          'Complete brand identity redesign',
          'Responsive website development',
          'Content management system',
          'Analytics and tracking setup',
          'SEO optimization',
          'Performance monitoring dashboard'
        ],
        challenges: [
          'Legacy system integration',
          'Complex data migration',
          'Tight deadline constraints',
          'Multiple stakeholder alignment'
        ],
        approach: [
          'Discovery and research phase',
          'User experience design',
          'Agile development methodology',
          'Continuous testing and optimization',
          'Comprehensive training and handover'
        ],
        keyFeatures: [
          'Advanced search functionality',
          'Real-time chat integration',
          'Automated lead scoring',
          'Multi-language support',
          'Progressive web app capabilities',
          'Advanced analytics dashboard'
        ]
      }
    },
    {
      id: 2,
      title: 'E-Commerce Revolution',
      category: 'E-Commerce Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      metrics: { label: 'Revenue Growth', value: '+180%' },
      challenge: 'RetailPlus was operating on an outdated e-commerce platform that limited their growth potential. High cart abandonment rates, poor mobile experience, and lack of personalization were costing them significant revenue.',
      solution: 'We built a modern, scalable e-commerce platform with AI-powered recommendations, seamless checkout process, and comprehensive mobile optimization. The solution included advanced inventory management and customer analytics.',
      results: [
        { metric: 'Revenue', before: '$2.1M', after: '$5.9M', improvement: '+180%' },
        { metric: 'Cart Abandonment', before: '68%', after: '31%', improvement: '-54%' },
        { metric: 'Mobile Sales', before: '23%', after: '67%', improvement: '+191%' },
        { metric: 'Average Order Value', before: '$89', after: '$156', improvement: '+75%' },
        { metric: 'Customer Retention', before: '34%', after: '72%', improvement: '+112%' },
        { metric: 'Page Load Speed', before: '3.8s', after: '0.9s', improvement: '+76%' }
      ],
      testimonial: {
        quote: "Our online sales have tripled since the new platform launch. The AI recommendations alone have increased our average order value by 75%.",
        author: "Michael Chen",
        role: "Founder, RetailPlus"
      },
      technologies: ['Shopify Plus', 'React', 'GraphQL', 'Stripe', 'AI/ML', 'Node.js'],
      timeline: '4 months',
      industry: 'Retail',
      projectDetails: {
        duration: '16 weeks',
        teamSize: '8 specialists',
        budget: '$100,000 - $150,000',
        deliverables: [
          'Custom e-commerce platform',
          'AI recommendation engine',
          'Mobile app development',
          'Payment gateway integration',
          'Inventory management system',
          'Customer analytics dashboard'
        ],
        challenges: [
          'High-volume transaction processing',
          'Complex product catalog migration',
          'Multi-currency support',
          'Third-party integrations'
        ],
        approach: [
          'Comprehensive market research',
          'User journey optimization',
          'A/B testing implementation',
          'Performance optimization',
          'Security compliance'
        ],
        keyFeatures: [
          'AI-powered product recommendations',
          'One-click checkout',
          'Advanced search and filtering',
          'Wishlist and favorites',
          'Social commerce integration',
          'Real-time inventory tracking'
        ]
      }
    },
    {
      id: 3,
      title: 'FinTech Mobile Innovation',
      category: 'Mobile App Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      metrics: { label: 'User Engagement', value: '+320%' },
      challenge: 'FinanceFlow needed a secure, user-friendly mobile banking app that could compete with established financial institutions while maintaining the highest security standards and regulatory compliance.',
      solution: 'We developed a cutting-edge mobile banking app with biometric security, intuitive UX design, real-time notifications, and comprehensive financial management tools. The app features advanced encryption and fraud detection.',
      results: [
        { metric: 'Daily Active Users', before: '12K', after: '51K', improvement: '+320%' },
        { metric: 'Transaction Volume', before: '$1.2M', after: '$4.8M', improvement: '+300%' },
        { metric: 'App Store Rating', before: '3.2', after: '4.8', improvement: '+50%' },
        { metric: 'User Session Time', before: '2:15', after: '7:42', improvement: '+242%' },
        { metric: 'Feature Adoption', before: '28%', after: '84%', improvement: '+200%' },
        { metric: 'Customer Support Tickets', before: '450/month', after: '89/month', improvement: '-80%' }
      ],
      testimonial: {
        quote: "The app has revolutionized how our customers interact with their finances. User engagement has increased by over 300%, and customer satisfaction is at an all-time high.",
        author: "Emily Rodriguez",
        role: "CTO, FinanceFlow"
      },
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Blockchain', 'AI/ML'],
      timeline: '6 months',
      industry: 'Financial Services',
      projectDetails: {
        duration: '24 weeks',
        teamSize: '10 specialists',
        budget: '$200,000 - $300,000',
        deliverables: [
          'Native mobile applications (iOS/Android)',
          'Backend API development',
          'Security infrastructure',
          'Compliance documentation',
          'Admin dashboard',
          'Real-time monitoring system'
        ],
        challenges: [
          'Regulatory compliance (PCI DSS, SOX)',
          'Advanced security requirements',
          'Real-time transaction processing',
          'Cross-platform compatibility'
        ],
        approach: [
          'Security-first development',
          'Agile methodology with security sprints',
          'Continuous penetration testing',
          'User-centered design process',
          'Comprehensive quality assurance'
        ],
        keyFeatures: [
          'Biometric authentication',
          'Real-time transaction alerts',
          'Advanced budgeting tools',
          'Investment portfolio tracking',
          'Bill payment automation',
          'Fraud detection system'
        ]
      }
    },
    {
      id: 4,
      title: 'SaaS Dashboard Redesign',
      category: 'Product Design & Development',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: false,
      metrics: { label: 'User Retention', value: '+95%' },
      challenge: 'DataFlow\'s complex dashboard was causing user confusion and high churn rates. Users struggled to find key features and understand their data, leading to poor adoption and customer satisfaction.',
      solution: 'We redesigned the entire user experience with intuitive data visualization, simplified workflows, and personalized dashboards. The new design focused on user-centered design principles and clear information hierarchy.',
      results: [
        { metric: 'User Retention', before: '45%', after: '88%', improvement: '+95%' },
        { metric: 'Feature Adoption', before: '23%', after: '67%', improvement: '+191%' },
        { metric: 'Support Tickets', before: '340/month', after: '89/month', improvement: '-74%' },
        { metric: 'User Satisfaction', before: '6.2/10', after: '9.1/10', improvement: '+47%' },
        { metric: 'Time to Value', before: '14 days', after: '3 days', improvement: '-79%' },
        { metric: 'Monthly Active Users', before: '12K', after: '28K', improvement: '+133%' }
      ],
      testimonial: {
        quote: "Our users finally understand and love our product. Churn is at an all-time low, and feature adoption has nearly tripled.",
        author: "David Kumar",
        role: "Product Manager, DataFlow"
      },
      technologies: ['Vue.js', 'D3.js', 'Python', 'Docker', 'Redis', 'PostgreSQL'],
      timeline: '5 months',
      industry: 'SaaS',
      projectDetails: {
        duration: '20 weeks',
        teamSize: '7 specialists',
        budget: '$120,000 - $180,000',
        deliverables: [
          'Complete UX/UI redesign',
          'Interactive data visualizations',
          'Responsive dashboard framework',
          'User onboarding system',
          'Analytics and reporting tools',
          'Mobile-responsive design'
        ],
        challenges: [
          'Complex data visualization requirements',
          'Legacy system constraints',
          'Multiple user personas',
          'Real-time data processing'
        ],
        approach: [
          'User research and persona development',
          'Information architecture redesign',
          'Iterative prototyping and testing',
          'Component-based design system',
          'Performance optimization'
        ],
        keyFeatures: [
          'Customizable dashboard widgets',
          'Advanced filtering and search',
          'Real-time data updates',
          'Export and sharing capabilities',
          'Mobile-first responsive design',
          'Accessibility compliance'
        ]
      }
    },
    {
      id: 5,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing & Strategy',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      metrics: { label: 'ROI', value: '+400%' },
      challenge: 'GrowthCo had low brand awareness and poor digital marketing performance. Their existing campaigns were generating low-quality leads with poor conversion rates, resulting in wasted marketing spend.',
      solution: 'We developed a comprehensive digital strategy including SEO optimization, targeted PPC campaigns, content marketing, and social media strategy. The approach focused on data-driven decision making and continuous optimization.',
      results: [
        { metric: 'ROI', before: '120%', after: '600%', improvement: '+400%' },
        { metric: 'Organic Traffic', before: '2.1K', after: '18.7K', improvement: '+790%' },
        { metric: 'Lead Quality Score', before: '3.2', after: '8.9', improvement: '+178%' },
        { metric: 'Cost Per Lead', before: '$89', after: '$23', improvement: '-74%' },
        { metric: 'Brand Awareness', before: '12%', after: '67%', improvement: '+458%' },
        { metric: 'Social Engagement', before: '1.2K', after: '15.8K', improvement: '+1217%' }
      ],
      testimonial: {
        quote: "Our marketing ROI has never been higher. The strategy is brilliant, and we're seeing consistent, high-quality leads every month.",
        author: "Lisa Park",
        role: "Marketing Director, GrowthCo"
      },
      technologies: ['Google Ads', 'HubSpot', 'Analytics', 'SEMrush', 'Mailchimp', 'Hootsuite'],
      timeline: '2 months',
      industry: 'Marketing',
      projectDetails: {
        duration: '8 weeks',
        teamSize: '5 specialists',
        budget: '$50,000 - $75,000',
        deliverables: [
          'Comprehensive marketing strategy',
          'SEO optimization and content plan',
          'PPC campaign setup and management',
          'Social media strategy and content',
          'Email marketing automation',
          'Analytics and reporting dashboard'
        ],
        challenges: [
          'Highly competitive market',
          'Limited brand recognition',
          'Budget constraints',
          'Multiple target audiences'
        ],
        approach: [
          'Market research and competitor analysis',
          'Audience segmentation and persona development',
          'Multi-channel campaign strategy',
          'A/B testing and optimization',
          'Performance tracking and reporting'
        ],
        keyFeatures: [
          'Automated lead nurturing sequences',
          'Dynamic retargeting campaigns',
          'Content marketing calendar',
          'Social media automation',
          'Advanced analytics tracking',
          'ROI optimization tools'
        ]
      }
    },
    {
      id: 6,
      title: 'Healthcare Platform',
      category: 'Healthcare Technology',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      metrics: { label: 'Patient Satisfaction', value: '+85%' },
      challenge: 'HealthTech needed to streamline patient care and improve healthcare accessibility. Their existing systems were fragmented, leading to poor patient experience and inefficient care delivery.',
      solution: 'We built a comprehensive telemedicine platform with AI-powered diagnostics, appointment scheduling, secure messaging, and integrated health records. The platform prioritized security, compliance, and user experience.',
      results: [
        { metric: 'Patient Satisfaction', before: '6.2/10', after: '9.1/10', improvement: '+85%' },
        { metric: 'Consultation Time', before: '45min', after: '22min', improvement: '-51%' },
        { metric: 'Platform Adoption', before: '0%', after: '78%', improvement: 'New' },
        { metric: 'Administrative Efficiency', before: '45%', after: '89%', improvement: '+98%' },
        { metric: 'Patient Wait Time', before: '12 days', after: '2 days', improvement: '-83%' },
        { metric: 'Care Quality Score', before: '7.1/10', after: '9.4/10', improvement: '+32%' }
      ],
      testimonial: {
        quote: "This platform has transformed how we deliver healthcare to our patients. The efficiency gains and patient satisfaction improvements have been remarkable.",
        author: "Dr. Amanda Foster",
        role: "Chief Medical Officer, HealthTech"
      },
      technologies: ['React', 'WebRTC', 'HIPAA', 'AI/ML', 'Node.js', 'MongoDB'],
      timeline: '8 months',
      industry: 'Healthcare',
      projectDetails: {
        duration: '32 weeks',
        teamSize: '12 specialists',
        budget: '$300,000 - $500,000',
        deliverables: [
          'Telemedicine platform development',
          'AI diagnostic tools integration',
          'Electronic health records system',
          'Appointment scheduling system',
          'Secure messaging platform',
          'HIPAA compliance documentation'
        ],
        challenges: [
          'HIPAA compliance requirements',
          'Complex healthcare workflows',
          'Integration with existing systems',
          'Real-time video consultation quality'
        ],
        approach: [
          'Healthcare workflow analysis',
          'Security-first development approach',
          'Iterative user testing with medical professionals',
          'Compliance validation and testing',
          'Comprehensive staff training program'
        ],
        keyFeatures: [
          'HD video consultations',
          'AI-powered symptom checker',
          'Prescription management',
          'Health record integration',
          'Appointment scheduling',
          'Secure patient messaging'
        ]
      }
    }
  ];

  useEffect(() => {
    const foundCaseStudy = portfolioItems.find(item => item.id === parseInt(id || '0'));
    setCaseStudy(foundCaseStudy || null);
    setIsLoading(false);
    
    if (!foundCaseStudy) {
      navigate('/');
    }
  }, [id, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: caseStudy?.title,
        text: `Check out this case study: ${caseStudy?.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-500/30 border-t-accent-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-accent-500 hover:text-accent-400 transition-colors duration-300">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'challenge', label: 'Challenge', icon: Target },
    { id: 'solution', label: 'Solution', icon: Lightbulb },
    { id: 'results', label: 'Results', icon: TrendingUp },
    { id: 'details', label: 'Project Details', icon: BarChart3 },
    { id: 'testimonial', label: 'Testimonial', icon: Quote }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 via-transparent to-purple-600/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Navigation */}
          <div className="flex items-center space-x-4 mb-8">
            <Link 
              to="/" 
              className="group flex items-center space-x-2 text-gray-300 hover:text-accent-500 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span className="text-gray-500 text-sm">{caseStudy.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="bg-accent-500/10 border border-accent-500/20 text-accent-500 px-4 py-2 rounded-full text-sm font-medium">
                  {caseStudy.category}
                </span>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{caseStudy.timeline}</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {caseStudy.challenge?.substring(0, 200)}...
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">{caseStudy.metrics?.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-green-400">{caseStudy.metrics?.value}</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-accent-500" />
                    <span className="text-gray-300 text-sm">Industry</span>
                  </div>
                  <div className="text-xl font-bold text-white">{caseStudy.industry}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleShare}
                  className="group flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 text-accent-500 px-6 py-3 rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Share Case Study</span>
                </button>
                <button className="group flex items-center space-x-2 bg-gray-800/50 border border-white/10 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-96 object-cover rounded-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Technologies Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies?.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black/70 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.technologies && caseStudy.technologies.length > 3 && (
                    <span className="bg-black/70 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                      +{caseStudy.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center space-x-2 whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent-500 text-white'
                    : 'text-gray-300 hover:text-accent-500 hover:bg-accent-500/10'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Eye className="w-8 h-8 text-accent-500" />
              <span>Project Overview</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <Calendar className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="text-white font-bold mb-2">Duration</h3>
                <p className="text-gray-300">{caseStudy.projectDetails?.duration}</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="text-white font-bold mb-2">Team Size</h3>
                <p className="text-gray-300">{caseStudy.projectDetails?.teamSize}</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <Target className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="text-white font-bold mb-2">Budget Range</h3>
                <p className="text-gray-300">{caseStudy.projectDetails?.budget}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent-500/10 border border-accent-500/20 text-accent-500 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section id="challenge" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Target className="w-8 h-8 text-red-500" />
              <span>The Challenge</span>
            </h2>
            
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {caseStudy.challenge}
              </p>
              
              {/* Key Challenges */}
              <h3 className="text-white font-bold mb-4">Key Challenges:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.projectDetails?.challenges?.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              <span>Our Solution</span>
            </h2>
            
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {caseStudy.solution}
              </p>
              
              {/* Approach */}
              <h3 className="text-white font-bold mb-4">Our Approach:</h3>
              <div className="space-y-3 mb-8">
                {caseStudy.projectDetails?.approach?.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <h3 className="text-white font-bold mb-4">Key Features Delivered:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.projectDetails?.keyFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section id="results" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span>Results & Impact</span>
            </h2>
            
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.results?.map((result, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-4">{result.metric}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Before:</span>
                        <span className="text-red-400 font-mono">{result.before}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">After:</span>
                        <span className="text-green-400 font-mono">{result.after}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">Improvement:</span>
                          <span className="text-accent-500 font-bold text-lg">{result.improvement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Details Section */}
          <section id="details" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-accent-500" />
              <span>Project Details</span>
            </h2>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {caseStudy.projectDetails?.deliverables?.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Rocket className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section id="testimonial" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Quote className="w-8 h-8 text-purple-500" />
              <span>Client Testimonial</span>
            </h2>
            
            <div className="bg-gradient-to-r from-accent-500/10 to-purple-600/10 rounded-2xl p-8 border border-accent-500/20 relative">
              <Quote className="text-accent-500/20 w-16 h-16 absolute top-4 right-4" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-white text-xl md:text-2xl mb-8 leading-relaxed">
                  "{caseStudy.testimonial?.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {caseStudy.testimonial?.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{caseStudy.testimonial?.author}</div>
                    <div className="text-accent-500 font-medium">{caseStudy.testimonial?.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gray-950/50 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 font-medium"
              >
                Start Your Project
              </Link>
              <Link
                to="/#portfolio"
                className="border border-gray-600 text-white px-8 py-4 rounded-full hover:border-accent-500 hover:text-accent-500 transition-all duration-300 font-medium"
              >
                View More Case Studies
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;