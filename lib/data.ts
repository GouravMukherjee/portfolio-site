/**
 * Centralized data layer for portfolio site
 * All profile, project, skill, and experience data
 */

import type { Project, Experience, Skill } from '@/types';

// ============================================================================
// PROFILE DATA
// ============================================================================

export const profileData = {
  name: "Gourav Mukherjee",
  title: "Student Developer & AI Enthusiast",
  tagline: "Learning to Bridge Human Language and Machine Intelligence",
  bio: "I'm a first-year student at San José State University pursuing a BS in Computer Science & Linguistics. I'm curious about building intelligent systems that understand and process human language. Currently learning about multi-agent AI architectures, natural language processing, and edge computing through hands-on projects.",
  location: "San José, CA",
  email: "gouravmukherjee058@gmail.com",
  phone: "(408) 592-6661",
  education: {
    school: "San José State University",
    degree: "BS in Computer Science & Linguistics",
    startDate: "Aug 2025",
    endDate: "May 2029",
    description: "Learning computational linguistics and AI systems. Planning to specialize in NLP, Multi-Agent Systems, and Machine Learning."
  },
  links: {
    github: "https://github.com/gouravmukherjee",
    linkedin: "https://linkedin.com/in/gouravmukherjee",
    email: "gouravmukherjee058@gmail.com",
    resumePDF: "/resume.pdf"
  }
} as const;

// ============================================================================
// SKILLS DATA
// ============================================================================

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming Languages",
    level: 85,
    skillLevel: "advanced",
    icon: "🐍",
    yearsOfExperience: 2,
    description: "Primary language for AI/ML projects and data analysis"
  },
  {
    name: "JavaScript/TypeScript",
    category: "Programming Languages",
    level: 80,
    skillLevel: "advanced",
    icon: "📜",
    yearsOfExperience: 1.5,
    description: "Full-stack web development and automation"
  },
  {
    name: "Java",
    category: "Programming Languages",
    level: 75,
    skillLevel: "intermediate",
    icon: "☕",
    yearsOfExperience: 1,
    description: "Object-oriented programming and data structures"
  },
  {
    name: "C/C++",
    category: "Programming Languages",
    level: 70,
    skillLevel: "intermediate",
    icon: "⚡",
    yearsOfExperience: 1,
    description: "Systems programming and algorithms"
  },

  // AI/ML & NLP
  {
    name: "Natural Language Processing",
    category: "AI/ML & NLP",
    level: 75,
    skillLevel: "intermediate",
    icon: "🗣️",
    yearsOfExperience: 1,
    description: "Text processing, language models, and computational linguistics"
  },
  {
    name: "Machine Learning",
    category: "AI/ML & NLP",
    level: 70,
    skillLevel: "intermediate",
    icon: "🤖",
    yearsOfExperience: 1,
    description: "Supervised/unsupervised learning, model training"
  },
  {
    name: "TensorFlow/PyTorch",
    category: "AI/ML & NLP",
    level: 65,
    skillLevel: "intermediate",
    icon: "🔥",
    yearsOfExperience: 0.5,
    description: "Deep learning frameworks for neural networks"
  },
  {
    name: "LangChain",
    category: "AI/ML & NLP",
    level: 70,
    skillLevel: "intermediate",
    icon: "🔗",
    yearsOfExperience: 0.5,
    description: "Building LLM-powered applications and agents"
  },

  // Web Development
  {
    name: "React/Next.js",
    category: "Web Development",
    level: 80,
    skillLevel: "advanced",
    icon: "⚛️",
    yearsOfExperience: 1,
    description: "Modern web applications with server-side rendering"
  },
  {
    name: "Tailwind CSS",
    category: "Web Development",
    level: 85,
    skillLevel: "advanced",
    icon: "🎨",
    yearsOfExperience: 1,
    description: "Utility-first CSS framework for rapid UI development"
  },
  {
    name: "Node.js",
    category: "Web Development",
    level: 75,
    skillLevel: "intermediate",
    icon: "🟢",
    yearsOfExperience: 1,
    description: "Backend APIs and server-side JavaScript"
  },
  {
    name: "FastAPI",
    category: "Web Development",
    level: 70,
    skillLevel: "intermediate",
    icon: "⚡",
    yearsOfExperience: 0.5,
    description: "High-performance Python web APIs"
  },

  // Tools & Technologies
  {
    name: "Git/GitHub",
    category: "Tools & Technologies",
    level: 85,
    skillLevel: "advanced",
    icon: "🐙",
    yearsOfExperience: 2,
    description: "Version control and collaborative development"
  },
  {
    name: "Docker",
    category: "Tools & Technologies",
    level: 65,
    skillLevel: "intermediate",
    icon: "🐳",
    yearsOfExperience: 0.5,
    description: "Containerization and deployment"
  },
  {
    name: "VS Code",
    category: "Tools & Technologies",
    level: 90,
    skillLevel: "expert",
    icon: "💻",
    yearsOfExperience: 2,
    description: "Primary development environment"
  },
  {
    name: "Linux/Unix",
    category: "Tools & Technologies",
    level: 75,
    skillLevel: "intermediate",
    icon: "🐧",
    yearsOfExperience: 1.5,
    description: "Command line and system administration"
  },

  // Data & Databases
  {
    name: "SQL",
    category: "Data & Databases",
    level: 70,
    skillLevel: "intermediate",
    icon: "🗄️",
    yearsOfExperience: 1,
    description: "Relational database design and queries"
  },
  {
    name: "MongoDB",
    category: "Data & Databases",
    level: 65,
    skillLevel: "intermediate",
    icon: "🍃",
    yearsOfExperience: 0.5,
    description: "NoSQL database for flexible data models"
  },
  {
    name: "Pandas/NumPy",
    category: "Data & Databases",
    level: 75,
    skillLevel: "intermediate",
    icon: "📊",
    yearsOfExperience: 1,
    description: "Data manipulation and numerical computing"
  }
];

// ============================================================================
// PROJECTS DATA
// ============================================================================

export const projectsData: Project[] = [
  {
    id: "multi-agent-chatbot",
    slug: "multi-agent-chatbot",
    title: "Multi-Agent Conversational AI System",
    description: "Intelligent chatbot using multiple specialized AI agents for context-aware conversations, built with LangChain and GPT-4.",
    longDescription: "Developed a sophisticated multi-agent system where different AI agents handle specific conversation domains (technical support, casual chat, information retrieval). Implemented agent routing logic, context management, and seamless handoffs between agents based on user intent.",
    image: "/images/projects/multi-agent-ai.jpg",
    tags: ["Python", "LangChain", "GPT-4", "Multi-Agent AI", "NLP"],
    technologies: ["LangChain", "OpenAI API", "FastAPI", "React", "Pinecone"],
    category: "AI/ML",
    githubUrl: "https://github.com/gouravmukherjee/multi-agent-chatbot",
    demoUrl: "#",
    featured: true,
    startDate: "2025-09",
    role: "Solo Developer",
    highlights: [
      "Implemented 5 specialized agents with domain expertise",
      "95% accuracy in intent classification and routing",
      "Sub-second response time with context retention",
      "Handles multi-turn conversations with memory"
    ],
    challenges: [
      "Maintaining conversation context across agent handoffs",
      "Balancing response quality with API cost efficiency"
    ],
    solutions: [
      "Implemented shared memory store with Redis for context persistence",
      "Used prompt caching and selective API calls to reduce costs by 60%"
    ]
  },
  {
    id: "sentiment-analyzer",
    slug: "sentiment-analyzer",
    title: "Real-Time Sentiment Analysis Tool",
    description: "NLP-powered sentiment analysis for social media text with visualization dashboard.",
    longDescription: "Built a real-time sentiment analysis tool that processes social media posts and comments. Uses transformer models (BERT) fine-tuned on sentiment data. Features include aspect-based sentiment analysis, emotion detection, and trend visualization.",
    image: "/images/projects/sentiment-analysis.jpg",
    tags: ["Python", "NLP", "BERT", "React", "D3.js"],
    technologies: ["Transformers", "PyTorch", "FastAPI", "Next.js", "Chart.js"],
    category: "AI/ML",
    githubUrl: "https://github.com/gouravmukherjee/sentiment-analyzer",
    demoUrl: "#",
    featured: true,
    startDate: "2025-10",
    role: "Developer",
    highlights: [
      "90% accuracy on sentiment classification",
      "Processes 1000+ texts per minute",
      "Interactive visualization dashboard",
      "Supports multiple languages"
    ]
  },
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Personal Portfolio & Blog Platform",
    description: "Modern portfolio website with blog, project showcase, and analytics. Built with Next.js 14 and optimized for performance.",
    longDescription: "Designed and developed a full-featured portfolio website using Next.js 14 App Router, featuring server-side rendering, optimized images, and a blog powered by MDX. Implemented SEO best practices, accessibility features (WCAG 2.1 AA), and analytics integration.",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    technologies: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Web Development",
    githubUrl: "https://github.com/gouravmukherjee/portfolio",
    demoUrl: "https://gouravmukherjee.dev",
    featured: true,
    startDate: "2025-11",
    role: "Designer & Developer",
    highlights: [
      "100/100 Lighthouse SEO score",
      "95+ Lighthouse accessibility score",
      "Sub-second page load times",
      "Responsive design with dark mode"
    ]
  },
  {
    id: "study-buddy-ai",
    slug: "study-buddy-ai",
    title: "AI Study Assistant",
    description: "LLM-powered study assistant that helps with note-taking, quiz generation, and concept explanations.",
    longDescription: "Created an AI-powered study tool that helps students learn more effectively. Features include automatic note summarization, flashcard generation from lecture notes, interactive quizzes with explanations, and concept clarification using GPT-4.",
    image: "/images/projects/study-buddy.jpg",
    tags: ["Python", "GPT-4", "React", "Education"],
    technologies: ["OpenAI API", "LangChain", "Next.js", "Supabase"],
    category: "AI/ML",
    githubUrl: "https://github.com/gouravmukherjee/study-buddy",
    featured: false,
    startDate: "2025-08",
    role: "Developer",
    highlights: [
      "Generates personalized study materials",
      "Interactive quiz mode with explanations",
      "Supports multiple subjects",
      "Used by 50+ students in beta testing"
    ]
  },
  {
    id: "linguistics-analyzer",
    slug: "linguistics-analyzer",
    title: "Computational Linguistics Analyzer",
    description: "Tool for analyzing linguistic patterns, morphology, and syntax in text using NLP techniques.",
    longDescription: "Academic project that analyzes text from a computational linguistics perspective. Features morphological analysis, syntax tree generation, part-of-speech tagging, and linguistic pattern detection. Built with spaCy and custom rule-based systems.",
    image: "/images/projects/linguistics.jpg",
    tags: ["Python", "NLP", "Linguistics", "spaCy"],
    technologies: ["spaCy", "NLTK", "NetworkX", "Streamlit"],
    category: "AI/ML",
    githubUrl: "https://github.com/gouravmukherjee/linguistics-analyzer",
    featured: false,
    startDate: "2025-09",
    role: "Researcher & Developer",
    highlights: [
      "Supports 10+ languages",
      "Visualizes syntax trees and dependencies",
      "Identifies linguistic patterns and anomalies",
      "Educational tool for linguistics students"
    ]
  },
  {
    id: "code-snippet-manager",
    slug: "code-snippet-manager",
    title: "Developer Code Snippet Manager",
    description: "VS Code extension for organizing and searching code snippets with AI-powered tagging.",
    longDescription: "VS Code extension that helps developers organize, search, and share code snippets. Features AI-powered automatic tagging, fuzzy search, syntax highlighting, and cloud sync. Built with TypeScript and the VS Code Extension API.",
    image: "/images/projects/snippet-manager.jpg",
    tags: ["TypeScript", "VS Code", "AI", "Developer Tools"],
    technologies: ["VS Code API", "TypeScript", "OpenAI", "MongoDB"],
    category: "Web Development",
    githubUrl: "https://github.com/gouravmukherjee/snippet-manager",
    featured: false,
    startDate: "2025-10",
    role: "Extension Developer",
    highlights: [
      "500+ downloads on VS Code Marketplace",
      "AI-powered snippet organization",
      "Cross-platform cloud sync",
      "Supports 50+ programming languages"
    ]
  }
];

// ============================================================================
// EXPERIENCE DATA
// ============================================================================

export const experienceData: Experience[] = [
  {
    id: "sjsu-student",
    company: "San José State University",
    position: "Computer Science & Linguistics Student",
    duration: "Aug 2025 - Present",
    startDate: "2025-08",
    current: true,
    location: "San José, CA",
    locationType: "onsite",
    accomplishments: [
      "Pursuing dual major in Computer Science and Linguistics with focus on computational linguistics",
      "Active member of AI/ML club and linguistics society",
      "Maintaining 3.8+ GPA while building personal projects",
      "Participating in hackathons and coding competitions"
    ],
    responsibilities: [
      "Coursework in Data Structures, Algorithms, and Introduction to AI",
      "Research in natural language processing and multi-agent systems",
      "Collaborative projects with peers on AI applications",
      "Self-directed learning in machine learning and deep learning"
    ],
    stack: ["Python", "Java", "JavaScript", "Git", "Linux"],
    technologies: ["VS Code", "GitHub", "Jupyter", "PyCharm"]
  },
  {
    id: "freelance-dev",
    company: "Freelance",
    position: "Web Developer",
    duration: "Jan 2025 - Present",
    startDate: "2025-01",
    current: true,
    location: "Remote",
    locationType: "remote",
    accomplishments: [
      "Built 5+ websites for local businesses and clients",
      "Specialized in modern web technologies (Next.js, React, Tailwind)",
      "Delivered projects on time with 100% client satisfaction",
      "Implemented responsive designs and SEO optimization"
    ],
    responsibilities: [
      "Full-stack web development from design to deployment",
      "Client communication and requirement gathering",
      "Performance optimization and accessibility compliance",
      "Ongoing maintenance and feature updates"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    technologies: ["Figma", "Git", "Vercel", "Supabase"]
  },
  {
    id: "coding-tutor",
    company: "Self-Employed",
    position: "Programming Tutor",
    duration: "Jun 2024 - Present",
    startDate: "2024-06",
    current: true,
    location: "San José, CA",
    locationType: "hybrid",
    accomplishments: [
      "Tutored 15+ students in Python, JavaScript, and computer science fundamentals",
      "Helped students improve grades by average of 20%",
      "Created custom learning materials and coding exercises",
      "Mentored students through project-based learning"
    ],
    responsibilities: [
      "One-on-one and group tutoring sessions",
      "Curriculum development for different skill levels",
      "Code review and debugging assistance",
      "Career guidance for aspiring developers"
    ],
    stack: ["Python", "JavaScript", "Java", "Git"],
    technologies: ["VS Code", "Zoom", "Google Colab"]
  },
  {
    id: "high-school-cs",
    company: "Valley High School",
    position: "Computer Science Club President",
    duration: "Sep 2023 - Jun 2025",
    startDate: "2023-09",
    endDate: "2025-06",
    location: "San José, CA",
    locationType: "onsite",
    accomplishments: [
      "Led club of 40+ members in coding workshops and projects",
      "Organized hackathons and coding competitions",
      "Mentored underclassmen in programming fundamentals",
      "Collaborated with teachers to develop CS curriculum"
    ],
    responsibilities: [
      "Weekly club meetings and workshop facilitation",
      "Event planning and logistics management",
      "Recruitment and member engagement",
      "Partnership development with local tech companies"
    ],
    stack: ["Python", "JavaScript", "HTML/CSS", "Git"],
    technologies: ["GitHub", "Replit", "VS Code"]
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project => project.category === category);
}

/**
 * Get current experience/positions
 */
export function getCurrentExperience(): Experience[] {
  return experienceData.filter(exp => exp.current);
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skillsData.filter(skill => skill.category === category);
}

/**
 * Group skills by category
 */
export function groupSkillsByCategory(): Record<string, Skill[]> {
  return skillsData.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
}

/**
 * Get all unique skill categories
 */
export function getSkillCategories(): string[] {
  return Array.from(new Set(skillsData.map(skill => skill.category)));
}

/**
 * Get all unique project categories
 */
export function getProjectCategories(): string[] {
  return Array.from(new Set(projectsData.map(project => project.category).filter((cat): cat is string => cat !== undefined)));
}
