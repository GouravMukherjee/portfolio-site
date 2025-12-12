# Backend API Documentation

## Overview
This document describes all backend API routes, integrations, and usage examples for the portfolio site.

---

## API Routes

### 1. Contact Form API

**Endpoint:** `POST /api/contact`

**Description:** Handle contact form submissions with email delivery, validation, and rate limiting.

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a potential collaboration..."
}
\`\`\`

**Validation Rules:**
- `name`: Required, max 100 characters
- `email`: Required, valid email format
- `subject`: Required, max 200 characters
- `message`: Required, min 10 characters, max 5000 characters

**Rate Limiting:**
- 1 request per 60 seconds per IP address
- Returns 429 status code if exceeded

**Success Response (200):**
\`\`\`json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
\`\`\`

**Error Response (400):**
\`\`\`json
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Invalid email format" },
    { "field": "message", "message": "Message must be at least 10 characters" }
  ]
}
\`\`\`

**Rate Limit Response (429):**
\`\`\`json
{
  "success": false,
  "error": "Too many requests. Please try again later.",
  "retryAfter": 45
}
\`\`\`

**Usage Example:**
\`\`\`tsx
import { ContactFormExample } from '@/components/examples/ContactFormExample';

export default function ContactPage() {
  return <ContactFormExample />;
}
\`\`\`

---

### 2. Newsletter Subscription API

**Endpoint:** `POST /api/subscribe`

**Description:** Subscribe email to newsletter via Mailchimp (or alternative service).

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",
  "firstName": "John" // optional
}
\`\`\`

**Validation Rules:**
- `email`: Required, valid email format
- `firstName`: Optional, max 50 characters

**Rate Limiting:**
- 3 requests per 60 seconds per IP address

**Success Response (200):**
\`\`\`json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}
\`\`\`

**Already Subscribed Response (200):**
\`\`\`json
{
  "success": true,
  "message": "You are already subscribed to our newsletter!"
}
\`\`\`

**Usage Example:**
\`\`\`tsx
import { NewsletterForm } from '@/components/examples/NewsletterForm';

export default function Footer() {
  return (
    <div>
      <h3>Subscribe to Newsletter</h3>
      <NewsletterForm />
    </div>
  );
}
\`\`\`

---

### 3. Projects API

**Endpoint:** `GET /api/projects`

**Description:** Fetch projects with optional filtering and ISR caching.

**Query Parameters:**
- `featured` (optional): Filter featured projects (`?featured=true`)
- `limit` (optional): Limit number of results (`?limit=3`)

**Success Response (200):**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Neural Network Optimization Framework",
      "description": "Reduced training time by 40%...",
      "tags": ["Python", "PyTorch", "CUDA"],
      "image": "/projects/project-1.jpg",
      "github": "https://github.com/username/project",
      "demo": "https://demo.example.com",
      "featured": true,
      "metrics": {
        "performance": "40% faster training",
        "impact": "100K+ model downloads"
      }
    }
  ],
  "count": 1
}
\`\`\`

**Caching:**
- ISR (Incremental Static Regeneration) with 60-second revalidation
- Cache-Control: `public, s-maxage=60, stale-while-revalidate=120`

**Usage Example:**
\`\`\`tsx
// Server Component
export default async function ProjectsPage() {
  const response = await fetch('http://localhost:3000/api/projects?featured=true');
  const { data } = await response.json();
  
  return (
    <div>
      {data.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

// Client Component
'use client';
export function ProjectsClient() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch('/api/projects?limit=3')
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);
  
  return <>{/* render projects */}</>;
}
\`\`\`

---

## Analytics Integration

### Event Tracking

**Available Functions:**
- `trackProjectClick(projectId, projectTitle)`
- `trackResumeDownload()`
- `trackContactFormSubmit(success)`
- `trackNewsletterSubscribe(success)`
- `trackSocialLinkClick(platform, url)`
- `trackExternalLinkClick(url, context)`

**Usage Example:**
\`\`\`tsx
import { trackProjectClick } from '@/lib/analytics';

function ProjectCard({ id, title, url }) {
  return (
    <a href={url} onClick={() => trackProjectClick(id, title)}>
      {title}
    </a>
  );
}
\`\`\`

**Tracked Components:**
\`\`\`tsx
import {
  TrackedProjectLink,
  TrackedResumeLink,
  TrackedSocialLink,
} from '@/components/examples/TrackedLinks';

// Auto-tracked project link
<TrackedProjectLink id={1} title="My Project" href="/projects/1">
  View Project
</TrackedProjectLink>

// Auto-tracked resume download
<TrackedResumeLink href="/resume.pdf">
  Download Resume
</TrackedResumeLink>

// Auto-tracked social link
<TrackedSocialLink platform="GitHub" href="https://github.com/username">
  GitHub
</TrackedSocialLink>
\`\`\`

### Supported Analytics Platforms

**Vercel Analytics** (Automatic with Vercel deployment)
- No configuration needed
- Set `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` if using custom domain

**Google Analytics**
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- Automatically loads gtag.js

**Plausible Analytics** (Privacy-focused)
- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourportfolio.com`
- Automatically loads Plausible script

---

## Error Tracking

### Sentry Integration

**Setup:**
1. Install Sentry: `npm install @sentry/nextjs`
2. Set `NEXT_PUBLIC_SENTRY_DSN` in environment variables
3. Uncomment Sentry initialization in `lib/error-tracking.ts`

**Manual Error Capture:**
\`\`\`tsx
import { captureException, captureMessage } from '@/lib/error-tracking';

try {
  // risky operation
} catch (error) {
  captureException(error, { context: 'additional info' });
}

// Log message
captureMessage('Important event occurred', 'warning');
\`\`\`

---

## Environment Variables

### Required Variables

**Email Service:**
\`\`\`env
EMAIL_SERVICE_KEY=your-resend-api-key
CONTACT_EMAIL=your-email@example.com
\`\`\`

**Newsletter Service (Mailchimp):**
\`\`\`env
MAILCHIMP_API_KEY=your-mailchimp-key
MAILCHIMP_AUDIENCE_ID=your-audience-id
MAILCHIMP_SERVER_PREFIX=us1
\`\`\`

### Optional Variables

**Analytics:**
\`\`\`env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourportfolio.com
\`\`\`

**Error Tracking:**
\`\`\`env
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
\`\`\`

**Database (Optional):**
\`\`\`env
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
\`\`\`

---

## Rate Limiting

### Configuration

**In-Memory Store** (Development):
- Simple Map-based storage
- Resets on server restart
- Suitable for single-instance deployments

**Production Recommendations:**
- Use Redis for distributed rate limiting
- Install: `npm install ioredis`
- Update `lib/rate-limit.ts` to use Redis

### Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| `/api/contact` | 1 request | 60 seconds |
| `/api/subscribe` | 3 requests | 60 seconds |
| `/api/projects` | No limit (cached) | N/A |

---

## Testing

### Local Testing

\`\`\`bash
# Start dev server
npm run dev

# Test contact form
curl -X POST http://localhost:3000/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello World!"}'

# Test newsletter subscription
curl -X POST http://localhost:3000/api/subscribe \\
  -H "Content-Type: application/json" \\
  -d '{"email":"test@example.com"}'

# Test projects API
curl http://localhost:3000/api/projects?featured=true
\`\`\`

### Rate Limit Testing

\`\`\`bash
# Send multiple requests to trigger rate limit
for i in {1..3}; do
  curl -X POST http://localhost:3000/api/contact \\
    -H "Content-Type: application/json" \\
    -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Message $i"}'
done
\`\`\`

---

## Deployment Checklist

- [ ] Set all required environment variables in Vercel/hosting platform
- [ ] Configure email service (Resend, SendGrid, etc.)
- [ ] Set up newsletter service (Mailchimp, etc.)
- [ ] Enable analytics (Vercel Analytics, GA, Plausible)
- [ ] Configure Sentry for error tracking
- [ ] Test all API endpoints in production
- [ ] Verify rate limiting works correctly
- [ ] Test email delivery
- [ ] Verify analytics tracking
- [ ] Check CORS headers if using custom domain

---

## Security Best Practices

1. **Rate Limiting:** Prevents abuse and spam
2. **Input Validation:** All inputs validated before processing
3. **Email Validation:** Regex pattern for valid email format
4. **CORS Headers:** Restrict to your domain in production
5. **Environment Variables:** Never commit sensitive keys to git
6. **Error Messages:** Generic messages to prevent information leakage
7. **HTTPS Only:** Always use HTTPS in production

---

## Troubleshooting

### Common Issues

**Contact form not sending emails:**
- Check `EMAIL_SERVICE_KEY` is set correctly
- Verify email service API is accessible
- Check API logs for error messages

**Rate limiting too strict:**
- Adjust `maxRequests` and `windowMs` in API routes
- Consider using Redis for shared state across instances

**Analytics not tracking:**
- Verify environment variables are prefixed with `NEXT_PUBLIC_`
- Check browser console for script loading errors
- Test in incognito mode (some ad blockers interfere)

**CORS errors:**
- Update `NEXT_PUBLIC_SITE_URL` to match your domain
- Check `corsHeaders` in `lib/api-utils.ts`

---

## Additional Resources

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Resend API](https://resend.com/docs/api-reference)
- [Mailchimp API](https://mailchimp.com/developer/marketing/api/)
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
