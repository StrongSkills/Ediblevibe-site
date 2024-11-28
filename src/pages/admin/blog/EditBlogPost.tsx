import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogForm } from '../../../components/admin/blog/BlogForm';
import { getPostBySlug } from '../../../services/blogService';
import type { BlogPost } from '../../../types';

export function EditBlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
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

  const handleSubmit = async (data: Partial<BlogPost>) => {
    try {
      // In a real app, you would update in Firebase here
      console.log('Updating post:', data);
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edit Post</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <BlogForm post={post} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}