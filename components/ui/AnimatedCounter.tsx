"use client";

import { useEffect, useRef, useState } from 'react';

export type AnimatedCounterProps = {
  to: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ to, duration = 1200, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setValue(Math.round(p * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="text-2xl font-semibold text-white">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
