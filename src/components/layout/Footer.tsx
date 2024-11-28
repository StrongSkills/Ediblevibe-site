import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';
import { APP_CONFIG } from '../../constants/config';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-black text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              {APP_CONFIG.name}
            </h3>
            <p className="text-gray-400">
              {APP_CONFIG.description}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Episodes', 'Team', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-4">
              {['Food Reviews', 'Car Reviews', 'Recipes', 'Behind the Scenes'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Youtube, href: APP_CONFIG.social.youtube },
                { icon: Instagram, href: APP_CONFIG.social.instagram },
                { icon: Twitter, href: APP_CONFIG.social.twitter },
                { icon: Facebook, href: APP_CONFIG.social.facebook }
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <h5 className="font-semibold mb-2">Subscribe to our newsletter</h5>
              <form className="flex">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  className="bg-orange-500 hover:bg-orange-600 px-6 rounded-r-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}