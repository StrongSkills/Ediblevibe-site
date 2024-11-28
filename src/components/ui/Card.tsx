import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div 
      className="relative h-48"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}