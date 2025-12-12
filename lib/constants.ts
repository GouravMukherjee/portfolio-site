// Site Configuration
export const SITE_CONFIG = {
  name: 'Gourav Mukherjee | Portfolio',
  author: 'Gourav Mukherjee',
  description: 'Aspiring AI/ML Engineer at SJSU. Building intelligent systems & edge computing solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/gouravmukherjee',
    linkedin: 'https://linkedin.com/in/gouravmukherjee',
    twitter: 'https://twitter.com',
    discord: 'https://discord.com',
  },
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/gouravmukherjee', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gouravmukherjee', icon: 'IN' },
  { label: 'Discord', href: 'https://discord.com', icon: 'DC' },
  { label: 'Twitter/X', href: 'https://twitter.com', icon: 'X' },
] as const;

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  SUBSCRIBE: '/api/subscribe',
  PROJECTS: '/api/projects',
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  CONTACT_FORM: 1, // 1 request per minute
  NEWSLETTER: 3, // 3 requests per minute
  WINDOW_MS: 60000, // 1 minute
} as const;

// Performance Thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100, // First Input Delay (ms)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600, // Time to First Byte (ms)
} as const;

// Accessibility
export const A11Y_CONFIG = {
  SKIP_LINK_ID: 'main-content',
  ARIA_LIVE_REGION_ID: 'aria-live-region',
} as const;

// Animation Durations (ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints (pixels)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Content Limits
export const CONTENT_LIMITS = {
  PROJECT_TITLE_MAX: 100,
  PROJECT_DESCRIPTION_MAX: 500,
  CONTACT_NAME_MAX: 100,
  CONTACT_EMAIL_MAX: 255,
  CONTACT_MESSAGE_MAX: 5000,
  NEWSLETTER_EMAIL_MAX: 255,
} as const;

// Image Sizes
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 400, height: 300 },
  CARD: { width: 600, height: 400 },
  HERO: { width: 1200, height: 800 },
  OG: { width: 1200, height: 630 },
} as const;
