import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function AnimatedModal({ isOpen, onClose, children, title }: AnimatedModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg relative"
              layoutId="modal"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                {title && (
                  <h2 className="text-xl font-semibold">{title}</h2>
                )}
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}