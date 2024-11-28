import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube, Instagram, Twitter } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SOCIAL_LINKS } from '../../constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    exit: { opacity: 0, x: 20 }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary dark:text-primary-dark"
            >
              Edible Vibe
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['Episodes', 'Team', 'Blog', 'Contact'].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="initial"
                animate="animate"
                variants={linkVariants}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              {[
                { icon: Youtube, href: SOCIAL_LINKS.youtube },
                { icon: Instagram, href: SOCIAL_LINKS.instagram },
                { icon: Twitter, href: SOCIAL_LINKS.twitter }
              ].map((social, i) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
          </motion.div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Episodes', 'Team', 'Blog', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}