"use client";

import { motion } from 'framer-motion';

type RoadmapItem = {
  title: string;
  description: string;
  status?: 'in-progress' | 'planned' | 'future';
  resourceLink?: string;
};

const roadmapData = {
  currentlyLearning: {
    title: "Currently Learning",
    subtitle: "Fall 2025",
    color: "blue",
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-blue-600/10 to-blue-600/5",
    borderColor: "ring-blue-600/30",
    items: [
      {
        title: "Natural Language Processing",
        description: "Coursework + Practice",
        status: 'in-progress' as const
      },
      {
        title: "Multi-Agent System Architecture",
        description: "Orion project",
        status: 'in-progress' as const
      },
      {
        title: "GPU Optimization",
        description: "NVIDIA Jetson",
        status: 'in-progress' as const
      },
      {
        title: "Quantization Techniques",
        description: "Edge deployment",
        status: 'in-progress' as const
      }
    ]
  },
  nextSemester: {
    title: "Next Semester",
    subtitle: "Spring 2026",
    color: "purple",
    gradient: "from-purple-600 to-violet-500",
    bgGradient: "from-purple-600/10 to-purple-600/5",
    borderColor: "ring-purple-600/30",
    items: [
      {
        title: "Data Structures",
        description: "Deep dive into algorithms & complexity",
        status: 'planned' as const
      },
      {
        title: "Reinforcement Learning",
        description: "New advanced ML course",
        status: 'planned' as const
      },
      {
        title: "Open Source Contributions",
        description: "Real-world experience with production codebases",
        status: 'planned' as const
      }
    ]
  },
  longTerm: {
    title: "Long-term Vision",
    subtitle: "2026-2029",
    color: "cyan",
    gradient: "from-cyan-600 to-teal-500",
    bgGradient: "from-cyan-600/10 to-cyan-600/5",
    borderColor: "ring-cyan-600/30",
    items: [
      {
        title: "Master's Level NLP Research",
        description: "Advanced research in computational linguistics",
        status: 'future' as const
      },
      {
        title: "Production ML/AI Systems",
        description: "Ship real-world AI systems at scale",
        status: 'future' as const
      },
      {
        title: "Industry Internships",
        description: "Summer 2026 & 2027 at top tech companies",
        status: 'future' as const
      },
      {
        title: "Published Papers or Open-Source Impact",
        description: "Contribute meaningful work to the AI community",
        status: 'future' as const
      }
    ]
  }
};

const statusIcons = {
  'in-progress': (
    <svg className="h-5 w-5 animate-pulse text-blue-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ),
  'planned': (
    <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  'future': (
    <svg className="h-5 w-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
};

const sectionProgressWidths: Record<string, string> = {
  "Currently Learning": "75%",
  "Next Semester": "40%",
  "Long-term Vision": "15%"
};

const timelineDotColors = ['bg-blue-500', 'bg-purple-500', 'bg-cyan-500'] as const;

function RoadmapCard({ 
  section, 
  items, 
  index 
}: { 
  section: {
    title: string;
    subtitle: string;
    color: string;
    gradient: string;
    bgGradient: string;
    borderColor: string;
    items: RoadmapItem[];
  }; 
  items: RoadmapItem[]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${section.bgGradient} p-6 ring-1 ${section.borderColor} lg:p-8`}
    >
      {/* Header */}
      <div className="mb-6 space-y-1">
        <div className={`inline-flex rounded-full bg-gradient-to-r ${section.gradient} px-4 py-1.5 text-sm font-bold text-white shadow-lg`}>
          {section.subtitle}
        </div>
        <h3 className={`text-2xl font-bold text-${section.color}-400`}>
          {section.title}
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-1.5 w-full rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: sectionProgressWidths[section.title] ?? "15%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${section.gradient}`}
        />
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + idx * 0.1 }}
            className="group relative rounded-lg bg-slate-800/50 p-4 ring-1 ring-slate-700/50 transition-all hover:bg-slate-800/70 hover:ring-slate-600/70"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 pt-0.5">
                {statusIcons[item.status || 'future']}
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
                {item.resourceLink && (
                  <a
                    href={item.resourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function LearningRoadmapSection() {
  return (
    <section className="section-container section-spacing">
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker mb-3">Learning Roadmap</p>
          <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
            Growth Journey
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Always learning, always growing. Here&apos;s my journey from where I am now to where I want to be.
          </p>
        </motion.div>

        {/* Inspiring Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl rounded-xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 p-4 ring-1 ring-blue-600/20"
        >
          <p className="text-sm italic text-neutral-300">
            &ldquo;The beautiful thing about learning is that no one can take it away from you.&rdquo;
          </p>
          <p className="mt-1 text-xs text-neutral-500">— B.B. King</p>
        </motion.div>
      </div>

      {/* Timeline Connector (Desktop) */}
      <div className="relative mb-6 hidden lg:block">
        <div className="flex items-center justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                className={`h-3 w-3 rounded-full ${timelineDotColors[i]}`}
              />
              {i < 2 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                  className="h-0.5 w-32 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Cards */}
      <div className="grid gap-8 lg:grid-cols-3">
        <RoadmapCard 
          section={roadmapData.currentlyLearning} 
          items={roadmapData.currentlyLearning.items}
          index={0}
        />
        <RoadmapCard 
          section={roadmapData.nextSemester} 
          items={roadmapData.nextSemester.items}
          index={1}
        />
        <RoadmapCard 
          section={roadmapData.longTerm} 
          items={roadmapData.longTerm.items}
          index={2}
        />
      </div>

    </section>
  );
}
