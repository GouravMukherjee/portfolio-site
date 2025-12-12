import { CONTENT_LIMITS } from './constants';

export type ValidationError = {
  field: string;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
};

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.length > CONTENT_LIMITS.CONTACT_NAME_MAX) {
    errors.push({ 
      field: 'name', 
      message: `Name must be less than ${CONTENT_LIMITS.CONTACT_NAME_MAX} characters` 
    });
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  } else if (data.email.length > CONTENT_LIMITS.CONTACT_EMAIL_MAX) {
    errors.push({ 
      field: 'email', 
      message: `Email must be less than ${CONTENT_LIMITS.CONTACT_EMAIL_MAX} characters` 
    });
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (data.message.length > CONTENT_LIMITS.CONTACT_MESSAGE_MAX) {
    errors.push({ 
      field: 'message', 
      message: `Message must be less than ${CONTENT_LIMITS.CONTACT_MESSAGE_MAX} characters` 
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validate newsletter form data
 */
export function validateNewsletterForm(data: {
  email: string;
  name?: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  } else if (data.email.length > CONTENT_LIMITS.NEWSLETTER_EMAIL_MAX) {
    errors.push({ 
      field: 'email', 
      message: `Email must be less than ${CONTENT_LIMITS.NEWSLETTER_EMAIL_MAX} characters` 
    });
  }

  // Optional name validation
  if (data.name && data.name.length > CONTENT_LIMITS.CONTACT_NAME_MAX) {
    errors.push({ 
      field: 'name', 
      message: `Name must be less than ${CONTENT_LIMITS.CONTACT_NAME_MAX} characters` 
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize HTML input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim();
}
