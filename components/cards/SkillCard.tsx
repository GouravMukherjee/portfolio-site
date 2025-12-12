import { Badge } from '../ui/Badge';

export type SkillCardProps = {
  icon?: string;
  title: string;
  category?: string;
  proficiency?: number; // 0-100
  years?: number;
};

export function SkillCard({ icon, title, category, proficiency = 80, years }: SkillCardProps) {
  return (
    <div className="card group">
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-tertiary border border-accent-primary/30 text-lg text-accent-lavender group-hover:border-accent-primary/50 transition-colors duration-200">
            {icon}
          </span>
        )}
        <div className="flex-1">
          {category && <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">{category}</p>}
          <h4 className="text-base font-semibold text-text-primary">{title}</h4>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-tertiary border border-surface-border">
          <div
            className="h-full rounded-full bg-gradient-accent transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(0, proficiency))}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Proficiency</span>
          <span className="font-semibold">{proficiency}%</span>
        </div>
        {typeof years === 'number' && (
          <Badge className="mt-2">
            {years} {years === 1 ? 'year' : 'years'}
          </Badge>
        )}
      </div>
    </div>
  );
}

export default SkillCard;
