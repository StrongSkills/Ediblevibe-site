import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export function AdminLayout() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}