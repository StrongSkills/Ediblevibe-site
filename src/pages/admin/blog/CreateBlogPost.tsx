import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogForm } from '../../../components/admin/blog/BlogForm';
import type { BlogPost } from '../../../types';

export function CreateBlogPost() {
  const navigate = useNavigate();

  const handleSubmit = async (data: Partial<BlogPost>) => {
    try {
      // In a real app, you would save to Firebase here
      console.log('Saving post:', data);
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Create New Post</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}