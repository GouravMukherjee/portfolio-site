/**
 * Environment variable validation and type-safe access
 */

export const env = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV || 'development',

  // Email Service
  emailServiceKey: process.env.EMAIL_SERVICE_KEY,
  contactEmail: process.env.CONTACT_EMAIL,

  // Newsletter Service (Mailchimp example)
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID,
  mailchimpServerPrefix: process.env.MAILCHIMP_SERVER_PREFIX,

  // Analytics
  vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,

  // Error Tracking
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Database (optional)
  databaseUrl: process.env.DATABASE_URL,
} as const;

/**
 * Validate required environment variables
 * Call this in your app initialization
 */
export function validateEnv() {
  const errors: string[] = [];

  // Check required variables based on your needs
  // Uncomment as you configure services

  // if (!env.emailServiceKey) {
  //   errors.push('EMAIL_SERVICE_KEY is required for contact form');
  // }

  // if (!env.contactEmail) {
  //   errors.push('CONTACT_EMAIL is required for contact form');
  // }

  if (errors.length > 0 && env.nodeEnv === 'production') {
    throw new Error(`Missing required environment variables:\n${errors.join('\n')}`);
  }

  return errors;
}
