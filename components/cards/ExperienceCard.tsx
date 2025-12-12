import { Badge } from '../ui/Badge';

export type ExperienceCardProps = {
  logo?: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  accomplishments?: string[];
  stack?: string[];
};

export function ExperienceCard({
  logo,
  company,
  position,
  duration,
  location,
  accomplishments = [],
  stack = [],
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-accent-primary border-2 border-primary-dark shadow-glow-purple" />
      
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            {logo && (
              <div className="h-10 w-10 overflow-hidden rounded-lg bg-surface-tertiary border border-surface-border flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={`${company} logo`} className="h-full w-full object-cover" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-text-primary">{position}</h4>
              <p className="text-sm font-medium text-text-secondary">{company}</p>
              {location && <p className="text-xs text-text-tertiary mt-1">{location}</p>}
            </div>
          </div>
          <div className="text-xs font-medium text-text-tertiary whitespace-nowrap">{duration}</div>
        </div>
        
        {!!accomplishments.length && (
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {accomplishments.map((accomplishment, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-lavender mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{accomplishment}</span>
              </li>
            ))}
          </ul>
        )}
        
        {!!stack.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Alias for compatibility
export const ExperienceItem = ExperienceCard;
