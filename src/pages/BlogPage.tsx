import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';

const categories = ["All", "Food", "Automotive", "Behind the Scenes", "Events"];

const blogPosts = [
  {
    id: 1,
    title: "The Art of Food Photography in Automotive Settings",
    excerpt: "Discover how we capture the perfect shot of food in unique automotive locations, combining two worlds in one frame.",
    category: "Behind the Scenes",
    author: "Sarah Thompson",
    date: "2024-03-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d"
  },
  {
    id: 2,
    title: "Electric Vehicles and Fine Dining: A Perfect Pairing",
    excerpt: "Exploring the intersection of sustainable transportation and modern gastronomy in our latest video series.",
    category: "Automotive",
    author: "James Chen",
    date: "2024-03-12",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
  },
  {
    id: 3,
    title: "Street Food Revolution: From Food Trucks to Supercars",
    excerpt: "How the street food scene is evolving alongside automotive culture, creating unique dining experiences.",
    category: "Food",
    author: "Maria Rodriguez",
    date: "2024-03-10",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb"
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-orange-500 text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">By {post.author}</span>
                    <button className="text-orange-500 hover:text-orange-600 flex items-center transition">
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}