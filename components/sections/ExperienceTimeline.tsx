"use client";

import { motion } from 'framer-motion';

type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  skills: string[];
  icon: JSX.Element;
};

const experiences: Experience[] = [
  {
    title: "Freelance Designer & Media Creator",
    company: "Self-Employed | Remote",
    location: "Remote",
    duration: "May 2022 - Present",
    achievements: [
      "Delivered 50+ projects with 24-48hr turnarounds",
      "Drove engagement up to 40% through visual campaigns",
      "Managed client relationships independently"
    ],
    skills: ["Premiere Pro", "Photoshop", "Figma", "Canva"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Student Leader & Event Coordinator",
    company: "St. Xavier's Institution | Kolkata",
    location: "Kolkata, India",
    duration: "Sep 2018 - Apr 2024",
    achievements: [
      "Coordinated tech exhibitions for 100+ attendees",
      "Supervised 15+ peers during large-scale events",
      "Competed in WCA Speedcubing (discipline & precision)"
    ],
    skills: ["Event Planning", "Leadership", "Public Speaking"],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "CS & Linguistics Student",
    company: "San José State University",
    location: "San José, CA",
    duration: "Aug 2025 - May 2029",
    achievements: [
      "Dual major in Computer Science and Linguistics",
      "Building NLP projects and multi-agent AI systems",
      "Active in tech community and project collaborations"
    ],
    skills: ["Python", "NLP", "AI Systems", "Research"],
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
      </svg>
    )
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-container section-spacing">
      <div className="text-center mb-12">
        <p className="section-kicker mb-3">Experience</p>
        <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
          My Journey
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Learning through design work, student leadership, and academics
        </p>
      </div>

      {/* Grid Container - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
      <div className="mt-6 grid gap-4 sm:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-lg bg-surface backdrop-blur-sm p-4 border-2 border-accent-white transition-all duration-200 hover:shadow-white-glow-lg"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              
              <div className="relative space-y-3">
                {/* Header - Icon + Title */}
                <div className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-surface text-accent-white border-2 border-accent-white">
                    {exp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white leading-snug">{exp.title}</h3>
                    <p className="text-xs text-text-muted mt-0.5">{exp.company}</p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary border-2 border-accent-white">
                  <svg className="h-3 w-3 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.duration}
                </div>

                {/* Achievements - Compact bullets */}
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary"
                    >
                      <svg className="mt-0.5 h-3 w-3 flex-shrink-0 text-accent-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills - Compact tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-text-muted border-2 border-accent-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
