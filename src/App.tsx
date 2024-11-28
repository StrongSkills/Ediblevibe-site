import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthGuard } from './components/auth/AuthGuard';
import { Layout } from './components/layout/Layout';
import { AdminLayout } from './components/admin/AdminLayout';
import { HomePage } from './pages/HomePage';
import { EpisodesPage } from './pages/EpisodesPage';
import { TeamPage } from './pages/TeamPage';
import { BlogListPage } from './pages/blog/BlogListPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/admin/LoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminEpisodes } from './pages/admin/AdminEpisodes';
import { AdminBlog } from './pages/admin/AdminBlog';
import { CreateBlogPost } from './pages/admin/blog/CreateBlogPost';
import { EditBlogPost } from './pages/admin/blog/EditBlogPost';
import { AdminTeam } from './pages/admin/AdminTeam';

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="episodes" element={<EpisodesPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<AuthGuard><AdminLayout /></AuthGuard>}>
          <Route index element={<AdminDashboard />} />
          <Route path="episodes" element={<AdminEpisodes />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="blog/new" element={<CreateBlogPost />} />
          <Route path="blog/edit/:slug" element={<EditBlogPost />} />
          <Route path="team" element={<AdminTeam />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <AnimatedRoutes />
            <Toaster position="top-right" />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;