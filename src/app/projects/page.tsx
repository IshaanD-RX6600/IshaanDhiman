import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Ishaan Dhiman',
  description: 'Explore my coding projects and GitHub repositories.',
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
  image?: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Student Showcase Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dynamic content management.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      features: [
        'Responsive design with dark mode',
        'Dynamic content management',
        'SEO optimization',
        'Contact form integration'
      ],
      github: 'https://github.com/yourusername/student-showcase',
      demo: 'https://student-showcase.vercel.app'
    },
    {
      title: 'Python Utility Scripts',
      description: 'A collection of Python scripts for automating various tasks and solving programming challenges.',
      tech: ['Python', 'Pandas', 'NumPy'],
      features: [
        'Data processing utilities',
        'File management tools',
        'Algorithm implementations',
        'Command-line interfaces'
      ],
      github: 'https://github.com/yourusername/python-utils'
    },
    {
      title: 'Weather Dashboard',
      description: 'A web application that displays weather information using public APIs and modern web technologies.',
      tech: ['React', 'JavaScript', 'CSS', 'Weather API'],
      features: [
        'Real-time weather data',
        'Location-based forecasts',
        'Interactive charts',
        'Responsive design'
      ],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my coding projects, from web applications to utility scripts.
          Each project represents unique challenges and learning experiences.
        </p>
      </div>

      {/* GitHub Stats */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">GitHub Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Repositories', value: '10+' },
              { label: 'Contributions', value: '200+' },
              { label: 'Languages', value: '5' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="mb-6">
            I'm always looking to learn and work on interesting projects.
            Let's build something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 