import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Ishaan Dhiman',
  description: 'Explore my portfolio of web development and AI projects',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application powered by machine learning, capable of natural conversations and task assistance.',
      image: '/projects/ai-chat.png',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
      features: [
        'Natural language processing',
        'Real-time responses',
        'Context awareness',
        'Multi-language support',
      ],
      github: 'https://github.com/yourusername/ai-chat',
      demo: 'https://ai-chat-demo.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
      image: '/projects/portfolio.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Responsive design',
        'Dark/Light mode',
        'Smooth animations',
        'SEO optimized',
      ],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://ishaan-portfolio.vercel.app',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      image: '/projects/ecommerce.png',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'User authentication',
        'Shopping cart',
        'Payment processing',
        'Order management',
      ],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my work in web development, AI, and more. Each project represents unique challenges and learning experiences.
        </p>
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
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
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
          <h2 className="text-2xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="mb-6">
            Interested in collaborating or have a project in mind? Let's connect!
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