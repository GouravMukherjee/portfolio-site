# Portfolio Site

Modern portfolio for Gourav Mukherjee - CS & Linguistics student at SJSU. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, ESLint (Airbnb + TS), and Prettier.

## Stack
- Next.js 14 (App Router) with React 18 and TypeScript (strict)
- Tailwind CSS with a dark, AI/ML-focused theme and utility components
- Framer Motion for micro-interactions and scroll animations
- ESLint (Airbnb + TypeScript) and Prettier (tab width 2, semi, single quotes)

## Getting Started
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Key scripts:
- `npm run dev` — start the dev server at http://localhost:3000
- `npm run lint` — lint with Airbnb + Next rules
- `npm run type-check` — TypeScript without emit
- `npm run build` — production build
- `npm run start` — start the production server

VS Code tasks are available under `.vscode/tasks.json` for dev, lint, and build.

## Theme Tokens
Tailwind `theme.extend` highlights:
- Colors: primary `#0f172a`, charcoal `#1a1a1a`, accent blue `#2563eb`, accent cyan `#06b6d4`, secondary `#7c3aed`, success `#10b981`, error `#ef4444`, warning `#f59e0b`, and neutral scale down to `#0f0f0f`.
- Typography: Inter as primary, Fira Code for code; H1 3.75rem/700, H2 2.25rem/600, H3 1.875rem/600, body 1rem/400, code 0.875rem.
- Radius: sm 0.375rem, base 0.5rem, lg 0.75rem, xl 1rem, full pill.
- Shadows: sm/md/lg/xl/2xl as specified in `tailwind.config.ts`.
- Animation: `fade-in-up` keyframe and utility, `gradient-text`, `glass` effect, and button/card component classes in `app/globals.css`.

## Project Structure

**Professional, scalable organization with clear separation of concerns.**

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for complete documentation.

### Quick Overview
- `app/` — Next.js pages, API routes, metadata (robots.ts, sitemap.ts)
- `components/` — Organized by category with centralized exports
  - `common/` - Header, Footer, Navigation
  - `sections/` - HeroSection, ProjectsSection, SkillsSection, etc.
  - `cards/` - ProjectCard, SkillCard, ExperienceCard
  - `ui/` - Button, Badge, Modal, OptimizedImage
  - `animations/` - FadeInUp, ScaleIn
  - `a11y/` - SkipLink, accessibility utilities
  - `seo/` - StructuredData
  - `analytics/` - AnalyticsProvider
- `lib/` — Utilities organized by function
  - `utils.ts` - General utilities (cn, debounce, formatDate)
  - `constants.ts` - Site config, API endpoints, rate limits
  - `api-client.ts` - API request helpers
  - `animations.ts` - Framer Motion variants
  - `validations.ts` - Form validation
  - `seo.ts`, `structured-data.ts` - SEO utilities
  - `performance.ts` - Web Vitals monitoring
  - `api-utils.ts`, `rate-limit.ts` - API utilities
- `types/` — TypeScript definitions (project, experience, skill)
- `styles/` — Global styles (globals.css, animations.css, tailwind.css)
- `content/` — JSON data (projects, experience, skills)
- `public/` — Static assets (images, fonts, icons)

## Environment Variables
Copy `.env.example` to `.env.local` and fill as needed:
- `NEXT_PUBLIC_ANALYTICS_ID`
- `NEXT_PUBLIC_SENTRY_DSN`
- `EMAIL_API_KEY`
- `RESEND_API_KEY`

## Backend API & Integrations

Production-ready API routes for contact forms, newsletter subscriptions, and analytics. See [BACKEND_IMPLEMENTATION.md](BACKEND_IMPLEMENTATION.md) and [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete details.

### API Endpoints
- **POST /api/contact** - Contact form with email delivery and rate limiting
- **POST /api/subscribe** - Newsletter subscription (Mailchimp/etc)
- **GET /api/projects** - Dynamic projects with ISR caching

### Features
- **Email Service:** Resend/SendGrid/Mailgun integration
- **Analytics:** Vercel Analytics, Google Analytics, Plausible support
- **Rate Limiting:** Prevent abuse (1 req/60s for contact, 3 req/60s for newsletter)
- **Validation:** Comprehensive input validation with error reporting
- **Error Tracking:** Sentry integration ready
- **Event Tracking:** Custom analytics events (project clicks, downloads, form submissions)

### Quick Start
1. Copy `.env.example` to `.env.local`
2. Add your API keys (EMAIL_SERVICE_KEY, MAILCHIMP_API_KEY, etc.)
3. Test locally with provided curl commands
4. Deploy with environment variables configured

## Performance, SEO & Accessibility

This portfolio is optimized for speed, search engines, and accessibility (WCAG 2.1 AA). See [OPTIMIZATION.md](OPTIMIZATION.md) for full details.

### Performance Features
- **Image Optimization:** Next.js Image with WebP, responsive sizes, lazy loading
- **Code Splitting:** Dynamic imports for Modal/Toast with Suspense
- **Core Web Vitals:** Monitoring utilities ready for analytics integration
- **Targets:** Performance 90+, LCP < 2.5s, FID < 100ms, CLS < 0.1

### SEO Features
- **Metadata:** Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data:** Person, Project, Article schemas (JSON-LD)
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots.txt:** Crawler directives in `/public/robots.txt`
- **Target:** SEO Score 100

### Accessibility Features
- **Skip Link:** Jump to main content (keyboard accessible)
- **Semantic HTML:** Proper heading hierarchy, landmarks
- **ARIA:** Labels, roles, live regions for dynamic content
- **Keyboard Navigation:** Full keyboard support, focus traps in modals
- **Focus Indicators:** High-contrast visible outlines
- **Screen Reader:** Tested with descriptive labels and live regions
- **Target:** Accessibility Score 95+

### Testing
```bash
# Lighthouse audit
lighthouse http://localhost:3000 --view

# Or use Chrome DevTools > Lighthouse tab
```

### Quick Wins
1. Add optimized images to `/public` folder
2. Update `lib/seo.ts` with your actual URLs
3. Replace placeholder icons (icon-192.png, icon-512.png)
4. Generate 1200x630px Open Graph images
5. Connect Web Vitals to your analytics endpoint

## Notes
- Fonts are loaded via `next/font` (Inter + Fira Code).
- Prettier is configured with Tailwind class sorting (`prettier-plugin-tailwindcss`).
- The `CodeBlock` currently renders without syntax highlighting; we can add `prismjs` or `highlight.js` on request.
