import { NextRequest } from 'next/server';

/**
 * Get client IP address from request
 * Handles various proxy headers
 */
export function getClientIp(request: NextRequest): string {
  // Check common proxy headers
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback to connection IP (may not work in all environments)
  return request.ip || 'unknown';
}

/**
 * Create standardized API response
 */
export function createApiResponse<T>(
  data: T,
  status: number = 200,
  headers?: Record<string, string>,
) {
  return Response.json(data, {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

/**
 * Create error response
 */
export function createErrorResponse(message: string, status: number = 400) {
  return createApiResponse(
    {
      success: false,
      error: message,
    },
    status,
  );
}

/**
 * Handle API errors with proper logging
 */
export function handleApiError(error: unknown): Response {
  // Log error (in production, send to error tracking service)
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error('API Error:', error);
  }

  // Send to Sentry in production
  if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
    // Sentry.captureException(error);
  }

  const message =
    error instanceof Error ? error.message : 'An unexpected error occurred';

  return createErrorResponse(message, 500);
}

/**
 * CORS headers for API routes
 */
export const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

/**
 * Handle OPTIONS requests for CORS preflight
 */
export function handleCorsPrelight() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
