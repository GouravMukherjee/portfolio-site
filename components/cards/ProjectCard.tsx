import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export type Link = { label: string; href: string };
export type ProjectCardProps = {
  image?: string;
  title: string;
  description: string;
  stack?: string[];
  metrics?: string[];
  links?: Link[];
};

export function ProjectCard({ image, title, description, stack = [], metrics = [], links = [] }: ProjectCardProps) {
  return (
    <motion.article
      className="card group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {image && (
        <div className="overflow-hidden rounded-lg mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={image} 
            alt="Project" 
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
        {!!stack.length && (
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t}>
                {t}
              </Badge>
            ))}
          </div>
        )}
        {!!metrics.length && (
          <ul className="list-disc pl-5 text-sm text-text-secondary space-y-1">
            {metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        {!!links.length && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map((l) => (
              <a 
                key={l.href} 
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-lavender hover:text-accent-primary transition-colors duration-150" 
                href={l.href} 
                target="_blank" 
                rel="noreferrer"
              >
                {l.label}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
