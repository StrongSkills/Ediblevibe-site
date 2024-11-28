import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"
        animate={{
          x: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}