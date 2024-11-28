import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridProps {
  children: React.ReactNode[];
  className?: string;
  columns?: number;
}

export function AnimatedGrid({ children, className = '', columns = 3 }: AnimatedGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}