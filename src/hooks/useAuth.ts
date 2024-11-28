import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export function useAuth() {
  const { user, loading, error, signIn, signOut } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/admin');
    }
  }, [user, loading, navigate]);

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };
}