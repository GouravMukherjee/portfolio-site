import { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { validateNewsletterForm, type NewsletterFormData } from '@/lib/validation';
import {
  getClientIp,
  createApiResponse,
  handleApiError,
  corsHeaders,
  handleCorsPrelight,
} from '@/lib/api-utils';

/**
 * Subscribe to newsletter via Mailchimp API
 * Replace with your preferred service (Substack, ConvertKit, etc.)
 */
async function subscribeToNewsletter(data: NewsletterFormData) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us1"

  if (!apiKey || !audienceId || !serverPrefix) {
    throw new Error('Newsletter service not configured');
  }

  // Example using Mailchimp API
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName || '',
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    // Handle duplicate subscription gracefully
    if (error.title === 'Member Exists') {
      return { alreadySubscribed: true };
    }
    throw new Error(`Failed to subscribe: ${error.title}`);
  }

  return response.json();
}

/**
 * POST /api/subscribe
 * Handle newsletter subscription with rate limiting
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Rate limiting: 3 requests per 60 seconds
    const rateLimit = checkRateLimit(`newsletter:${clientIp}`, {
      maxRequests: 3,
      windowMs: 60 * 1000,
    });

    if (!rateLimit.success) {
      const retryAfter = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
      return createApiResponse(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
        },
        429,
        {
          'Retry-After': retryAfter.toString(),
          ...corsHeaders,
        },
      );
    }

    // Parse request body
    const body = (await request.json()) as NewsletterFormData;

    // Validate form data
    const validation = validateNewsletterForm(body);
    if (!validation.valid) {
      return createApiResponse(
        {
          success: false,
          errors: validation.errors,
        },
        400,
        corsHeaders,
      );
    }

    // Subscribe to newsletter
    const result = await subscribeToNewsletter(body);

    if ('alreadySubscribed' in result && result.alreadySubscribed) {
      return createApiResponse(
        {
          success: true,
          message: 'You are already subscribed to our newsletter!',
        },
        200,
        corsHeaders,
      );
    }

    return createApiResponse(
      {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      },
      200,
      corsHeaders,
    );
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * OPTIONS /api/subscribe
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return handleCorsPrelight();
}
