import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function FloatingElement({ 
  children, 
  className = '', 
  duration = 3,
  distance = 15 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}