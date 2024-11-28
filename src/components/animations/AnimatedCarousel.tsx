import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AnimatedCarouselProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function AnimatedCarousel({
  items,
  className = '',
  autoPlay = true,
  interval = 5000
}: AnimatedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + items.length) % items.length);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-orange-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}