import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LogOut, Settings } from 'lucide-react';

export function AdminHeader() {
  const { user, signOut } = useAuthStore();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edible Vibe CMS
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-2">
              <img
                src={user?.avatar || 'https://ui-avatars.com/api/?name=' + user?.name}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {user?.name}
              </span>
            </div>
            <button
              onClick={() => signOut()}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}