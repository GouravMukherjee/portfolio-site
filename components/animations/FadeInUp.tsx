"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export type FadeInUpProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6,
  ...props 
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut' 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
