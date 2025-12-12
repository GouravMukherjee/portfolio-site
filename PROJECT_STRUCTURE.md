# Project Structure Documentation

## Overview
This portfolio site follows a professional, scalable structure with clear separation of concerns and consistent naming conventions.

## Directory Structure

```
portfolio-site/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with SEO & analytics
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # robots.txt generation
│   ├── sitemap.ts               # XML sitemap generation
│   ├── manifest.ts              # PWA manifest
│   └── api/                     # API routes
│       ├── contact/route.ts     # Contact form endpoint
│       ├── subscribe/route.ts   # Newsletter subscription
│       └── projects/route.ts    # Projects data endpoint
│
├── components/                   # React components
│   ├── common/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx       # Main navigation with mobile menu
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── cards/                   # Card components
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   └── ExperienceCard.tsx
│   ├── ui/                      # UI primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── OptimizedImage.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Divider.tsx
│   ├── animations/              # Animation components
│   │   ├── FadeInUp.tsx
│   │   └── ScaleIn.tsx
│   ├── feedback/                # User feedback
│   │   └── Toast.tsx
│   ├── overlay/                 # Overlay components
│   │   ├── Modal.tsx
│   │   └── ModalLazy.tsx
│   ├── layout/                  # Layout utilities
│   │   └── SectionContainer.tsx
│   ├── a11y/                    # Accessibility
│   │   └── SkipLink.tsx
│   ├── seo/                     # SEO components
│   │   └── StructuredData.tsx
│   ├── analytics/               # Analytics
│   │   └── AnalyticsProvider.tsx
│   ├── code/                    # Code display
│   │   └── CodeBlock.tsx
│   ├── form/                    # Form components
│   │   └── index.tsx
│   ├── examples/                # Example implementations
│   │   ├── ContactFormExample.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── TrackedLinks.tsx
│   └── index.ts                 # Centralized exports
│
├── lib/                          # Utility functions
│   ├── utils.ts                 # General utilities (cn, debounce, etc.)
│   ├── constants.ts             # App constants and configuration
│   ├── api-client.ts            # API request helpers
│   ├── animations.ts            # Framer Motion variants
│   ├── validations.ts           # Form validation schemas
│   ├── seo.ts                   # SEO utilities
│   ├── structured-data.ts       # Schema.org generators
│   ├── performance.ts           # Performance monitoring
│   ├── api-utils.ts             # API utilities
│   ├── rate-limit.ts            # Rate limiting
│   ├── env.ts                   # Environment variables
│   ├── error-tracking.ts        # Error tracking (Sentry)
│   └── analytics.ts             # Analytics tracking
│
├── types/                        # TypeScript definitions
│   ├── index.ts                 # Common types
│   ├── project.ts               # Project types
│   ├── experience.ts            # Experience types
│   └── skill.ts                 # Skill types
│
├── styles/                       # Global styles
│   ├── globals.css              # Global styles and utilities
│   ├── tailwind.css             # Tailwind imports
│   └── animations.css           # Custom animations
│
├── content/                      # Static content
│   ├── projects.json            # Projects data
│   ├── experience.json          # Work experience
│   ├── skills.json              # Skills and technologies
│   └── blog/                    # Blog posts (MDX)
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   └── og-images/
│   ├── fonts/
│   ├── icons/
│   └── robots.txt
│
└── Configuration files
    ├── .env.example             # Environment variables template
    ├── .eslintrc.json           # ESLint configuration
    ├── .prettierrc              # Prettier configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── tailwind.config.ts       # Tailwind CSS configuration
    ├── next.config.js           # Next.js configuration
    └── package.json             # Dependencies and scripts
```

## Naming Conventions

### Files
- **Components**: `PascalCase` (e.g., `HeroSection.tsx`, `ProjectCard.tsx`)
- **Utilities**: `kebab-case` (e.g., `api-client.ts`, `rate-limit.ts`)
- **Types**: `kebab-case` (e.g., `project.ts`, `experience.ts`)
- **Styles**: `kebab-case` (e.g., `globals.css`, `animations.css`)

### Code
- **Components**: `PascalCase` (e.g., `export function HeroSection()`)
- **Functions**: `camelCase` (e.g., `validateEmail`, `generateMetadata`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `SITE_CONFIG`, `API_ENDPOINTS`)
- **Types/Interfaces**: `PascalCase` (e.g., `Project`, `Experience`, `SkillCardProps`)
- **CSS Classes**: `kebab-case` via Tailwind (e.g., `section-container`, `btn-primary`)

## Component Organization

### Common Components
Layout components used across all pages:
- `Header` - Site header wrapper
- `Navigation` - Main navigation with mobile menu
- `Footer` - Site footer with social links

### Section Components
Full-width page sections:
- `HeroSection` - Hero banner with CTA
- `ProjectsSection` - Projects grid
- `SkillsSection` - Skills organized by category
- `ExperienceSection` - Work experience timeline
- `AboutSection` - About/bio section
- `ContactSection` - Contact form
- `TestimonialsSection` - Client testimonials

### Card Components
Reusable card layouts:
- `ProjectCard` - Project display with tags & links
- `SkillCard` - Skill with proficiency level
- `ExperienceCard` - Experience item with timeline marker

## Import Strategy

All components are centrally exported through `components/index.ts`:

```typescript
import { 
  HeroSection, 
  ProjectCard, 
  Button 
} from '@/components';
```

## Type System

TypeScript types are organized by domain:
- `types/index.ts` - Common shared types
- `types/project.ts` - Project-related types
- `types/experience.ts` - Experience-related types
- `types/skill.ts` - Skill-related types

## Utilities Organization

### `lib/utils.ts`
General-purpose utilities:
- `cn()` - Tailwind class merging
- `debounce()`, `throttle()` - Performance utilities
- `formatDate()`, `truncate()` - String utilities

### `lib/constants.ts`
Application-wide constants:
- `SITE_CONFIG` - Site metadata
- `NAV_ITEMS` - Navigation structure
- `API_ENDPOINTS` - API routes
- `RATE_LIMITS` - Rate limiting config

### `lib/api-client.ts`
API communication:
- `apiClient()` - Generic fetch wrapper
- `submitContactForm()` - Contact form submission
- `subscribeToNewsletter()` - Newsletter subscription
- `fetchProjects()` - Project data fetching

### `lib/animations.ts`
Framer Motion presets:
- `fadeInUp`, `fadeIn` - Fade animations
- `scaleIn`, `slideInRight` - Transform animations
- `staggerContainer` - Stagger children
- `hoverScale` - Hover effects

### `lib/validations.ts`
Form validation:
- `validateEmail()` - Email format validation
- `validateContactForm()` - Contact form validation
- `validateNewsletterForm()` - Newsletter form validation

## Content Management

Static content is stored in JSON files under `content/`:
- `projects.json` - Portfolio projects
- `experience.json` - Work history
- `skills.json` - Technical skills

Future expansion can include MDX files for blog posts.

## Styling Strategy

### Global Styles
- `styles/globals.css` - Base styles, CSS variables, utility classes
- `styles/tailwind.css` - Tailwind imports
- `styles/animations.css` - Custom keyframe animations

### Component Styles
Components use Tailwind utility classes with the `cn()` helper for conditional styling.

## API Routes

### POST /api/contact
Contact form submission with rate limiting and email delivery.

### POST /api/subscribe
Newsletter subscription with Mailchimp integration.

### GET /api/projects
Projects data with ISR (Incremental Static Regeneration).

## Best Practices

1. **Colocation**: Keep related files together (e.g., card components in `cards/`)
2. **Centralized Exports**: Use `components/index.ts` for cleaner imports
3. **Type Safety**: Define props interfaces for all components
4. **Accessibility**: Include ARIA labels, semantic HTML, keyboard navigation
5. **Performance**: Use `OptimizedImage`, dynamic imports, code splitting
6. **SEO**: Implement structured data, metadata, sitemaps
7. **Error Handling**: Comprehensive validation and error tracking

## Migration from Old Structure

Key changes from the original structure:
- `components/header/Navbar.tsx` → `components/common/Navigation.tsx`
- `components/hero/Hero.tsx` → `components/sections/HeroSection.tsx`
- `components/timeline/ExperienceItem.tsx` → `components/cards/ExperienceCard.tsx`
- `app/globals.css` → `styles/globals.css`
- Added `lib/constants.ts`, `lib/utils.ts`, `lib/api-client.ts`, `lib/animations.ts`
- Added `types/` directory with domain-specific type definitions
- Added `content/` directory with JSON data files

## Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run format       # Format with Prettier
```

## Next Steps

1. Populate `content/*.json` with real data
2. Add blog posts as MDX files in `content/blog/`
3. Replace placeholder images in `public/images/`
4. Configure environment variables in `.env.local`
5. Set up CI/CD pipeline
6. Deploy to Vercel or your preferred hosting platform

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
