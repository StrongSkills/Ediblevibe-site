import React from 'react';
import { BarChart, Users, Video, FileText } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { title: 'Total Views', value: '234.5K', icon: BarChart, change: '+12.5%' },
    { title: 'Active Users', value: '12.8K', icon: Users, change: '+8.1%' },
    { title: 'Episodes', value: '45', icon: Video, change: '+2' },
    { title: 'Blog Posts', value: '28', icon: FileText, change: '+3' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-orange-500" size={24} />
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard sections as needed */}
    </div>
  );
}