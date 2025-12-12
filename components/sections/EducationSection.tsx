"use client";

import { motion } from 'framer-motion';

export function EducationSection() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl bg-surface backdrop-blur-md p-4 sm:p-6 lg:p-8 border-2 border-accent-white"
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        
        {/* Accent border glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-[240px_1fr] lg:gap-8">
          {/* Left Column - University Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="flex h-[140px] w-[140px] items-center justify-center rounded-xl bg-white p-3 border-2 border-accent-white sm:h-[180px] sm:w-[180px] sm:p-4 lg:h-[220px] lg:w-[220px] lg:p-5">
              {/* SJSU Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/sjsu-logo.png" 
                alt="San José State University Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column - Education Details */}
          <div className="space-y-5 sm:space-y-6">
            {/* Main Education Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="space-y-2 sm:space-y-3"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
                  San José State University
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-accent-white border-2 border-accent-white">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 w-1.5 rounded-full bg-accent-white"
                  />
                  Current
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-base font-semibold text-accent-white sm:text-lg md:text-xl">
                  BS in Computer Science & Linguistics
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 sm:gap-3 sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    First Year
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span>Aug 2025 - Present</span>
                  <span className="text-neutral-500">•</span>
                  <span className="font-medium text-text-secondary">Expected May 2029</span>
                </div>
              </div>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-text-secondary">
                Pursuing a dual foundation in Computer Science and Linguistics to bridge the gap between human communication and machine intelligence. Focusing on Natural Language Processing, AI systems, and the computational understanding of language.
              </p>
            </motion.div>

            {/* Additional Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2"
            >
              {/* Relevant Coursework */}
              <div className="rounded-lg bg-surface p-4 border-2 border-accent-white">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Relevant Coursework
                </h3>
                <ul className="space-y-1.5 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-white" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>Discrete Mathematics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>NLP Foundations</span>
                  </li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="rounded-lg bg-surface p-4 border-2 border-accent-white">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Focus Areas
                </h3>
                <ul className="space-y-1.5 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-white" />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                    <span>Multi-Agent AI Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                    <span>Edge Computing</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary border-2 border-accent-white px-6 py-3 font-bold text-accent-white transition-all hover:bg-accent-white hover:text-primary"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Resume
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
