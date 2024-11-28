import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Chef Maria Rodriguez",
    role: "Head Chef & Food Curator",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    bio: "With over 15 years of culinary experience, Maria brings her passion for fusion cuisine and street food to Edible Vibe. She's known for her innovative approach to combining traditional techniques with modern flavors.",
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
    bio: "A certified automotive engineer turned content creator, James brings technical expertise and engaging storytelling to our automotive reviews. His passion for both cars and cuisine makes him the perfect bridge between our two worlds.",
    specialties: ["Performance Cars", "Electric Vehicles", "Classic Restorations"],
    social: {
      instagram: "jamesdrives",
      twitter: "jameschenreview",
      youtube: "jamesauto"
    }
  }
];

export function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team - Edible Vibe</title>
        <meta name="description" content="Meet the passionate team behind Edible Vibe - experts in culinary arts and automotive excellence." />
      </Helmet>

      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together the worlds of culinary arts and automotive excellence,
              creating unique content that entertains and inspires.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-96 md:h-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-orange-500 font-semibold mb-6">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a href={`https://instagram.com/${member.social.instagram}`} className="text-gray-400 hover:text-orange-500 transition">
                        <Instagram size={24} />
                      </a>
                      <a href={`https://twitter.com/${member.social.twitter}`} className="text-gray-400 hover:text-orange-500 transition">
                        <Twitter size={24} />
                      </a>
                      <a href={`https://youtube.com/${member.social.youtube}`} className="text-gray-400 hover:text-orange-500 transition">
                        <Youtube size={24} />
                      </a>
                    </div>
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