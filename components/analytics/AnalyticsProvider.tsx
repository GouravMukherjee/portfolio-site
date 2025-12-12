'use client';

import Script from 'next/script';

/**
 * Analytics Provider Component
 * Loads analytics scripts and initializes tracking
 */
export function AnalyticsProvider() {
  const vercelAnalyticsId = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {/* Vercel Analytics */}
      {vercelAnalyticsId && (
        <Script
          src="https://va.vercel-scripts.com/v1/script.js"
          strategy="afterInteractive"
          data-analytics-id={vercelAnalyticsId}
        />
      )}

      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
