import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { FeaturedEpisodes } from '../components/home/FeaturedEpisodes';
import { Team } from '../components/home/Team';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Edible Vibe - Where Flavors Meet Fun and the Road</title>
        <meta name="description" content="Experience the perfect blend of culinary artistry, automotive excellence, and entertainment that drives your senses." />
      </Helmet>
      <Hero />
      <About />
      <FeaturedEpisodes />
      <Team />
    </>
  );
}