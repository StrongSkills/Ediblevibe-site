import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = '',
  formatter = (value) => value.toLocaleString()
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => formatter(Math.round(latest)));

  React.useEffect(() => {
    const animation = animate(count, to, { duration });
    return animation.stop;
  }, [count, to]);

  return <motion.span className={className}>{rounded}</motion.span>;
}