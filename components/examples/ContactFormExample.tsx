'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { trackContactFormSubmit } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactFormExample() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        trackContactFormSubmit(true);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.errors) {
        // Validation errors
        const errorMap: FormErrors = {};
        data.errors.forEach((error: { field: string; message: string }) => {
          errorMap[error.field] = error.message;
        });
        setErrors(errorMap);
        setSubmitStatus('error');
        trackContactFormSubmit(false);
      } else {
        setSubmitStatus('error');
        trackContactFormSubmit(false);
      }
    } catch (error) {
      setSubmitStatus('error');
      trackContactFormSubmit(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-neutral-200">
          Name
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="glass mt-1 w-full rounded-lg px-4 py-2 text-white focus:border-accent-cyan focus:outline-none"
            required
          />
        </label>
        {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-neutral-200">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="glass mt-1 w-full rounded-lg px-4 py-2 text-white focus:border-accent-cyan focus:outline-none"
            required
          />
        </label>
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-neutral-200">
          Subject
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="glass mt-1 w-full rounded-lg px-4 py-2 text-white focus:border-accent-cyan focus:outline-none"
            required
          />
        </label>
        {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-neutral-200">
          Message
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="glass mt-1 w-full rounded-lg px-4 py-2 text-white focus:border-accent-cyan focus:outline-none"
            required
          />
        </label>
        {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" loading={isSubmitting} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <p className="text-sm text-success">Message sent successfully! I&apos;ll get back to you soon.</p>
      )}
      {submitStatus === 'error' && !Object.keys(errors).length && (
        <p className="text-sm text-error">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
}
