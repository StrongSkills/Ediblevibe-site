import { create } from 'zustand';
import { auth } from '../lib/firebase';
import type { User } from '../types/cms';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const result = await auth.signInWithEmailAndPassword(email, password);
      // Fetch additional user data from Firestore
      set({ user: result.user as unknown as User, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  signOut: async () => {
    try {
      await auth.signOut();
      set({ user: null });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
}));