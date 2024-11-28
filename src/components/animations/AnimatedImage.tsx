import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function AnimatedImage({ containerClassName = '', ...props }: AnimatedImageProps) {
  return (
    <motion.div
      className={`overflow-hidden ${containerClassName}`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        {...props}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${props.className || ''}`}
      />
    </motion.div>
  );
}