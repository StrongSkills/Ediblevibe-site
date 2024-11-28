import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Filter } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';

const episodes = [
  {
    id: 1,
    title: "Street Food Revolution",
    category: "Food Reactions",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    views: "234K",
    duration: "18:45",
    description: "Join Chef Maria as she explores the vibrant street food scene in Bangkok, tasting everything from traditional pad thai to innovative fusion dishes."
  },
  {
    id: 2,
    title: "Tesla Model S Plaid Review",
    category: "Auto Vibes",
    thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399",
    views: "186K",
    duration: "22:30",
    description: "James takes the wheel of the Tesla Model S Plaid for an in-depth review of its performance, features, and how it's changing the automotive landscape."
  },
  {
    id: 3,
    title: "Michelin Star Street Food",
    category: "Food Reactions",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    views: "145K",
    duration: "24:15",
    description: "Exploring the world's first Michelin-starred street food vendors and discovering what makes their dishes extraordinary."
  }
];

export function EpisodesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <Helmet>
        <title>Episodes - Edible Vibe</title>
        <meta name="description" content="Watch our latest food reactions and automotive reviews. Experience the perfect blend of culinary and automotive content." />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <PageHeader 
            title="Latest Episodes"
            description="Dive into our world of culinary adventures and automotive excellence through our carefully curated episodes."
          />
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <button 
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === 'all' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Episodes
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === 'food' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveFilter('food')}
            >
              Food Reactions
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === 'auto' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveFilter('auto')}
            >
              Auto Vibes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <div key={episode.id} className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-48">
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-orange-500 text-sm font-semibold">
                        {episode.category}
                      </span>
                      <h3 className="text-white text-xl font-bold mt-2">
                        {episode.title}
                      </h3>
                    </div>
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                    <Play className="text-white" size={48} />
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{episode.views} views</span>
                    <span>{episode.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}