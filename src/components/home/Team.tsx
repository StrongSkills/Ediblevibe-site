import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const team = [
  {
    id: 1,
    name: "Chef Maria Rodriguez",
    role: "Head Chef & Food Curator",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    bio: "With over 15 years of culinary experience, Maria brings her passion for fusion cuisine and street food to Edible Vibe.",
    specialties: ["Modern Fusion", "Street Food", "Traditional Spanish"],
    social: {
      instagram: "chefmaria",
      twitter: "chefmariarodriguez",
      youtube: "mariascooking"
    }
  },
  {
    id: 2,
    name: "James Chen",
    role: "Automotive Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "A certified automotive engineer turned content creator, James brings technical expertise and engaging storytelling to our automotive reviews.",
    specialties: ["Performance Cars", "Electric Vehicles", "Classic Restorations"],
    social: {
      instagram: "jamesdrives",
      twitter: "jameschenreview",
      youtube: "jamesauto"
    }
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

const memberVariants = {
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

const socialVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

export function Team() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together culinary arts and automotive excellence 
            to create unique, engaging content.
          </p>
        </FadeIn>

        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div 
              key={member.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
              variants={memberVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div 
                  className="relative h-96 md:h-auto overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-orange-500 font-semibold mb-6">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <motion.span 
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex space-x-4"
                    variants={socialVariants}
                  >
                    {[
                      { icon: Instagram, href: `https://instagram.com/${member.social.instagram}` },
                      { icon: Twitter, href: `https://twitter.com/${member.social.twitter}` },
                      { icon: Youtube, href: `https://youtube.com/${member.social.youtube}` }
                    ].map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}