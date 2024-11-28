import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AnimatedAccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function AnimatedAccordion({ items, className = '' }: AnimatedAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
          initial={false}
        >
          <motion.button
            className="w-full px-4 py-3 flex items-center justify-between text-left"
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            <span className="font-medium">{item.title}</span>
            <motion.div
              animate={{ rotate: expandedId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-4 pb-4">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}