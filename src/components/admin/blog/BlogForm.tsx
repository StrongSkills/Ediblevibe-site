import React from 'react';
import { useForm } from 'react-hook-form';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import type { BlogPost } from '../../../types';

interface BlogFormProps {
  post?: Partial<BlogPost>;
  onSubmit: (data: Partial<BlogPost>) => void;
  isSubmitting?: boolean;
}

export function BlogForm({ post, onSubmit, isSubmitting }: BlogFormProps) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: post?.title || '',
      excerpt: post?.excerpt || '',
      content: post?.content || '',
      category: post?.category || '',
      image: post?.image || ''
    }
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles) => {
      // In a real app, you would upload the file to storage
      // For now, we'll just use the first file's object URL
      if (acceptedFiles[0]) {
        setValue('image', URL.createObjectURL(acceptedFiles[0]));
      }
    }
  });

  const watchImage = watch('image');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Featured Image
        </label>
        <div 
          {...getRootProps()} 
          className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-orange-500 transition-colors"
        >
          <input {...getInputProps()} />
          {watchImage ? (
            <img src={watchImage} alt="Preview" className="max-h-48 mx-auto" />
          ) : (
            <div className="space-y-2">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="text-sm text-gray-500">
                Drag and drop an image, or click to select
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title
        </label>
        <input
          {...register('title', { required: 'Title is required' })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category
        </label>
        <select
          {...register('category', { required: 'Category is required' })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Automotive">Automotive</option>
          <option value="Behind the Scenes">Behind the Scenes</option>
          <option value="Events">Events</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Excerpt
        </label>
        <textarea
          {...register('excerpt', { required: 'Excerpt is required' })}
          rows={3}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
        />
        {errors.excerpt && (
          <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Content
        </label>
        <textarea
          {...register('content', { required: 'Content is required' })}
          rows={10}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Post'}
        </button>
      </div>
    </form>
  );
}