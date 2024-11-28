import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Car, Video, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const features = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Culinary Excellence",
    description: "Discover unique flavors and cooking techniques from renowned chefs worldwide."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Automotive Adventures",
    description: "Experience in-depth reviews of the latest and greatest vehicles on the market."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Entertainment",
    description: "Engaging content that brings food and automotive culture together."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Join a vibrant community of food and car enthusiasts sharing their passion."
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

const itemVariants = {
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

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Edible Vibe
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where culinary artistry meets automotive excellence. We're creating a new kind of entertainment 
            that brings together the best of food, cars, and community.
          </motion.p>
        </FadeIn>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative p-6 rounded-xl hover:shadow-xl transition duration-300 bg-gray-50 dark:bg-gray-700"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-500 mb-6"
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-4 dark:text-white"
                variants={itemVariants}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {feature.description}
              </motion.p>
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{ 
                  borderColor: "rgba(249, 115, 22, 0.4)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}