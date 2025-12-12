"use client";

import { motion } from 'framer-motion';

type ProficiencyLevel = "Learning" | "Intermediate" | "Proficient";

type Skill = {
  name: string;
  proficiency: ProficiencyLevel;
  usedIn?: string;
  icon?: string;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  skills: Skill[];
  icon: JSX.Element;
};

const skillCategories: SkillCategory[] = [
  {
    title: "AI/ML & NLP",
    subtitle: "Core Focus",
    color: "text-text-primary",
    borderColor: "border border-surface-border",
    bgColor: "bg-surface-secondary",
    iconBg: "bg-surface-tertiary border border-accent-primary/30 text-accent-lavender",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: [
      { name: "LLMs & Prompt Engineering", proficiency: "Learning", usedIn: "Used in Orion" },
      { name: "Multi-Agent Systems", proficiency: "Learning", usedIn: "Used in Orion" },
      { name: "RAG & Vector Databases", proficiency: "Learning", usedIn: "Used in Orion" },
      { name: "Natural Language Processing", proficiency: "Learning", usedIn: "Academic coursework" },
      { name: "Embeddings & Semantic Search", proficiency: "Learning", usedIn: "Used in Orion" },
      { name: "Model Quantization", proficiency: "Learning", usedIn: "Optimizing for Jetson" },
      { name: "Fine-tuning", proficiency: "Learning", usedIn: "Personal experiments" },
      { name: "Computational Linguistics", proficiency: "Learning", usedIn: "Major coursework" }
    ]
  },
  {
    title: "Programming Languages",
    subtitle: "Core Technologies",
    color: "text-text-primary",
    borderColor: "border border-surface-border",
    bgColor: "bg-surface-secondary",
    iconBg: "bg-surface-tertiary border border-accent-primary/30 text-accent-lavender",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "Python", proficiency: "Intermediate", usedIn: "Primary language for Orion" },
      { name: "JavaScript/TypeScript", proficiency: "Intermediate", usedIn: "Web development projects" },
      { name: "HTML/CSS", proficiency: "Proficient", usedIn: "All web projects" },
      { name: "Java", proficiency: "Learning", usedIn: "Academic coursework" },
      { name: "C++", proficiency: "Learning", usedIn: "Data structures course" }
    ]
  },
  {
    title: "Developer Tools & Frameworks",
    subtitle: "Technical Stack",
    color: "text-text-primary",
    borderColor: "border border-surface-border",
    bgColor: "bg-surface-secondary",
    iconBg: "bg-surface-tertiary border border-accent-primary/30 text-accent-lavender",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", proficiency: "Intermediate", usedIn: "Version control for all projects" },
      { name: "Ollama", proficiency: "Intermediate", usedIn: "Local LLM inference in Orion" },
      { name: "SQLite", proficiency: "Intermediate", usedIn: "Orion memory system" },
      { name: "ChromaDB", proficiency: "Learning", usedIn: "Vector storage in Orion" },
      { name: "FastAPI", proficiency: "Learning", usedIn: "Building REST APIs" },
      { name: "Next.js", proficiency: "Learning", usedIn: "Portfolio site" },
      { name: "Tailwind CSS", proficiency: "Intermediate", usedIn: "Styling web projects" },
      { name: "NVIDIA Jetson", proficiency: "Learning", usedIn: "Edge deployment for Orion" },
      { name: "Whisper (STT)", proficiency: "Learning", usedIn: "Voice interface for Orion" },
      { name: "Coqui TTS", proficiency: "Learning", usedIn: "Voice output for Orion" }
    ]
  },
  {
    title: "Design & Creative",
    subtitle: "From 3 years freelance design work",
    color: "text-text-primary",
    borderColor: "border border-surface-border",
    bgColor: "bg-surface-secondary",
    iconBg: "bg-surface-tertiary border border-accent-primary/30 text-accent-lavender",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    skills: [
      { name: "Adobe Premiere Pro", proficiency: "Proficient", usedIn: "50+ video projects" },
      { name: "Photoshop", proficiency: "Proficient", usedIn: "Branding & graphics" },
      { name: "Figma", proficiency: "Intermediate", usedIn: "UI/UX design" },
      { name: "Canva", proficiency: "Proficient", usedIn: "Quick design work" },
      { name: "Video Editing", proficiency: "Proficient", usedIn: "Freelance projects" },
      { name: "Color Grading", proficiency: "Intermediate", usedIn: "Professional videos" }
    ]
  }
];

const proficiencyColors = {
  Learning: "bg-surface-tertiary text-text-secondary border border-accent-primary/30",
  Intermediate: "bg-accent-primary/20 text-accent-lavender border border-accent-primary/50",
  Proficient: "bg-accent-primary/30 text-text-primary border border-accent-primary",
} as const;

function SkillCardItem({ skill }: { skill: Skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="group relative overflow-hidden rounded-lg bg-surface-secondary p-4 border border-surface-border transition-all duration-200 hover:border-accent-primary/50 hover:shadow-card-hover"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-text-primary transition-colors duration-150">
            {skill.name}
          </h4>
          <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${proficiencyColors[skill.proficiency]}`}>
            {skill.proficiency}
          </span>
        </div>
        {skill.usedIn && (
          <p className="text-xs text-text-tertiary">
            <span className="text-accent-lavender">→</span> {skill.usedIn}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-container section-spacing">
      <div className="text-center mb-12">
        <p className="section-kicker mb-3">Skills</p>
        <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
          Skills & Technologies
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          What I&apos;m learning and building with
        </p>
      </div>

      {/* Skill Categories */}
      <div className="space-y-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl bg-surface-secondary p-6 border border-surface-border lg:p-8"
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-tertiary border border-accent-primary/30 text-accent-lavender">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary">{category.title}</h3>
                <p className="text-sm text-text-tertiary">{category.subtitle}</p>
              </div>
            </div>

            {/* Skills Grid - Mobile: 2 cols, Tablet: 3 cols, Desktop: 4 cols */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * index, ease: 'easeOut' }}
                >
                  <SkillCardItem skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 overflow-hidden rounded-2xl bg-surface-secondary p-8 border border-surface-border"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-tertiary border border-accent-primary/30 text-accent-lavender">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-text-primary">Learning Roadmap</h3>
            <p className="text-sm text-text-tertiary">Growth mindset & continuous learning</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Currently Learning */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-lavender animate-pulse" />
              <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                Currently Learning
              </h4>
            </div>
            <ul className="space-y-2">
              {[
                "Natural Language Processing",
                "Multi-Agent Architectures",
                "Vector Databases & Semantic Search",
                "Edge AI Optimization",
                "FastAPI & Backend Development"
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent-lavender" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* What's Next */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-primary" />
              <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                What&apos;s Next
              </h4>
            </div>
            <ul className="space-y-2">
              {[
                "Reinforcement Learning",
                "GPU Optimization & CUDA",
                "Distributed Systems",
                "Computer Vision",
                "Advanced Deep Learning Architectures"
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-lg bg-surface-tertiary p-4 border border-accent-primary/30"
        >
          <p className="text-sm leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">My Approach:</span> I learn by building real projects. Each new technology I explore becomes part of a practical application, helping me understand not just how things work, but why they work. I&apos;m focused on continuous growth and hands-on experimentation rather than theoretical knowledge alone.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
