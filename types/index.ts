export type { Project, ProjectFilters, ProjectMetadata } from './project';
export type { Experience, ExperienceTimeline } from './experience';
export type { Skill, SkillLevel, SkillCategory, SkillSet } from './skill';

// Common types
export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Testimonial = {
  id?: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  testimonial: string;
  rating?: number;
  date?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  tags?: string[];
  category?: string;
  readingTime?: number;
  featured?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  phone?: string;
};

export type NewsletterFormData = {
  email: string;
  name?: string;
};

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export type SEOMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
};
