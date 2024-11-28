import type { BlogPost } from '../types';

// Mock data to simulate Firebase database
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Food Photography in Automotive Settings',
    slug: 'art-of-food-photography',
    excerpt: 'Discover how we capture the perfect shot of food in unique automotive locations, combining two worlds in one frame.',
    content: `<p>Food photography is an art form that requires careful attention to detail, lighting, and composition. When you add the complexity of automotive settings, it becomes even more challenging and exciting.</p>
              <p>In this article, we'll explore the techniques we use to capture stunning food shots in and around vehicles, creating a unique blend of culinary and automotive aesthetics.</p>`,
    category: 'Behind the Scenes',
    author: 'Sarah Thompson',
    date: '2024-03-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d'
  },
  {
    id: '2',
    title: 'Electric Vehicles and Fine Dining: A Perfect Pairing',
    slug: 'ev-fine-dining',
    excerpt: 'Exploring the intersection of sustainable transportation and modern gastronomy in our latest video series.',
    content: `<p>The rise of electric vehicles has brought about a new era of automotive luxury, one that pairs perfectly with the refined world of fine dining.</p>
              <p>We explore how top chefs are embracing sustainable transportation and incorporating it into their culinary philosophy.</p>`,
    category: 'Automotive',
    author: 'James Chen',
    date: '2024-03-12',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7'
  },
  {
    id: '3',
    title: 'Street Food Revolution: From Food Trucks to Supercars',
    slug: 'street-food-revolution',
    excerpt: 'How the street food scene is evolving alongside automotive culture, creating unique dining experiences.',
    content: `<p>Street food has always been about accessibility and authenticity. Now, it's finding new ways to merge with automotive culture.</p>
              <p>From food truck rallies at car shows to supercar-themed pop-up dining experiences, we explore this fascinating fusion.</p>`,
    category: 'Food',
    author: 'Maria Rodriguez',
    date: '2024-03-10',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb'
  }
];

export async function getAllPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockPosts.find(post => post.slug === slug) || null;
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockPosts.filter(post => post.category === category);
}