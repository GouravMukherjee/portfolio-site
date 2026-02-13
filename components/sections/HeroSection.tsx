"use client";

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative flex min-h-screen flex-col justify-center items-center py-12 lg:py-16">
      {/* Content container - centered with max-width */}
      <div className="section-container relative z-10 mx-auto max-w-[800px] text-center flex flex-col items-center justify-center px-4 sm:px-8">
        {/* Headline */}
        <motion.h1
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-hero-name lg:text-hero-name-lg font-bold text-text-primary leading-tight"
        >
          Building intelligent systems. One curious question at a time.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.15 }}
          className="mx-auto mt-4 max-w-[700px] text-lg sm:text-xl font-normal text-text-secondary leading-relaxed"
        >
          First-year CS student exploring multi-agent AI, NLP, and edge computing. Designing systems that respect privacy and perform where it matters — on the edge.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            '🎓 SJSU Student',
            '🚀 Building Orion',
            '💡 Learning NLP',
          ].map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 0.35 + i * 0.05 }}
              className="inline-flex items-center rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1.5 text-sm text-text-secondary"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.6 }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.8 }}
          className="mt-10 text-xs text-text-tertiary"
        >
          ↓ Scroll to learn more
        </motion.p>
      </div>

      {/* Component-scoped styles for twinkle animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
