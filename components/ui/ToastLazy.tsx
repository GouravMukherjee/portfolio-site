'use client';

import dynamic from 'next/dynamic';

const ToastComponent = dynamic(
  () => import('../feedback/Toast').then((mod) => ({ default: mod.Toast })),
  {
    ssr: false,
  },
);

export function Toast(props: React.ComponentProps<typeof import('../feedback/Toast')['Toast']>) {
  return <ToastComponent {...props} />;
}
