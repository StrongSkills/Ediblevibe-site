import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}