export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  name: string;
  avatar?: string;
}

export interface Content {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  type: 'episode' | 'blog' | 'team';
  category: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  metadata: Record<string, any>;
}

export interface Episode extends Content {
  videoUrl: string;
  duration: string;
  views: number;
  guests: string[];
}

export interface BlogPost extends Content {
  readTime: string;
}

export interface TeamMember extends Content {
  role: string;
  specialties: string[];
  social: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}