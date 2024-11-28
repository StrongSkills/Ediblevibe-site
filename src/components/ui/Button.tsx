import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium relative overflow-hidden";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-white hover:bg-white hover:text-black text-white"
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button {...props}>
      {buttonContent}
    </button>
  );
}