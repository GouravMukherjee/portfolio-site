import { ProjectCard } from '../cards/ProjectCard';

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type ProjectsSectionProps = {
  projects: Project[];
  showAll?: boolean;
};

export function ProjectsSection({ projects, showAll = false }: ProjectsSectionProps) {
  const displayProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="work" className="section-container section-spacing">
      <div className="text-center mb-12">
        <p className="section-kicker mb-3">Projects</p>
        <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
          Featured Work
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A selection of my recent projects and side work in AI/ML and software development
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
