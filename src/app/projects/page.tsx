import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedRepos, GitHubRepo } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Projects | Ishaan Dhiman',
  description: 'Explore my portfolio of projects in web development, app development, and more.',
};

// Helper to get language color
function getLanguageColor(language: string): string {
  const colorMap: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Rust: '#dea584',
    Dart: '#00B4AB',
    // Add more languages as needed
  };
  
  return colorMap[language] || '#858585';
}

export default async function ProjectsPage() {
  try {
    // Fetch featured repositories
    const repositories = await getFeaturedRepos('IshaanD-RX6600', 10);
    const apiLimitExceeded = repositories.length > 0 && repositories[0].id === 1 && repositories[0].name === "Project 1";
    
    return (
      <main className="py-16 px-4 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my featured projects. These reflect my interests, skills, 
            and the technologies I've been working with.
          </p>
        </div>
        
        {apiLimitExceeded && (
          <div className="mb-8 p-4 border border-yellow-400 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-700 rounded-lg text-center">
            <p className="text-yellow-800 dark:text-yellow-200">
              <span className="font-bold">Note:</span> GitHub API rate limit exceeded. Showing placeholder projects.
              You can still visit my <a href="https://github.com/IshaanD-RX6600" target="_blank" className="underline">GitHub profile</a> directly.
            </p>
          </div>
        )}
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
        
        {/* Enhanced Call To Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-12 px-4 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Check out my GitHub profile for more projects and code samples.
          </p>
          <Link 
            href="https://github.com/IshaanD-RX6600"
            target="_blank"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />
            </svg>
            View All Projects on GitHub
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error rendering projects page:", error);
    
    // Fallback content if there's an error
    return (
      <main className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my featured projects. These reflect my interests, skills, 
            and the technologies I've been working with.
          </p>
        </div>
        
        <div className="mb-8 p-4 border border-red-400 bg-red-50 dark:bg-red-900/30 dark:border-red-700 rounded-lg text-center">
          <p className="text-red-800 dark:text-red-200">
            <span className="font-bold">Oops!</span> We're having trouble connecting to GitHub right now.
            You can visit my <a href="https://github.com/IshaanD-RX6600" target="_blank" className="underline">GitHub profile</a> directly to see my projects.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="https://github.com/IshaanD-RX6600"
            target="_blank"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects on GitHub
          </Link>
        </div>
      </main>
    );
  }
}

function ProjectCard({ repo }: { repo: GitHubRepo }) {
  // Choose an appropriate icon based on the repository language
  const getLanguageIcon = (language: string) => {
    switch(language?.toLowerCase()) {
      case 'typescript':
        return '🔷';
      case 'javascript':
        return '🟨';
      case 'python':
        return '🐍';
      case 'java':
        return '☕';
      case 'html':
        return '🌐';
      case 'css':
        return '🎨';
      default:
        return '💻';
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 transform hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-500">
      {/* Colorful Header with Icon */}
      <div 
        className="h-24 flex items-center justify-center text-white p-4"
        style={{ 
          background: `linear-gradient(135deg, ${getLanguageColor(repo.language || 'default')}80, ${getLanguageColor(repo.language || 'default')}40)`,
        }}
      >
        <span className="text-4xl transition-transform duration-300 hover:scale-125">{getLanguageIcon(repo.language)}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link href={repo.html_url} target="_blank" className="flex items-center">
            {repo.name}
            <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-5 min-h-[3rem] text-sm md:text-base line-clamp-3">
          {repo.description || "No description provided"}
        </p>
        
        {/* Repository Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {repo.topics.slice(0, 4).map((topic, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center flex-wrap gap-3 mb-5 pt-3 border-t border-gray-100 dark:border-gray-700">
          {repo.language && (
            <div className="flex items-center">
              <span 
                className="w-3 h-3 rounded-full mr-1.5"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 5.73 7.66c.4.08.55-.17.55-.39 0-.19-.01-.82-.01-1.49-2.34.48-2.84-.56-3.02-1.08-.1-.26-.51-1.06-.87-1.28-.3-.16-.73-.55-.01-.56.67-.01 1.15.62 1.32.87.77 1.17 2.01.84 2.5.64.08-.54.3-.9.55-1.1-1.92-.22-3.94-.96-3.94-4.28 0-.95.34-1.72.9-2.33-.09-.22-.39-1.12.09-2.32 0 0 .73-.24 2.4.9a8.4 8.4 0 0 1 4.4 0c1.67-1.14 2.4-.9 2.4-.9.48 1.2.18 2.1.09 2.32.56.61.9 1.38.9 2.33 0 3.32-2.03 4.06-3.95 4.28.31.26.58.78.58 1.56 0 1.13-.01 2.04-.01 2.31 0 .22.15.48.55.39A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"/>
            </svg>
            <span className="text-sm">{repo.stargazers_count} stars</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1v1h1v9.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V5h1V4h1V3zm4 0v1H7V3h2z"/>
            </svg>
            <span className="text-sm">{repo.forks_count} forks</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Link 
            href={repo.html_url}
            target="_blank"
            className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
} 