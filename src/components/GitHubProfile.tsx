'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  blog?: string;
  twitter_username?: string;
}

interface GitHubStats {
  totalCommits: number;
  totalStars: number;
  totalForks: number;
  contributedTo: number;
}

interface GitHubProfileProps {
  username: string;
}

export default function GitHubProfile({ username }: GitHubProfileProps) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        
        // Fetch basic user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub profile');
        }
        
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories for additional stats
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          
          // Calculate stats from repositories
          const totalStars = reposData.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);
          const totalForks = reposData.reduce((sum: number, repo: any) => sum + (repo.forks_count || 0), 0);
            // For commit count, we'll use a reasonable estimate based on your actual stats
          // Since GitHub API doesn't provide total commits easily, we'll use your actual count
          setStats({
            totalCommits: 350, // Updated to reflect current GitHub stats (300+)
            totalStars,
            totalForks,
            contributedTo: reposData.length
          });
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub profile:', err);
        setError('Failed to load GitHub profile');
      } finally {
        setLoading(false);
      }
    }
    
    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="animate-pulse flex flex-col items-center w-full">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-24 w-24 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2.5"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/4 mb-4"></div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mb-6"></div>
          <div className="flex justify-between w-full">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center text-red-500">
          <p>Error loading GitHub profile</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mb-4 sm:mb-0 sm:mr-6">
            <Image
              src={user.avatar_url}
              alt={`${user.name || user.login}'s GitHub avatar`}
              width={100}
              height={100}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            />
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {user.name || user.login}
            </h3>
            <Link 
              href={user.html_url} 
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              @{user.login}
            </Link>
            {user.bio && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{user.bio}</p>
            )}
          </div>
        </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
          <div className="px-4 py-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.public_repos}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Repositories</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.followers}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.following}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats ? `${stats.totalCommits}+` : '...'}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Commits</div>
          </div>
        </div>

        {stats && (
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            <div className="px-4 py-2">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stats.totalStars}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Stars Earned</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stats.totalForks}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Forks</div>
            </div>
          </div>
        )}
        
        {(user.location || user.company || user.blog || user.twitter_username) && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {user.location && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{user.location}</span>
                </div>
              )}
              
              {user.company && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                  <span>{user.company}</span>
                </div>
              )}
              
              {user.blog && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  <Link 
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                    target="_blank"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {user.blog.replace(/^https?:\/\//, '')}
                  </Link>
                </div>
              )}
              
              {user.twitter_username && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                  <Link 
                    href={`https://twitter.com/${user.twitter_username}`} 
                    target="_blank"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    @{user.twitter_username}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <Link 
            href={user.html_url}
            target="_blank"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Profile on GitHub
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 