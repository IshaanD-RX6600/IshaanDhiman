import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Ishaan Dhiman',
  description: 'Explore my portfolio of projects in web development, AI, and more.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, dynamic content loading, and smooth animations.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      image: '/projects/portfolio.png',
      liveUrl: 'https://ishaan-portfolio.vercel.app',
      githubUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application that leverages machine learning for natural conversations. Built with Python and React.',
      technologies: ['Python', 'React', 'Machine Learning', 'FastAPI'],
      image: '/projects/ai-chat.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.png',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-blue-600">
                🚀
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 