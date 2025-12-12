'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { trackNewsletterSubscribe } from '@/lib/analytics';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        trackNewsletterSubscribe(true);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
        trackNewsletterSubscribe(false);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
      trackNewsletterSubscribe(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="glass flex-1 rounded-lg px-4 py-2 text-white focus:border-accent-cyan focus:outline-none"
          required
        />
        <Button type="submit" variant="primary" loading={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {status === 'success' && <p className="mt-2 text-sm text-success">{message}</p>}
      {status === 'error' && <p className="mt-2 text-sm text-error">{message}</p>}
    </div>
  );
}
