import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { TextReveal } from '../animations/TextReveal';
import { ParallaxSection } from '../animations/ParallaxSection';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2765c437e25f9f31f16b18d1d8778e64c711" 
            type="video/mp4" 
          />
        </video>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ParallaxSection className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TextReveal className="text-5xl md:text-7xl font-bold text-white mb-6">
                Where Flavors Meet Fun and the Road
              </TextReveal>
              
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Experience the perfect blend of culinary artistry, automotive excellence, 
                and entertainment that drives your senses.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button variant="primary" to="/episodes">
                  Watch Episodes
                </Button>
                <Button variant="outline" to="/team">
                  Meet the Team
                </Button>
                <Button variant="secondary" to="/contact">
                  Join the Vibe
                </Button>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </motion.div>
      </div>
    </div>
  );
}