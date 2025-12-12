"use client";

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden section-spacing">
      {/* Subtle cosmic gradient accent */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[240px_1fr] lg:gap-10"
        >
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-transparent blur-xl" />
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Gourav Mukherjee"
                className="relative h-[160px] w-[160px] rounded-2xl object-cover ring-2 ring-surface-border transition-all duration-200 hover:ring-accent-primary/50 sm:h-[200px] sm:w-[200px] lg:h-[240px] lg:w-[240px]"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <p className="section-kicker mb-3 text-center lg:text-left">About</p>
              <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-6 text-center lg:text-left">
                About Me
              </h2>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="font-semibold text-text-primary">Gourav Mukherjee</span>, a first-year Computer Science & Linguistics student at San José State University.
                </p>
                
                <p>
                  I&apos;m fascinated by the intersection of human language and machine intelligence. This unique combination drives my curiosity for exploring how AI systems can truly understand language—not just process it.
                </p>
                
                <p>
                  Over the past few years, I&apos;ve worn multiple hats: designing digital campaigns for clients, leading student events, and experimenting with AI systems. My biggest learning project so far is <span className="font-semibold text-accent-lavender">Orion</span>, a multi-agent AI system I&apos;m building to run entirely offline on edge devices like NVIDIA Jetson.
                </p>
                
                <p>
                  What excites me most is learning how to make AI accessible, private, and efficient. I&apos;m exploring the idea that the future of AI isn&apos;t just about bigger models—it&apos;s about <span className="font-semibold text-accent-lavender">smarter optimization</span> and <span className="font-semibold text-accent-lavender">thoughtful deployment</span>.
                </p>
              </div>
            </div>

            {/* Currently Focused On */}
            <div className="rounded-xl bg-surface-secondary backdrop-blur-sm p-6 border border-surface-border">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Currently Learning & Exploring
              </h3>
              <ul className="space-y-3">
                {[
                  "How language models work under the hood",
                  "Optimizing AI for resource-constrained devices",
                  "Building real projects as I learn new concepts",
                  "Contributing to open-source and learning from experienced developers"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lavender" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Fun Fact Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="rounded-xl bg-surface-secondary p-6 border border-surface-border"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-5 w-5 text-accent-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">Fun Facts</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🧩", text: "WCA Speedcuber" },
                  { icon: "🎨", text: "5+ years design experience" },
                  { icon: "🌍", text: "Trilingual (English, Hindi, Bengali)" }
                ].map((fact, idx) => (
                  <motion.span
                    key={fact.text}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 rounded-full bg-surface-tertiary px-4 py-2 text-sm text-text-secondary border border-accent-primary/30"
                  >
                    <span className="text-lg">{fact.icon}</span>
                    <span>{fact.text}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-text-secondary leading-relaxed">
                Beyond coding, I&apos;m a competitive speedcuber (WCA certified) and someone who believes in learning through doing and collaborating with others.
              </p>
              
              <p className="text-lg font-medium text-text-primary">
                I&apos;m always eager to learn from mentors, collaborate on projects, and connect with fellow AI enthusiasts. Let&apos;s build and learn together.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="mailto:gourav.mukherjee@sjsu.edu"
                className="btn-primary"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/gouravmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/gouravmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
