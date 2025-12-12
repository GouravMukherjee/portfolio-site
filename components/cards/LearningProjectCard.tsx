"use client";

import { motion } from 'framer-motion';

type LearningProjectCardProps = {
  title: string;
  description: string;
  category: "Learning Project" | "Freelance Work" | "Academic Project";
  technologies: string[];
  links?: Array<{ label: string; href: string }>;
  imageUrl?: string;
};

export function LearningProjectCard({ 
  title, 
  description, 
  category,
  technologies,
  links = [],
  imageUrl
}: LearningProjectCardProps) {
  const categoryColors = {
    "Learning Project": "bg-surface text-accent-white border-2 border-accent-white",
    "Freelance Work": "bg-surface text-accent-white border-2 border-accent-white",
    "Academic Project": "bg-surface text-accent-white border-2 border-accent-white"
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl bg-surface p-4 border-2 border-accent-white transition-all duration-300 hover:shadow-white-glow sm:p-6"
    >
      {/* Category Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryColors[category]}`}>
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
          {category}
        </span>
      </div>

      {/* Image (if provided) */}
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={imageUrl} 
            alt={title}
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-accent-white transition-colors sm:text-xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-xs leading-relaxed text-text-muted sm:mb-4 sm:text-sm">
        {description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary border-2 border-accent-white"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-white transition-colors hover:opacity-80"
            >
              {link.label}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
