import { ReactNode } from 'react';

export type BadgeProps = {
  children: ReactNode;
  color?: 'default' | 'blue' | 'cyan' | 'purple' | 'green' | 'red' | 'amber';
  className?: string;
};

const colorClass: Record<NonNullable<BadgeProps['color']>, string> = {
  default: 'badge',
  blue: 'badge bg-accent-blue/20 text-accent-blue',
  cyan: 'badge bg-accent-cyan/20 text-accent-cyan',
  purple: 'badge bg-secondary/20 text-secondary',
  green: 'badge bg-success/20 text-success',
  red: 'badge bg-error/20 text-error',
  amber: 'badge bg-warning/20 text-warning',
};

export function Badge({ children, color = 'default', className }: BadgeProps) {
  return <span className={`${colorClass[color]} ${className ?? ''}`}>{children}</span>;
}

export default Badge;
