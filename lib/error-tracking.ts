/**
 * Sentry Integration for Error Tracking
 * Install: npm install @sentry/nextjs
 */

export function initSentry() {
  // Only initialize in production
  if (process.env.NODE_ENV !== 'production') {
    return undefined;
  }

  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) {
    // eslint-disable-next-line no-console
    console.warn('Sentry DSN not configured');
    return undefined;
  }

  // Uncomment and configure when you install @sentry/nextjs
  // import * as Sentry from '@sentry/nextjs';
  //
  // Sentry.init({
  //   dsn,
  //   environment: process.env.NODE_ENV,
  //   tracesSampleRate: 0.1,
  //   beforeSend(event, hint) {
  //     // Filter out specific errors if needed
  //     return event;
  //   },
  // });

  return undefined;
}

/**
 * Capture exception manually
 */
export function captureException(error: unknown, context?: Record<string, unknown>) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error('Error:', error, context);
    return undefined;
  }

  // Send to Sentry in production
  // if (typeof window !== 'undefined' && window.Sentry) {
  //   window.Sentry.captureException(error, { contexts: { custom: context } });
  // }

  return undefined;
}

/**
 * Capture message manually
 */
export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    if (level === 'info') {
      console.log('Message:', message);
    } else if (level === 'warning') {
      console.warn('Message:', message);
    } else {
      console.error('Message:', message);
    }
    return undefined;
  }

  // Send to Sentry in production
  // if (typeof window !== 'undefined' && window.Sentry) {
  //   window.Sentry.captureMessage(message, level);
  // }

  return undefined;
}
