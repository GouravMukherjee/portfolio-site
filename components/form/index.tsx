"use client";

import { ComponentProps, ReactNode, useState } from 'react';

export function Input(props: ComponentProps<'input'>) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`glass w-full rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-500 ${className ?? ''}`}
    />
  );
}

export function Textarea(props: ComponentProps<'textarea'>) {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      className={`glass w-full rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-500 ${className ?? ''}`}
    />
  );
}

export function Select({ children, ...props }: ComponentProps<'select'> & { children: ReactNode }) {
  return (
    <select
      {...props}
      className={`glass w-full rounded-lg px-3 py-2 text-sm text-white ${props.className ?? ''}`}
    >
      {children}
    </select>
  );
}

export function Checkbox({ label, id, ...props }: ComponentProps<'input'> & { label: string }) {
  const inputId = id ?? `checkbox-${Math.random().toString(36).slice(2)}`;
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-300">
      <input id={inputId} type="checkbox" {...props} className="h-4 w-4 rounded border-white/20 bg-neutral-900" />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export function SubmitButton({ loading, children, ...props }: { loading?: boolean } & ComponentProps<'button'>) {
  return (
    <button type="submit" {...props} className={`btn-primary ${props.className ?? ''}`} disabled={props.disabled || loading}>
      {loading ? 'Submitting…' : children}
    </button>
  );
}

export function FormField({ label, hint, children, error, htmlFor }: { label: string; hint?: string; error?: string; children: ReactNode; htmlFor?: string }) {
  return (
    <div className="space-y-1">
      <label htmlFor={htmlFor} className="text-sm text-neutral-300">{label}</label>
      {children}
      {hint && <p className="text-xs text-neutral-500">{hint}</p>}
      {error && <p role="alert" className="text-xs text-error">{error}</p>}
    </div>
  );
}

export function ContactForm({ onSubmit }: { onSubmit: (data: { name: string; email: string; message: string }) => Promise<void> | void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      setLoading(true);
      setError(null);
      await onSubmit(data);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Name" htmlFor="name">
        <Input id="name" name="name" required placeholder="Your name" aria-label="Name" />
      </FormField>
      <FormField label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required placeholder="you@gmail.com" aria-label="Email" />
      </FormField>
      <FormField label="Message" htmlFor="message">
        <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project" aria-label="Message" />
      </FormField>
      <div className="flex items-center justify-between">
        <Checkbox label="Subscribe to updates" name="subscribe" />
        <SubmitButton loading={loading} type="submit">
          Send
        </SubmitButton>
      </div>
      {error && <p role="alert" className="text-sm text-error">{error}</p>}
    </form>
  );
}
