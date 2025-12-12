"use client";

import { useEffect, useState } from 'react';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';
export type ToastProps = {
  message: string;
  variant?: ToastVariant;
  autoDismissMs?: number;
  position?: 'bottom-right' | 'top-right' | 'top-center';
};

export function Toast({ message, variant = 'info', autoDismissMs = 4000, position = 'bottom-right' }: ToastProps) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setOpen(false), autoDismissMs);
    return () => clearTimeout(id);
  }, [autoDismissMs]);
  if (!open) return null;

  let posClass = 'bottom-6 right-6';
  if (position === 'top-right') posClass = 'top-6 right-6';
  if (position === 'top-center') posClass = 'top-6 left-1/2 -translate-x-1/2';

  const colorMap: Record<ToastVariant, string> = {
    success: 'border-success/30 bg-success/10 text-success',
    error: 'border-error/30 bg-error/10 text-error',
    info: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan',
    warning: 'border-warning/30 bg-warning/10 text-warning',
  };

  return (
    <div className={`fixed z-50 ${posClass}`}>
      <div
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        className={`glass flex items-center gap-3 rounded-lg px-4 py-3 ${colorMap[variant]}`}
      >
        <span className="text-sm">{message}</span>
        <button type="button" className="btn-outline" aria-label="Dismiss notification" onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;
