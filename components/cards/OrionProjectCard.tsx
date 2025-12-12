"use client";

import { motion } from 'framer-motion';

type OrionProjectCardProps = {
  githubLink?: string;
  documentationLink?: string;
};

export function OrionProjectCard({ 
  githubLink = "https://github.com",
  documentationLink = "#" 
}: OrionProjectCardProps) {
  const techStack = [
    "Python", 
    "Ollama", 
    "Qwen", 
    "ChromaDB", 
    "SQLite", 
    "Whisper", 
    "Coqui TTS", 
    "NVIDIA Jetson"
  ];

  const achievements = [
    "7-agent swarm for specialized reasoning (Coding, Math, Writing, Memory, Analysis)",
    "VRAM-aware router preventing crashes on resource-constrained devices",
    "Fully offline voice I/O (Whisper STT + Coqui TTS)",
    "~2-3 second latency for end-to-end inference"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-surface p-5 shadow-xl border-2 border-accent-white backdrop-blur-sm transition-all duration-300 hover:shadow-white-glow-lg sm:p-8 lg:p-10"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 space-y-6">
        {/* Hero Section with Architecture Diagram */}
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[2fr_3fr]">
          {/* Left: Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center rounded-xl bg-surface p-6 border-2 border-accent-white"
          >
            {/* Simple Architecture Diagram */}
            <div className="w-full space-y-4">
              {/* Router */}
              <div className="flex justify-center">
                <div className="rounded-lg bg-surface px-4 py-2 text-center border-2 border-accent-white">
                  <div className="text-sm font-semibold text-accent-white">Router</div>
                  <div className="text-xs text-text-muted">VRAM-Aware</div>
                </div>
              </div>
              
              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="h-6 w-6 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* 7 Agents */}
              <div className="grid grid-cols-3 gap-2 text-center">
                {["Code", "Math", "Write", "Memory", "Analyze", "Research", "Plan"].map((agent, idx) => (
                  <motion.div
                    key={agent}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                    className="rounded bg-surface px-2 py-1.5 text-xs font-medium text-text-secondary border-2 border-accent-white"
                  >
                    {agent}
                  </motion.div>
                ))}
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="h-6 w-6 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Memory Layer */}
              <div className="flex justify-center gap-2">
                <div className="rounded bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary border-2 border-accent-white">
                  SQLite
                </div>
                <div className="rounded bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary border-2 border-accent-white">
                  ChromaDB
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Project Details */}
          <div className="space-y-5">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold text-white lg:text-4xl">
                  ORION
                </h3>
                <span className="text-2xl text-text-muted">|</span>
                <span className="text-xl font-semibold text-accent-white">Multi-Agent AI Companion</span>
              </div>
              <p className="text-lg font-medium text-text-muted">
                Private, modular AI system optimized for edge devices
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                Building a 7-agent LLM system for specialized reasoning tasks. Learning how to implement an intelligent router with VRAM-aware model loading to prevent crashes on resource-constrained devices.
              </p>
              <p className="leading-relaxed">
                Experimenting with fully offline inference using Ollama and Qwen models, achieving ~2-3s latency. Exploring hybrid SQLite + ChromaDB memory for semantic recall and conversation continuity.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl bg-slate-800/50 p-6 ring-1 ring-slate-700/50"
        >
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Achievements
          </h4>
          <ul className="grid gap-3 md:grid-cols-2">
            {achievements.map((achievement, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="flex items-start gap-3 text-sm text-neutral-300"
              >
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack Badges */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-text-secondary border-2 border-accent-white transition-all hover:scale-105"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary border-2 border-accent-white px-6 py-3 font-bold text-accent-white transition-all hover:bg-accent-white hover:text-primary"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
          <a
            href={documentationLink}
            className="inline-flex items-center gap-2 rounded-lg bg-transparent border-2 border-accent-white px-6 py-3 font-bold text-accent-white transition-all hover:bg-accent-white hover:text-primary"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Documentation
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
