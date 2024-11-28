import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <motion.div 
            className="absolute bottom-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-orange-500 text-sm font-semibold">
              {post.category}
            </span>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-3 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
          <Clock size={16} className="mr-1" />
          <span>{post.readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">By {post.author}</span>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link 
              to={`/blog/${post.slug}`}
              className="text-orange-500 hover:text-orange-600 flex items-center transition"
            >
              Read More
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}