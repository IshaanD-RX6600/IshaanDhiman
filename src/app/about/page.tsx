import { supabase } from '@/lib/supabase';
import type { WebsiteContent } from '@/lib/supabase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Your Name',
  description: 'Learn more about my background, skills, and experiences.',
};

async function getAboutContent() {
  const { data, error } = await supabase
    .from('website_content')
    .select('*')
    .eq('id', 1)
    .single();

  if (error) {
    console.error('Error fetching about content:', error);
    return { paragraphs: [] };
  }

  return (data as WebsiteContent).content.aboutMe;
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="prose dark:prose-invert lg:prose-lg mx-auto">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-600 dark:text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'Tailwind CSS',
            'PostgreSQL',
            'Git',
            'AWS',
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center hover:shadow-md transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Your University</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-sm text-gray-500">2020 - 2024</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Company Name
            </p>
            <p className="text-sm text-gray-500 mb-4">2023 - Present</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software</li>
              <li>Implemented new features and optimized existing codebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 