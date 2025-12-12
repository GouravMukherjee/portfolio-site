import { ReactNode } from 'react';

export type SectionContainerProps = {
  children: ReactNode;
  gradient?: boolean;
  className?: string;
};

export function SectionContainer({ children, gradient = false, className }: SectionContainerProps) {
  return (
    <section className={`section-container ${className ?? ''}`}>
      <div className={`${gradient ? 'bg-gradient-electric/10 rounded-xl p-1' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
