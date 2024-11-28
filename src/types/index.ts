export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  social: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Episode {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  views: string;
  duration: string;
  description?: string;
}