import { Badge } from '../ui/Badge';

export type ExperienceItemProps = {
  logo?: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  accomplishments?: string[];
  stack?: string[];
};

export function ExperienceItem({
  logo,
  company,
  position,
  duration,
  location,
  accomplishments = [],
  stack = [],
}: ExperienceItemProps) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-accent-cyan" />
      <div className="card">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {logo && <img src={logo} alt="logo" className="h-8 w-8 rounded bg-white/10" />}
            <div>
              <p className="text-sm text-neutral-400">{company}</p>
              <h4 className="text-white">{position}</h4>
            </div>
          </div>
          <div className="text-xs text-neutral-400">{duration}</div>
        </div>
        {location && <div className="mt-1 text-xs text-neutral-500">{location}</div>}
        {!!accomplishments.length && (
          <ul className="mt-3 list-disc pl-6 text-sm text-neutral-300">
            {accomplishments.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        {!!stack.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t} color="cyan">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
