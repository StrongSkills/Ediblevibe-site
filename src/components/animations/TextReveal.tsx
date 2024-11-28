import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
}

export function TextReveal({ children, className = '' }: TextRevealProps) {
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={letter === " " ? "mr-1" : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}