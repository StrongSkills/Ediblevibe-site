import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../components/auth/LoginForm';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Admin Login - Edible Vibe</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <LoginForm />
      </div>
    </>
  );
}