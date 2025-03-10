import Link from 'next/link';
import { useTheme } from '@/lib/theme';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-70 border-b transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-blue-500 transition-colors">
            Your Name
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/achievements" className="hover:text-blue-500 transition-colors">
              Achievements
            </Link>
            <Link href="/blog" className="hover:text-blue-500 transition-colors">
              Blog
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 