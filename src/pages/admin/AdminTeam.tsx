import React from 'react';
import { Plus, Search } from 'lucide-react';

export function AdminTeam() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add Member
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700"
            />
          </div>
        </div>

        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Name</th>
                <th className="pb-4">Role</th>
                <th className="pb-4">Specialties</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}