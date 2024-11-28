import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function RippleEffect({ 
  children, 
  className = '',
  color = 'rgba(249, 115, 22, 0.2)' // orange-500 with opacity
}: RippleEffectProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setRipples([...ripples, { x, y, id: Date.now() }]);
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <AnimatePresence>
        {ripples.map(({ x, y, id }) => (
          <motion.span
            key={id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: color,
              transform: 'translate(-50%, -50%)',
            }}
            onAnimationComplete={() => {
              setRipples(ripples.filter(ripple => ripple.id !== id));
            }}
          />
        ))}
      </AnimatePresence>
      {children}
    </motion.div>
  );
}