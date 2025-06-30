import React, { useState, useEffect } from 'react';
import { Quote, Play, Star, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { TestimonialItem } from '../../types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote: t('testimonials.quote1'),
      author: "Sarah Johnson",
      company: "TechCorp",
      role: "CEO & Founder",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      logo: "TC",
      industry: t('testimonials.industry.technology'),
      projectType: t('testimonials.project1'),
      results: [
        { metric: t('testimonials.metric.conversion'), improvement: "+300%" },
        { metric: t('testimonials.metric.revenue'), improvement: "+180%" },
        { metric: t('testimonials.metric.engagement'), improvement: "+250%" }
      ],
      rating: 5,
      videoTestimonial: true
    },
    {
      id: 2,
      quote: t('testimonials.quote2'),
      author: "Michael Chen",
      company: "InnovateLab",
      role: "Co-Founder & CTO",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      logo: "IL",
      industry: t('testimonials.industry.saas'),
      projectType: t('testimonials.project2'),
      results: [
        { metric: t('testimonials.metric.acquisition'), improvement: "+450%" },
        { metric: t('testimonials.metric.adoption'), improvement: "+200%" },
        { metric: t('testimonials.metric.market'), improvement: "+85%" }
      ],
      rating: 5,
      videoTestimonial: false
    },
    {
      id: 3,
      quote: t('testimonials.quote3'),
      author: "Emily Rodriguez",
      company: "BrandForward",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      logo: "BF",
      industry: t('testimonials.industry.retail'),
      projectType: t('testimonials.project3'),
      results: [
        { metric: t('testimonials.metric.recognition'), improvement: "+220%" },
        { metric: t('testimonials.metric.sales'), improvement: "+340%" },
        { metric: t('testimonials.metric.satisfaction'), improvement: "+95%" }
      ],
      rating: 5,
      videoTestimonial: true
    },
    {
      id: 4,
      quote: t('testimonials.quote4'),
      author: "David Kumar",
      company: "FinanceFlow",
      role: "Product Manager",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      logo: "FF",
      industry: t('testimonials.industry.financial'),
      projectType: t('testimonials.project4'),
      results: [
        { metric: t('testimonials.metric.downloads'), improvement: "+500%" },
        { metric: t('testimonials.metric.retention'), improvement: "+180%" },
        { metric: t('testimonials.metric.transactions'), improvement: "+300%" }
      ],
      rating: 5,
      videoTestimonial: false
    },
    {
      id: 5,
      quote: t('testimonials.quote5'),
      author: "Dr. Amanda Foster",
      company: "HealthTech Solutions",
      role: "Chief Medical Officer",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      logo: "HT",
      industry: t('testimonials.industry.healthcare'),
      projectType: t('testimonials.project5'),
      results: [
        { metric: t('testimonials.metric.patientSat'), improvement: "+85%" },
        { metric: t('testimonials.metric.efficiency'), improvement: "+120%" },
        { metric: t('testimonials.metric.platformAdoption'), improvement: "+200%" }
      ],
      rating: 5,
      videoTestimonial: true
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);

      return () => clearInterval(timer);
    }
  }, [testimonials.length, isPaused]);

  const handleVideoPlay = (testimonialId: number) => {
    setIsVideoPlaying(testimonialId);
    // In a real app, this would trigger video playback
    console.log(`Playing video testimonial for ${testimonials.find(t => t.id === testimonialId)?.author}`);
  };

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const renderStars = (rating: number | undefined) => {
    const safeRating = typeof rating === 'number' ? rating : 0;
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < safeRating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('testimonials.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              {t('testimonials.title.highlight')}
            </span>{' '}
            {t('testimonials.title.say')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Testimonial with Integrated Navigation */}
          <div className="bg-gray-900/50 rounded-3xl p-8 md:p-12 relative mb-12 border border-white/10 transition-all duration-500">
            <Quote className="text-accent-500/20 w-24 h-24 absolute top-6 left-6" />
            
            {/* Navigation Arrows - Positioned inside the card */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <button
                onClick={goToPrevious}
                className="group w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                onClick={goToNext}
                className="group w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
                <span className="text-gray-400 ml-2">({testimonials[currentIndex].rating}/5)</span>
              </div>

              <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              {/* Results Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {testimonials[currentIndex].results?.map((result, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{result.metric}</span>
                    </div>
                    <div className="text-green-400 font-bold text-xl">{result.improvement}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-500/20"
                  />
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-accent-500 font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentIndex].company} • {testimonials[currentIndex].industry}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                 
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].logo}
                  </div>
                </div>
              </div>

              {/* Project Type Badge */}
              <div className="absolute top-6 left-32">
                <span className="bg-accent-500/10 border border-accent-500/20 text-accent-500 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].projectType}
                </span>
              </div>

             
            </div>
          </div>

          {/* Testimonial Grid - Additional Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.slice(1, 3).map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gray-900/30 rounded-2xl p-6 border border-white/10 hover:bg-gray-900/50 transition-all duration-300 group">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote.substring(0, 150)}..."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation dots 
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'bg-accent-500 w-8 h-3' 
                      : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Progress indicator 
            <div className="text-gray-400 text-sm ml-4">
              {currentIndex + 1} / {testimonials.length}
            </div>
          </div>*/}

          {/* Industry Diversity Showcase 
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">{t('testimonials.trustedAcross')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from(new Set(testimonials.map(t => t.industry))).map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-gray-300 text-sm hover:border-accent-500/30 hover:text-accent-500 transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;