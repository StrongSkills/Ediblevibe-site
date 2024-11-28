import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  cursorColor?: string;
}

export function TypingEffect({ 
  text, 
  className = '', 
  speed = 50,
  cursorColor = '#f97316' // orange-500
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, text, speed]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <AnimatePresence>
        {isTyping && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ color: cursorColor }}
            className="ml-1"
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}