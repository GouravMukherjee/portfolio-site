import { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { validateContactForm, type ContactFormData } from '@/lib/validation';
import {
  getClientIp,
  createApiResponse,
  handleApiError,
  corsHeaders,
  handleCorsPrelight,
} from '@/lib/api-utils';

/**
 * Send email via Resend API
 * Replace with your preferred email service (SendGrid, Mailgun, etc.)
 */
async function sendEmail(data: ContactFormData) {
  const apiKey = process.env.EMAIL_SERVICE_KEY;

  if (!apiKey) {
    throw new Error('Email service not configured');
  }

  // Example using Resend API
  // Install: npm install resend
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <noreply@yourdomain.com>',
      to: process.env.CONTACT_EMAIL || 'gouravmukherjee058@gmail.com',
      reply_to: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}

/**
 * POST /api/contact
 * Handle contact form submissions with rate limiting and validation
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Rate limiting: 1 request per 60 seconds
    const rateLimit = checkRateLimit(clientIp, {
      maxRequests: 1,
      windowMs: 60 * 1000,
    });

    if (!rateLimit.success) {
      const retryAfter = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
      return createApiResponse(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfter,
        },
        429,
        {
          'Retry-After': retryAfter.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          ...corsHeaders,
        },
      );
    }

    // Parse request body
    const body = (await request.json()) as ContactFormData;

    // Validate form data
    const validation = validateContactForm(body);
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

    // Send email
    await sendEmail(body);

    // Optional: Store submission in database
    // await prisma.contactSubmission.create({ data: body });

    return createApiResponse(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      200,
      {
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        ...corsHeaders,
      },
    );
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * OPTIONS /api/contact
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return handleCorsPrelight();
}
