import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Cosmic Theme - Premium Purple/Blue Accent
        primary: {
          DEFAULT: '#0a0a0a',   // Near-black background
          dark: '#0a0a0a',      // Main background
        },
        surface: {
          DEFAULT: '#1a1a1a',   // Dark charcoal for cards/elevated surfaces
          secondary: '#1a1a1a', // Card backgrounds
          tertiary: '#252525',  // Slightly lighter for hover states
          hover: '#252525',     // Hover state
          border: 'rgba(124, 58, 237, 0.2)', // Subtle purple border
        },
        text: {
          primary: '#f5f5f5',   // Primary heading text (light off-white)
          secondary: '#c9c9c9', // Secondary body text (soft gray)
          tertiary: '#8b8b8b',  // Tertiary muted text (darker gray)
          muted: '#8b8b8b',     // Muted text for timestamps, small text
        },
        accent: {
          DEFAULT: '#7c3aed',   // Primary accent (purple)
          primary: '#7c3aed',   // Purple for buttons, borders, highlights
          secondary: '#3b82f6', // Soft blue for gradients
          lavender: '#a0a0ff',  // Soft lavender-blue for links/highlights
          link: '#a0a0ff',      // Link color
        },
        neutral: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#c9c9c9',
          300: '#a0a0a0',
          400: '#8b8b8b',
          500: '#737373',
          600: '#666666',
          700: '#525252',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        success: '#10b981',
        error: '#ef4444',
        warning: '#fbbf24',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Sora', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira)', 'JetBrains Mono', 'Fira Code', 'ui-monospace'],
      },
      fontSize: {
        'hero-name': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-name-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-heading': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'section-heading-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
      },
      borderRadius: {
        sm: '0.375rem',    // 6px
        DEFAULT: '0.5rem',  // 8px
        md: '0.625rem',    // 10px
        lg: '0.75rem',     // 12px
        xl: '1rem',        // 16px
        '2xl': '1.25rem',  // 20px
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-purple-lg': '0 4px 20px rgba(124, 58, 237, 0.2)',
        'card-hover': '0 4px 20px rgba(124, 58, 237, 0.2)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a 0%, #000000 100%)',
        'gradient-cosmic': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
        'gradient-accent': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
        'vignette': 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        250: '250ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        'scale-in': 'scale-in 0.6s ease-out both',
        'float': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
