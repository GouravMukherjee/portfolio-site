export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

// Email validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Contact form validation
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must be less than 100 characters' });
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (data.subject.length > 200) {
    errors.push({ field: 'subject', message: 'Subject must be less than 200 characters' });
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (data.message.length > 5000) {
    errors.push({ field: 'message', message: 'Message must be less than 5000 characters' });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Newsletter subscription validation
export interface NewsletterFormData {
  email: string;
  firstName?: string;
}

export function validateNewsletterForm(data: NewsletterFormData): ValidationResult {
  const errors: ValidationError[] = [];

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // First name validation (optional but if provided, validate)
  if (data.firstName && data.firstName.length > 50) {
    errors.push({ field: 'firstName', message: 'First name must be less than 50 characters' });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
