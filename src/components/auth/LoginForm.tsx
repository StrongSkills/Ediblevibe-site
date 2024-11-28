import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { signIn, loading, error } = useAuthStore();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await signIn(data.email, data.password);
  };

  return (
    <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 mb-4">
          <Lock className="w-8 h-8 text-orange-500 dark:text-orange-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}