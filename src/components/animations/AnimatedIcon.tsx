import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export function AnimatedIcon({ icon: Icon, size = 24, className = '' }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={className}
    >
      <Icon size={size} />
    </motion.div>
  );
}