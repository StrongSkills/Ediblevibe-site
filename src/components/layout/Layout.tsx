import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </motion.main>
      <Footer />
    </div>
  );
}