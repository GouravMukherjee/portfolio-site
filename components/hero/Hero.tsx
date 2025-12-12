"use client";

import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
};

export function Hero({ title, subtitle, imageSrc }: HeroProps) {
  return (
    <section className="section-container flex flex-col gap-8 py-20">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-electric opacity-20 blur-3xl" />
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl space-y-5"
          >
            <h1 className="gradient-text">{title}</h1>
            {subtitle && <p className="text-lg text-neutral-300">{subtitle}</p>}
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="#contact">Contact</a>
              <a className="btn-outline" href="/resume.pdf" download>
                Download Resume
              </a>
              <a className="btn-secondary" href="#work">View Work</a>
            </div>
          </motion.div>
          {imageSrc && (
            <motion.img
              src={imageSrc}
              alt="Profile"
              width={180}
              height={180}
              className="h-[180px] w-[180px] rounded-full object-cover ring-2 ring-white/20"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            />
          )}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.4 }}
            className="h-10 w-6 rounded-full border border-white/20 p-1"
          >
            <div className="h-full w-full rounded bg-white/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
