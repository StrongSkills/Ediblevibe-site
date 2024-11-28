import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components/ui/PageHeader';
import { BlogList } from '../../components/blog/BlogList';
import { getAllPosts, getPostsByCategory } from '../../services/blogService';
import type { BlogPost } from '../../types';

const categories = ["All", "Food", "Automotive", "Behind the Scenes", "Events"];

export function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = activeCategory === "All" 
          ? await getAllPosts()
          : await getPostsByCategory(activeCategory);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Edible Vibe</title>
        <meta name="description" content="Explore the latest articles about food, cars, and entertainment from the Edible Vibe team." />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <PageHeader 
            title="Latest Stories"
            description="Dive into our world of culinary adventures and automotive excellence through our latest stories and behind-the-scenes content."
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </div>
    </>
  );
}