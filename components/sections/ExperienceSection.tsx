import { ExperienceItem } from '../cards/ExperienceCard';

export type ExperienceSectionProps = {
  experiences: Array<{
    logo?: string;
    company: string;
    position: string;
    duration: string;
    location?: string;
    accomplishments?: string[];
    stack?: string[];
  }>;
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-container section-spacing">
      <div className="text-center mb-12">
        <p className="section-kicker mb-3">Experience</p>
        <h2 className="text-section-heading lg:text-section-heading-lg text-text-primary mb-4">
          Professional Journey
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          My career path and key accomplishments in software development and AI/ML
        </p>
      </div>
      
      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-2 md:left-5 top-0 bottom-0 w-px bg-surface-border" />
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.position}`} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
