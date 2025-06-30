import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'slideUp':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'slideLeft':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'scaleIn':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

// Staggered animation component for lists
interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  className?: string;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 100,
  animation = 'fadeIn',
  className = ''
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default ScrollAnimation;