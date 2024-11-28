import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="w-16 h-16 border-4 border-orange-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-gray-500 dark:text-gray-400">Loading experience...</p>
    </div>
  );
}