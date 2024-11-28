import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug } from '../../services/blogService';
import { LoadingSpinner } from '../../components/animations/LoadingSpinner';
import { AnimatedText } from '../../components/animations/AnimatedText';
import { ParallaxSection } from '../../components/animations/ParallaxSection';
import type { BlogPost } from '../../types';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const data = await getPostBySlug(slug);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!post) {
    return (
      <motion.div 
        className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">The post you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Edible Vibe</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <motion.div 
        className="min-h-screen bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ParallaxSection className="relative h-96">
          <motion.img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-end pb-12">
              <div className="max-w-3xl">
                <motion.span 
                  className="text-orange-500 text-sm font-semibold mb-4 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.category}
                </motion.span>
                <AnimatedText className="text-4xl font-bold text-white mb-4">
                  {post.title}
                </AnimatedText>
                <motion.div 
                  className="flex items-center text-gray-300 text-sm space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        <motion.div 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}