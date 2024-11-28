import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function AnimatedButton({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium relative overflow-hidden";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-white hover:bg-white hover:text-black text-white"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}