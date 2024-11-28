import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../animations/AnimatedText';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedText className="text-4xl font-bold mb-6">
        {title}
      </AnimatedText>
      {description && (
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}