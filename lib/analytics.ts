'use client';

/**
 * Analytics event tracking
 * Works with Vercel Analytics, Google Analytics, Plausible, etc.
 */

export type AnalyticsEvent =
  | 'project_clicked'
  | 'resume_downloaded'
  | 'contact_form_submitted'
  | 'newsletter_subscribed'
  | 'social_link_clicked'
  | 'external_link_clicked';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track custom events
 */
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  // Vercel Analytics
  if (typeof window !== 'undefined' && 'va' in window) {
    // @ts-ignore - Vercel Analytics global
    window.va('track', event, properties);
  }

  // Google Analytics (gtag)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - Google Analytics global
    window.gtag('event', event, properties);
  }

  // Plausible Analytics
  if (typeof window !== 'undefined' && 'plausible' in window) {
    // @ts-ignore - Plausible global
    window.plausible(event, { props: properties });
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('📊 Analytics Event:', event, properties);
  }
}

/**
 * Track project clicks
 */
export function trackProjectClick(projectId: string | number, projectTitle: string) {
  trackEvent('project_clicked', {
    project_id: projectId,
    project_title: projectTitle,
  });
}

/**
 * Track resume downloads
 */
export function trackResumeDownload() {
  trackEvent('resume_downloaded', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track contact form submissions
 */
export function trackContactFormSubmit(success: boolean) {
  trackEvent('contact_form_submitted', {
    success,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track newsletter subscriptions
 */
export function trackNewsletterSubscribe(success: boolean) {
  trackEvent('newsletter_subscribed', {
    success,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track social link clicks
 */
export function trackSocialLinkClick(platform: string, url: string) {
  trackEvent('social_link_clicked', {
    platform,
    url,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLinkClick(url: string, context?: string) {
  trackEvent('external_link_clicked', {
    url,
    context: context || 'unknown',
  });
}
