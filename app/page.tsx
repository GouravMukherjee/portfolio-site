'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { OrionProjectCard } from '@/components/cards/OrionProjectCard';
import { LearningProjectCard } from '@/components/cards/LearningProjectCard';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { AboutSection } from '@/components/sections/AboutSection';
import { LearningRoadmapSection } from '@/components/sections/LearningRoadmapSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Home Page - Student Portfolio
 * 
 * Section Order:
 * 1. Hero (Student profile with badges)
 * 2. Education (SJSU - PROMINENT)
 * 3. Projects (Orion hero + learning projects)
 * 4. Skills (Honest proficiency levels)
 * 5. Experience (Freelance + tutoring)
 * 6. About (Personal story)
 * 7. Learning Roadmap (Growth trajectory)
 * 8. Contact (Internship-seeking)
 * 
 * All sections have consistent padding:
 * - Mobile: py-12 (48px top/bottom)
 * - Desktop: py-20 (80px top/bottom)
 * 
 * Smooth scroll behavior enabled via CSS (html { scroll-behavior: smooth; })
 * Mobile responsive: 320px, 768px (sm:), 1024px (lg:)
 */

const learningProjects = [
  {
    title: 'Multi-Agent Conversational AI',
    description:
      'Intelligent chatbot using multiple specialized AI agents for context-aware conversations, built with LangChain and GPT-4.',
    category: 'Learning Project' as const,
    technologies: ['Python', 'LangChain', 'GPT-4', 'FastAPI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/gouravmukherjee/multi-agent-chatbot' }
    ]
  },
  {
    title: 'Real-Time Sentiment Analysis',
    description:
      'NLP-powered sentiment analysis for social media text with visualization dashboard using BERT transformers.',
    category: 'Learning Project' as const,
    technologies: ['Python', 'BERT', 'PyTorch', 'React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/gouravmukherjee/sentiment-analyzer' }
    ]
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern portfolio website with Next.js 14, optimized for performance with 100/100 Lighthouse SEO score.',
    category: 'Learning Project' as const,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { label: 'GitHub', href: 'https://github.com/gouravmukherjee/portfolio' }
    ]
  }
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ===================================================================
          1. HERO SECTION - Student profile with animated badges
          =================================================================== */}
      <section id="hero" className="relative">
        <HeroSection />
      </section>

      {/* ===================================================================
          2. ABOUT SECTION - Personal story and connection
          =================================================================== */}
      <section id="about" className="pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
        <AboutSection />
      </section>

      {/* ===================================================================
          3. EDUCATION SECTION - SJSU (PROMINENT)
          =================================================================== */}
      <section id="education" className="pt-6 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
        <EducationSection />
      </section>

      {/* ===================================================================
          4. PROJECTS SECTION - Orion hero + learning projects
          =================================================================== */}
      <section id="work" className="section-container flex flex-col gap-6 sm:gap-8 lg:gap-10 pt-6 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <p className="section-kicker mb-3">Projects</p>
          <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
            Featured Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Building practical solutions and learning through hands-on development
          </p>
        </motion.div>

        {/* Featured Project - Orion (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-400">
              Featured Project
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-600/50 to-transparent" />
          </div>
          <OrionProjectCard 
            githubLink="https://github.com/GouravMukherjee/orion"
            documentationLink="#"
          />
        </motion.div>

        {/* Other Projects - Grid Layout */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Other Projects
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-neutral-600/50 to-transparent" />
          </div>
          <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {learningProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              >
                <LearningProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  links={project.links}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. SKILLS SECTION - Honest proficiency levels
          =================================================================== */}
      <section id="skills" className="pt-6 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
        <SkillsSection />
      </section>

      {/* ===================================================================
          6. EXPERIENCE SECTION - Freelance + tutoring timeline
          =================================================================== */}
      <section id="experience" className="pt-6 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
        <ExperienceTimeline />
      </section>

      {/* ===================================================================
          7. LEARNING ROADMAP SECTION - Growth trajectory
          =================================================================== */}
      <section id="roadmap" className="pt-6 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
        <LearningRoadmapSection />
      </section>

      {/* ===================================================================
          8. CONTACT SECTION - Internship-seeking tone
          =================================================================== */}
      <ContactSection />
    </div>
  );
}
