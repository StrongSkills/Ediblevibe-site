import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const episodes = [
  {
    id: 1,
    title: "Street Food Revolution",
    category: "Edible Reactions",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    views: "234K",
    duration: "18:45"
  },
  {
    id: 2,
    title: "Tesla Model S Plaid Review",
    category: "Auto Vibes",
    thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399",
    views: "186K",
    duration: "22:30"
  },
  {
    id: 3,
    title: "Chef's Table Special",
    category: "Edible Reactions",
    thumbnail: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf",
    views: "156K",
    duration: "25:15"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const episodeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const playButtonVariants = {
  initial: { scale: 0, rotate: -180 },
  hover: { 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export function FeaturedEpisodes() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white mb-12">
            Featured Episodes
          </h2>
        </FadeIn>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {episodes.map((episode) => (
            <motion.div 
              key={episode.id} 
              className="group relative overflow-hidden rounded-xl"
              variants={episodeVariants}
            >
              <motion.div
                className="relative h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="absolute bottom-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <motion.span 
                      className="text-orange-500 text-sm font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {episode.category}
                    </motion.span>
                    <motion.h3 
                      className="text-white text-xl font-bold mt-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {episode.title}
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-4 text-gray-300 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span>{episode.views} views</span>
                      <span className="mx-2">•</span>
                      <span>{episode.duration}</span>
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full"
                    variants={playButtonVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={24} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}