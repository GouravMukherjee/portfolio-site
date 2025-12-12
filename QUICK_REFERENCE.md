# Quick Reference - Portfolio Site Structure

## 📁 Directory Tree (Key Files Only)

```
portfolio-site/
│
├── 📄 Configuration & Docs
│   ├── README.md                    # Main documentation
│   ├── PROJECT_STRUCTURE.md         # Complete structure guide
│   ├── REORGANIZATION_SUMMARY.md    # What changed
│   ├── API_DOCUMENTATION.md         # API reference
│   ├── BACKEND_IMPLEMENTATION.md    # Backend guide
│   ├── OPTIMIZATION.md              # Performance & SEO
│   ├── package.json                 # Dependencies
│   ├── tsconfig.json                # TypeScript config
│   ├── tailwind.config.ts           # Tailwind config
│   ├── .env.example                 # Environment template
│   └── .github/copilot-instructions.md
│
├── 🎨 App Directory (Next.js 14)
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   ├── sitemap.ts                   # SEO sitemap
│   ├── robots.ts                    # Robots.txt
│   ├── manifest.ts                  # PWA manifest
│   └── api/
│       ├── contact/route.ts         # Contact form API
│       ├── subscribe/route.ts       # Newsletter API
│       └── projects/route.ts        # Projects API
│
├── 🧩 Components (Organized by Category)
│   ├── index.ts                     # ⭐ Central exports
│   │
│   ├── common/                      # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   │
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   ├── cards/                       # Reusable cards
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   └── ExperienceCard.tsx
│   │
│   ├── ui/                          # UI primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── OptimizedImage.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Divider.tsx
│   │
│   ├── animations/                  # Animation wrappers
│   │   ├── FadeInUp.tsx
│   │   └── ScaleIn.tsx
│   │
│   ├── feedback/                    # User feedback
│   │   └── Toast.tsx
│   │
│   ├── overlay/                     # Overlay components
│   │   ├── Modal.tsx
│   │   └── ModalLazy.tsx
│   │
│   ├── layout/                      # Layout utilities
│   │   └── SectionContainer.tsx
│   │
│   ├── a11y/                        # Accessibility
│   │   └── SkipLink.tsx
│   │
│   ├── seo/                         # SEO components
│   │   └── StructuredData.tsx
│   │
│   ├── analytics/                   # Analytics
│   │   └── AnalyticsProvider.tsx
│   │
│   ├── code/                        # Code display
│   │   └── CodeBlock.tsx
│   │
│   ├── form/                        # Form components
│   │   └── index.tsx
│   │
│   └── examples/                    # Usage examples
│       ├── ContactFormExample.tsx
│       ├── NewsletterForm.tsx
│       └── TrackedLinks.tsx
│
├── 🔧 Lib (Utilities & Helpers)
│   ├── utils.ts                     # ⭐ General utilities
│   ├── constants.ts                 # ⭐ App constants
│   ├── api-client.ts                # ⭐ API helpers
│   ├── animations.ts                # ⭐ Motion variants
│   ├── validations.ts               # ⭐ Form validation
│   ├── seo.ts                       # SEO utilities
│   ├── structured-data.ts           # Schema.org
│   ├── performance.ts               # Web Vitals
│   ├── api-utils.ts                 # API utilities
│   ├── rate-limit.ts                # Rate limiting
│   ├── env.ts                       # Environment vars
│   ├── error-tracking.ts            # Sentry
│   └── analytics.ts                 # Analytics tracking
│
├── 📝 Types (TypeScript Definitions)
│   ├── index.ts                     # ⭐ Common types
│   ├── project.ts                   # Project types
│   ├── experience.ts                # Experience types
│   └── skill.ts                     # Skill types
│
├── 🎨 Styles (Global CSS)
│   ├── globals.css                  # ⭐ Base styles
│   ├── tailwind.css                 # Tailwind imports
│   └── animations.css               # Custom animations
│
├── 📚 Content (Data & Blog)
│   ├── projects.json                # ⭐ Projects data
│   ├── experience.json              # ⭐ Experience data
│   ├── skills.json                  # ⭐ Skills data
│   └── blog/                        # Blog posts (MDX)
│
└── 🖼️ Public (Static Assets)
    ├── images/
    │   ├── hero/
    │   ├── projects/
    │   └── og-images/
    ├── fonts/
    ├── icons/
    └── robots.txt
```

## 🚀 Quick Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server

# Quality Checks
npm run lint             # ESLint
npm run type-check       # TypeScript
npm run format           # Prettier (if configured)

# Testing
npm test                 # Run tests (when configured)
```

## 📦 Key Imports

```typescript
// Components (barrel exports)
import { 
  HeroSection,
  ProjectsSection,
  Navigation,
  ProjectCard,
  Button 
} from '@/components';

// Utilities
import { cn, debounce, formatDate } from '@/lib/utils';
import { SITE_CONFIG, API_ENDPOINTS } from '@/lib/constants';
import { submitContactForm } from '@/lib/api-client';
import { fadeInUp, scaleIn } from '@/lib/animations';
import { validateEmail } from '@/lib/validations';

// Types
import type { Project, Experience, Skill } from '@/types';
```

## 🎯 Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `HeroSection`, `ProjectCard` |
| Functions | camelCase | `validateEmail`, `debounce` |
| Constants | UPPER_SNAKE_CASE | `SITE_CONFIG`, `API_ENDPOINTS` |
| Types | PascalCase | `Project`, `SkillCardProps` |
| Files (utils) | kebab-case | `api-client.ts`, `rate-limit.ts` |
| CSS classes | kebab-case | `section-container`, `btn-primary` |

## 🔑 Environment Variables

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://yoursite.com

# Email (choose one)
EMAIL_SERVICE_KEY=re_xxx           # Resend
SENDGRID_API_KEY=SG.xxx           # SendGrid
MAILGUN_API_KEY=key-xxx           # Mailgun

# Newsletter
MAILCHIMP_API_KEY=xxx
MAILCHIMP_AUDIENCE_ID=xxx
MAILCHIMP_SERVER_PREFIX=us1

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-xxx
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yoursite.com

# Error Tracking (optional)
NEXT_PUBLIC_SENTRY_DSN=xxx
SENTRY_AUTH_TOKEN=xxx
```

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Main project overview & quick start |
| PROJECT_STRUCTURE.md | Complete structure documentation (8000+ words) |
| REORGANIZATION_SUMMARY.md | What changed during reorganization |
| API_DOCUMENTATION.md | API endpoints reference |
| BACKEND_IMPLEMENTATION.md | Backend implementation guide |
| OPTIMIZATION.md | Performance & SEO optimizations |

## ✅ Quality Status

```bash
✅ TypeScript: 0 errors
⚠️  ESLint: 3 warnings (console in error-tracking.ts - acceptable)
✅ Build: Compiles successfully
✅ Structure: Professional organization
✅ Documentation: Complete
```

## 🎨 Tailwind Custom Classes

```css
/* Typography */
.gradient-text        /* Gradient text effect */

/* Effects */
.glass                /* Glassmorphism */
.glow                 /* Glow effect */

/* Layout */
.section-container    /* Standard section wrapper */

/* Animations */
.animate-fade-in-up   /* Fade in from bottom */
.animate-scale-in     /* Scale in */
.animate-shimmer      /* Shimmer loading */

/* Buttons */
.btn-primary          /* Primary button */
.btn-secondary        /* Secondary button */
.btn-outline          /* Outline button */

/* Cards */
.card                 /* Standard card */
.badge                /* Badge component */
```

## 🔗 Key Paths

```typescript
// Commonly accessed files
app/layout.tsx                          // Root layout
app/page.tsx                            // Home page
components/index.ts                     // Component exports
lib/constants.ts                        // Site config
types/index.ts                          // Common types
content/projects.json                   // Projects data
styles/globals.css                      // Global styles
```

## 📱 Responsive Breakpoints

```typescript
// From lib/constants.ts
SM: 640px   // Small devices
MD: 768px   // Medium devices  
LG: 1024px  // Large devices
XL: 1280px  // Extra large
2XL: 1536px // 2X Extra large
```

## 🎭 Component Pattern

```typescript
// Standard component structure
export type ComponentNameProps = {
  prop1: string;
  prop2?: number;
};

export function ComponentName({ 
  prop1, 
  prop2 = defaultValue 
}: ComponentNameProps) {
  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
}

// Export as default for dynamic imports
export default ComponentName;
```

## 🚦 Getting Started Checklist

- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add API keys to `.env.local`
- [ ] Update `content/*.json` with your data
- [ ] Replace placeholder images in `public/`
- [ ] Customize `lib/constants.ts` (SITE_CONFIG)
- [ ] Run `npm run dev` to start development
- [ ] Run `npm run lint` and `npm run type-check`
- [ ] Build for production with `npm run build`
- [ ] Deploy to Vercel or your preferred host

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- See PROJECT_STRUCTURE.md for detailed documentation

---

**Last Updated:** Project reorganization complete
**Status:** ✅ Production ready
**TypeScript Errors:** 0
**ESLint Errors:** 0 (3 acceptable warnings)
