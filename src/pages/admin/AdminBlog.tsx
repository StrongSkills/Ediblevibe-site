import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { getAllPosts } from '../../services/blogService';
import type { BlogPost } from '../../types';

export function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      // In a real app, you would delete from Firebase here
      console.log('Deleting post:', id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link 
          to="/admin/blog/new"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          New Post
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
            />
          </div>
        </div>

        <div className="p-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Author</th>
                  <th className="pb-4">Category</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-700">
                {posts.map((post) => (
                  <tr key={post.id} className="text-sm">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                        <span className="font-medium">{post.title}</span>
                      </div>
                    </td>
                    <td className="py-4">{post.author}</td>
                    <td className="py-4">{post.category}</td>
                    <td className="py-4">{new Date(post.date).toLocaleDateString()}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/admin/blog/edit/${post.slug}`}
                          className="p-2 text-gray-500 hover:text-orange-500 transition-colors"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}