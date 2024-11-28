import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Layout, 
  Video, 
  FileText, 
  Users, 
  Tag, 
  Settings,
  BarChart
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: Layout },
  { name: 'Episodes', href: '/admin/episodes', icon: Video },
  { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { name: 'Team', href: '/admin/team', icon: Users },
  { name: 'Categories', href: '/admin/categories', icon: Tag },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500 dark:text-gray-300 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}