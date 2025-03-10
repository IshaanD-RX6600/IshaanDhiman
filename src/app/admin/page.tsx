'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { WebsiteContent } from '@/lib/supabase';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<WebsiteContent['content'] | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      await fetchContent();
    } else {
      alert('Invalid password');
    }
  };

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) throw error;
      setContent(data.content);
    } catch (error) {
      console.error('Error fetching content:', error);
      alert('Failed to fetch content');
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setStatus('loading');
    try {
      const { error } = await supabase
        .from('website_content')
        .update({ content })
        .eq('id', 1);

      if (error) throw error;
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error saving content:', error);
      setStatus('error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <textarea
            value={content.aboutMe.paragraphs.join('\n\n')}
            onChange={(e) => setContent({
              ...content,
              aboutMe: { paragraphs: e.target.value.split('\n\n').filter(Boolean) }
            })}
            rows={10}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {content.projects.map((project, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg dark:border-gray-700">
              <input
                type="text"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...content.projects];
                  newProjects[index] = { ...project, title: e.target.value };
                  setContent({ ...content, projects: newProjects });
                }}
                placeholder="Project Title"
                className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <textarea
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...content.projects];
                  newProjects[index] = { ...project, description: e.target.value };
                  setContent({ ...content, projects: newProjects });
                }}
                placeholder="Project Description"
                rows={3}
                className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => {
                  const newProjects = [...content.projects];
                  newProjects[index] = {
                    ...project,
                    technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                  };
                  setContent({ ...content, projects: newProjects });
                }}
                placeholder="Technologies (comma-separated)"
                className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                value={project.link || ''}
                onChange={(e) => {
                  const newProjects = [...content.projects];
                  newProjects[index] = { ...project, link: e.target.value };
                  setContent({ ...content, projects: newProjects });
                }}
                placeholder="Project Link (optional)"
                className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                onClick={() => {
                  const newProjects = content.projects.filter((_, i) => i !== index);
                  setContent({ ...content, projects: newProjects });
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Remove Project
              </button>
            </div>
          ))}
          <button
            onClick={() => {
              setContent({
                ...content,
                projects: [
                  ...content.projects,
                  {
                    title: '',
                    description: '',
                    technologies: [],
                    link: '',
                  }
                ]
              });
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Add Project
          </button>
        </section>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            disabled={status === 'loading'}
            className={`px-6 py-2 text-white rounded-lg transition-colors ${
              status === 'loading'
                ? 'bg-gray-400'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {status === 'loading' ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-green-600 text-center">Changes saved successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center">
            Failed to save changes. Please try again.
          </p>
        )}
      </div>
    </div>
  );
} 