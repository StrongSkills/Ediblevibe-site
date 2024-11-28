import React from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function AnimatedTabs({ tabs, activeTab, onTabChange, className = '' }: AnimatedTabsProps) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-full relative ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeTab === tab.id && (
            <motion.div
              className="absolute inset-0 bg-orange-500 rounded-full -z-10"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
}