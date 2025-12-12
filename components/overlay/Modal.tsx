"use client";

import { ReactNode, useEffect, useRef } from 'react';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Escape key handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Focus management and body scroll lock
  useEffect(() => {
    if (!open) return undefined;

    // Store previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const el = ref.current;
    if (el) {
      const selectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusables = Array.from(el.querySelectorAll<HTMLElement>(selectors));
      focusables[0]?.focus();
    }

    return () => {
      // Restore body scroll
      document.body.style.overflow = originalOverflow;
      // Restore focus
      previousActiveElement.current?.focus();
    };
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (!open) return undefined;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const el = ref.current;
      if (!el) return;

      const selectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusables = Array.from(el.querySelectorAll<HTMLElement>(selectors));

      if (focusables.length === 0) return;

      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [open]);

  if (!open) return null;

  const titleId = title ? 'modal-title' : undefined;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 h-full w-full bg-black/50"
        onClick={onClose}
        tabIndex={-1}
      />
      <div ref={ref} className="card relative max-w-lg w-full">
        <div className="flex items-center justify-between">
          {title && (
            <h3 id={titleId} className="text-lg font-semibold text-white">
              {title}
            </h3>
          )}
          <button type="button" className="btn-outline ml-auto" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
