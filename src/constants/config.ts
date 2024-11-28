export const APP_CONFIG = {
  name: 'Edible Vibe',
  description: 'Where Flavors Meet Fun and the Road',
  social: {
    youtube: 'https://youtube.com/ediblevibe',
    instagram: 'https://instagram.com/ediblevibe',
    twitter: 'https://twitter.com/ediblevibe',
    facebook: 'https://facebook.com/ediblevibe'
  },
  contact: {
    email: 'contact@ediblevibe.com',
    phone: '+1 (555) 123-4567',
    address: '123 Content Drive, Los Angeles, CA 90028'
  }
} as const;

export const CATEGORIES = [
  'All',
  'Food',
  'Automotive',
  'Behind the Scenes',
  'Events'
] as const;

export const ROUTES = {
  home: '/',
  episodes: '/episodes',
  team: '/team',
  blog: '/blog',
  contact: '/contact',
  admin: {
    login: '/admin/login',
    dashboard: '/admin',
    episodes: '/admin/episodes',
    blog: '/admin/blog',
    team: '/admin/team'
  }
} as const;