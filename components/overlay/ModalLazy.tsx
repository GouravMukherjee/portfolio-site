'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ModalComponent = dynamic(() => import('./Modal').then((mod) => ({ default: mod.Modal })), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-blue border-t-transparent" />
    </div>
  ),
});

export function Modal(props: React.ComponentProps<typeof import('./Modal')['Modal']>) {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-blue border-t-transparent" />
        </div>
      }
    >
      <ModalComponent {...props} />
    </Suspense>
  );
}
