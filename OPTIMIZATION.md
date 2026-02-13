# Performance, SEO & Accessibility Optimizations

## Overview
This document describes the comprehensive optimizations implemented for performance, SEO, and accessibility (WCAG 2.1 AA compliance).

---

## Performance Optimizations

### Image Optimization
- **OptimizedImage Component** (`components/ui/OptimizedImage.tsx`)
  - Wraps Next.js Image component with automatic WebP conversion
  - Implements responsive srcSet with intelligent size hints
  - Lazy loading for below-the-fold images (priority prop for above-the-fold)
  - Blur placeholder for smooth loading experience
  - Quality optimization (85% default for balance)

**Usage:**
\`\`\`tsx
import { OptimizedImage } from '@/components';

<OptimizedImage
  src="/projects/project-1.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false} // true for above-the-fold
  responsive={true} // adaptive sizes
/>
\`\`\`

### Code Splitting
- **Dynamic Imports** for heavy components:
  - Modal: `components/overlay/ModalLazy.tsx`
  - Toast: `components/ui/ToastLazy.tsx`
  - Suspense boundaries with loading states
  - Route-based splitting (automatic in Next.js App Router)

**Usage:**
\`\`\`tsx
// Lazy loaded with Suspense
import { Modal } from '@/components/overlay/ModalLazy';
\`\`\`

### Core Web Vitals Monitoring
- **Performance Tracking** (`lib/performance.ts`)
  - Captures LCP, FID, CLS, TTFB
  - Console logging in development
  - Analytics endpoint ready for production

**Integration:**
\`\`\`tsx
// In app/layout.tsx or _app.tsx
import { reportWebVitals } from '@/lib/performance';
export { reportWebVitals };
\`\`\`

### Targets
- **Performance:** 90+
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

---

## iPad Optimization

### Viewport Configuration
Ensures proper rendering on iPad devices with notches and various screen sizes.

**In `app/layout.tsx` head:**
```html
<meta 
  name="viewport" 
  content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
/>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

### Touch-Friendly UI
- **Minimum Tap Target:** 44×44px (Apple HIG standard)
- **Recommended:** 48×50px for better usability
- **Padded Buttons:** 12px padding minimum

**Implementation in components:**
```tsx
// Button component example
<button className="px-4 py-3 min-h-[44px] min-w-[44px] rounded-lg">
  Touch Target
</button>

// Link components
<a className="py-2 px-3 min-h-[44px] inline-flex items-center">
  Touchable Link
</a>
```

### Responsive Breakpoints for iPad

**Tailwind Configuration overrides in `tailwind.config.ts`:**
```typescript
screens: {
  'sm': '640px',    // Mobile
  'md': '768px',    // iPad Mini/iPad (9.7")
  'lg': '1024px',   // iPad Pro (10.5" - 11")
  'xl': '1280px',   // iPad Pro (12.9")
  'tablet': { 'raw': '(min-width: 768px) and (max-width: 1024px)' },
  'landscape': { 'raw': '(max-height: 500px)' },
}
```

**Usage in components:**
```tsx
// Responsive grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// iPad-specific layout
<div className="hidden tablet:flex flex-row gap-6">
  {/* iPad layout */}
</div>
```

### Orientation Handling

**CSS for landscape prevention (if needed):**
```css
/* Prevent landscape viewing on small tablets */
@media (max-height: 500px) {
  .hero { min-height: auto; }
  .section { padding: 2rem 1rem; }
}
```

**JavaScript for orientation detection:**
```typescript
const handleOrientationChange = () => {
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  // Adjust layout based on orientation
};

window.addEventListener('orientationchange', handleOrientationChange);
```

### Font Sizing for Tablet

**iPad-specific font sizes in `tailwind.config.ts`:**
```typescript
fontSize: {
  // Mobile-first base
  'heroNameMobile': ['2.5rem', { lineHeight: '1.1' }],
  'sectionHeadingMobile': ['1.5rem', { lineHeight: '1.2' }],
  
  // md: breakpoint (iPad)
  'hereName': ['3.5rem', { lineHeight: '1.1' }],
  'sectionHeading': ['2rem', { lineHeight: '1.2' }],
  
  // lg: breakpoint (iPad Pro)
  'heroNameLg': ['4rem', { lineHeight: '1.1' }],
  'sectionHeadingLg': ['2.5rem', { lineHeight: '1.2' }],
}
```

### iPad-Specific Touch Events

**Touch handling in interactive components:**
```typescript
// Prevent 300ms touch delay on buttons
const handleTouchStart = (e: React.TouchEvent) => {
  e.preventDefault();
};

const handleTouchEnd = (e: React.TouchEvent) => {
  // Trigger action immediately without 300ms delay
  handleAction();
};

// Usage
<button 
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  className="cursor-pointer"
>
  Touch Action
</button>
```

### Safe Area Considerations

**Handle notches and safe areas (iPad Pro with Face ID):**
```css
/* In globals.css or component styles */
.safe-area-padding {
  padding-top: max(12px, env(safe-area-inset-top));
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  padding-left: max(12px, env(safe-area-inset-left));
  padding-right: max(12px, env(safe-area-inset-right));
}
```

**Usage in fixed headers/footers:**
```tsx
<header className="fixed top-0 w-full safe-area-padding bg-primary">
  {/* Header content */}
</header>
```

### iPad Input Optimization

**Form inputs for iPad:**
```html
<!-- Proper input types prevent auto-capitalization issues -->
<input 
  type="email" 
  inputMode="email"
  className="py-3 px-4"
  placeholder="Email address"
/>

<!-- Disable auto-zoom on input focus -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
```

### Performance for iPad

**iPad-specific performance considerations:**
- Reduce animation complexity on older iPad models
- Use hardware acceleration for smooth scrolling
  ```css
  .animated-element {
    transform: translateZ(0); /* GPU acceleration */
    will-change: transform;
  }
  ```
- Optimize image sizes for iPad's retina displays
- Monitor memory usage for large lists (use virtualization)

### iPad Testing Checklist

- ✅ Test on iPad (9.7"), iPad Air, iPad Mini, iPad Pro
- ✅ Test in both portrait and landscape orientations
- ✅ Verify tap targets are ≥44×44px
- ✅ Test touch scrolling performance
- ✅ Check form input behavior and keyboard
- ✅ Verify layout at different viewport widths
- ✅ Check viewport-fit safe areas
- ✅ Test with iPad navigation gestures
- ✅ Performance check with DevTools throttling

### iPad Testing Tools

```bash
# Chrome DevTools
# 1. Press F12 or Cmd+Option+I
# 2. Click device toolbar icon (Ctrl+Shift+M)
# 3. Select iPad from device list
# 4. Test orientation switching

# Safari on macOS with iPad simulation
# Develop menu > Enter responsive design mode
```

---

## SEO Optimization

### Metadata Management
- **SEO Utilities** (`lib/seo.ts`)
  - Centralized site configuration
  - Per-page metadata generation
  - Open Graph and Twitter Card support
  - Canonical URLs
  - Robots meta tags

**Usage:**
\`\`\`tsx
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Projects',
  description: 'View my portfolio of AI/ML projects',
  url: '/projects',
  image: 'https://example.com/projects-og.jpg',
});
\`\`\`

### Structured Data (Schema.org)
- **Schemas** (`lib/structured-data.ts`):
  - Person schema (homepage)
  - Project/CreativeWork schema
  - Article schema
  - Breadcrumb schema

**Usage:**
\`\`\`tsx
import { StructuredData } from '@/components/seo/StructuredData';
import { generatePersonSchema } from '@/lib/structured-data';

const personSchema = generatePersonSchema({
  name: 'Your Name',
  jobTitle: 'Senior AI/ML Engineer',
  description: 'Expert in...',
  image: 'https://example.com/profile.jpg',
  url: 'https://example.com',
  sameAs: ['https://github.com/...', 'https://linkedin.com/...'],
});

// In your component
<StructuredData data={personSchema} />
\`\`\`

### Sitemap & Robots
- **Sitemap** (`app/sitemap.ts`): Auto-generated XML sitemap
- **Robots.txt** (`public/robots.txt`): Crawler directives
- **Manifest** (`app/manifest.ts`): PWA configuration

### SEO Checklist
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5
- ✅ Alt text for images

**Target:** SEO Score 100

---

## Accessibility (WCAG 2.1 AA)

### Skip Link
- **SkipLink Component** (`components/a11y/SkipLink.tsx`)
  - Hidden but accessible
  - Visible on keyboard focus
  - Jumps to main content
  - Smooth scroll behavior

### Semantic HTML
- Proper heading hierarchy (H1 → H6)
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<button>` for actions, `<a>` for navigation
- Form labels with `htmlFor` and `id` matching

### ARIA Enhancements
- **Navbar:**
  - `aria-label` on nav element
  - `aria-current="page"` for active links
  - `aria-expanded` on menu button
  - `aria-controls` linking button to menu
  - `role="dialog"` and `aria-modal` on mobile menu

- **Modal:**
  - `role="dialog"` and `aria-modal="true"`
  - `aria-labelledby` pointing to title
  - Focus trap (Tab cycles within modal)
  - Escape key closes
  - Body scroll lock when open
  - Focus restoration on close

- **Toast:**
  - `role="alert"`
  - `aria-live="polite"`
  - `aria-atomic="true"`
  - Auto-dismiss with screen reader announcement

- **Button:**
  - `aria-busy` for loading state
  - `aria-disabled` for disabled state
  - `aria-hidden` for decorative icons

### Keyboard Navigation
- All interactive elements reachable via Tab
- Logical tab order (visual flow)
- Escape closes modals and menus
- Enter activates buttons and links
- Focus trap in modals
- Visible focus indicators (`:focus-visible`)

### Focus Management
- Custom focus styles with 2px outline and offset
- High contrast accent color (#06b6d4)
- Skip-to-content visible on focus
- Focus restoration after modal close
- Proper tab index management

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum
- Testing with tools:
  - Chrome DevTools (Lighthouse)
  - axe DevTools extension
  - WAVE browser extension

### Screen Reader Support
- Descriptive alt text for all images
- ARIA labels for icon-only buttons
- Live regions for dynamic content
- Semantic HTML for structure
- Skip link for main content

### Accessibility Checklist
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus indicators visible
- ✅ Color contrast (4.5:1 text, 3:1 UI)
- ✅ Screen reader tested
- ✅ ARIA labels and roles
- ✅ Semantic HTML structure
- ✅ Form labels and error messages
- ✅ Skip to main content link
- ✅ Alt text for images
- ✅ Focus trap in modals
- ✅ No keyboard traps (unless intentional)

**Target:** Accessibility Score 95+

---

## Testing Checklist

### Automated Testing
\`\`\`bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:3000 --view

# Or use Chrome DevTools > Lighthouse
\`\`\`

### Manual Testing
- **Keyboard:** Tab through all interactive elements
- **Screen Reader:** Test with NVDA (Windows) or VoiceOver (Mac)
- **Color Contrast:** Use DevTools color picker
- **Zoom:** Test at 200% zoom level
- **Mobile:** Test responsive design and touch targets

### Browser Extensions
- axe DevTools (accessibility auditing)
- WAVE (accessibility evaluation)
- Lighthouse (performance, SEO, accessibility)

---

## File Structure

\`\`\`
lib/
  seo.ts                    # Metadata utilities
  structured-data.ts        # Schema.org generators
  performance.ts            # Web Vitals tracking

components/
  seo/
    StructuredData.tsx      # JSON-LD wrapper
  a11y/
    SkipLink.tsx            # Skip to content
  ui/
    OptimizedImage.tsx      # Image optimization
    ScrollProgress.tsx      # Scroll indicator (client)
  overlay/
    Modal.tsx               # Enhanced modal
    ModalLazy.tsx           # Lazy-loaded modal
  feedback/
    Toast.tsx               # Accessible toasts

app/
  sitemap.ts                # Auto-generated sitemap
  manifest.ts               # PWA manifest
  layout.tsx                # Enhanced with SEO + A11y

public/
  robots.txt                # Crawler directives
\`\`\`

---

## Next Steps

1. **Add Images:** Place optimized images in `/public` folder
2. **Update URLs:** Replace `https://example.com` in `lib/seo.ts`
3. **Add Analytics:** Implement Web Vitals endpoint in `lib/performance.ts`
4. **Test Accessibility:** Run Lighthouse and axe DevTools
5. **Generate OG Images:** Create 1200x630px Open Graph images
6. **Add Real Content:** Replace placeholder text with actual content

---

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
