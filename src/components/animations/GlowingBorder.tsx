import React from 'react';
import { motion } from 'framer-motion';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingBorder({ 
  children, 
  className = '', 
  glowColor = 'rgba(249, 115, 22, 0.4)' // orange-500 with opacity
}: GlowingBorderProps) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: [
            `0 0 0 ${glowColor}`,
            `0 0 20px ${glowColor}`,
            `0 0 0 ${glowColor}`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {children}
    </motion.div>
  );
}