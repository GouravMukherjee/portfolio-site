export type DividerProps = {
  text?: string;
  opacity?: 'low' | 'medium' | 'high';
  color?: 'default' | 'blue' | 'cyan' | 'purple' | 'neutral';
};

const opacityMap = {
  low: 'opacity-30',
  medium: 'opacity-50',
  high: 'opacity-80',
};

const colorMap = {
  default: 'border-white/10',
  blue: 'border-accent-blue/40',
  cyan: 'border-accent-cyan/40',
  purple: 'border-secondary/40',
  neutral: 'border-neutral-700',
};

export function Divider({ text, opacity = 'medium', color = 'default' }: DividerProps) {
  return (
    <div className="relative my-8">
      <div className={`border-t ${colorMap[color]} ${opacityMap[opacity]}`} />
      {text && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 px-2 text-xs text-neutral-400">
          {text}
        </div>
      )}
    </div>
  );
}

export default Divider;
