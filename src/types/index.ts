export interface NavigationItem {
  name: string;
  href: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  };
  challenge?: string;
  solution?: string;
  results?: Array<{
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  technologies?: string[];
  timeline?: string;
  industry?: string;
  projectDetails?: {
    duration: string;
    teamSize: string;
    budget: string;
    deliverables: string[];
    challenges: string[];
    approach: string[];
    keyFeatures: string[];
  };
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  company: string;
  avatar: string;
  logo: string;
  role?: string;
  industry?: string;
  projectType?: string;
  results?: Array<{
    metric: string;
    improvement: string;
  }>;
  rating?: number;
  videoTestimonial?: boolean;
}

export interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  services: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  fullBio?: string;
  expertise?: string[];
  achievements?: string[];
  location?: string;
  joinedDate?: string;
  personalInterests?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  favoriteQuote?: string;
  workingStyle?: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export interface StatItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
}

export interface ContactInfo {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Award {
  title: string;
  year: string;
  category: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
  industry: string;
}

export interface IndustryStat {
  metric: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
}