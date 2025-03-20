import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });

export const metadata: Metadata = {
  title: 'Projects - Ishaan Dhiman',
  description: 'Explore my portfolio of projects in web development, AI, and more.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Face Swap Application",
      description: "An advanced face swapping tool that can replace faces in videos using just a single reference image. Built with Python and deep learning, this project requires no dataset or training.",
      technologies: ["Python", "Computer Vision", "Deep Learning"],
      features: [
        "Single image face replacement",
        "Video processing support",
        "No training required",
        "Multiple face detection"
      ],
      github: "https://github.com/IshaanD-RX6600/Face-Swap",
      type: "AI & Computer Vision"
    },
    {
      title: "Chess Game Engine",
      description: "A TypeScript-based chess library for move generation, validation, and game state management. Features support for FEN notation and PGN format.",
      technologies: ["TypeScript", "Chess.js", "Game Development"],
      features: [
        "Move validation",
        "Game state management",
        "FEN/PGN support",
        "Headless architecture"
      ],
      github: "https://github.com/IshaanD-RX6600/Playing-around-with-chess",
      type: "Game Development"
    },
    {
      title: "Handwritten Text Recognition",
      description: "Convert handwritten text into digital format using advanced OCR and machine learning techniques.",
      technologies: ["Python", "OCR", "Machine Learning"],
      features: [
        "Handwriting recognition",
        "Text extraction",
        "Digital conversion",
        "Image processing"
      ],
      github: "https://github.com/IshaanD-RX6600/Handwritten-to-text",
      type: "AI & Machine Learning"
    },
    {
      title: "Student Help Website",
      description: "A platform designed to assist students with resources and tools for academic success.",
      technologies: ["Web Development", "Educational Tech"],
      features: [
        "Resource management",
        "Student tools",
        "Academic support",
        "User-friendly interface"
      ],
      github: "https://github.com/IshaanD-RX6600/Student-Help-Website",
      type: "Web Development"
    },
    {
      title: "Move Master",
      description: "A comprehensive sports training platform that helps users learn and master various sports techniques. Features interactive tutorials and progress tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      features: [
        "Interactive sports tutorials",
        "User authentication",
        "Progress tracking",
        "Responsive design"
      ],
      github: "https://github.com/IshaanD-RX6600/Move-Master",
      demo: "https://www.youtube.com/watch?v=S022Pv9t8z4",
      type: "Web Development"
    },
    {
      title: "DSA Help",
      description: "A comprehensive collection of Data Structures and Algorithms implementations in multiple programming languages (C++, Java, Python, JavaScript) to help students learn and practice DSA concepts.",
      technologies: ["C++", "Java", "Python", "JavaScript", "DSA"],
      features: [
        "Multiple language implementations",
        "Common DSA concepts",
        "Educational resources",
        "Practice problems"
      ],
      github: "https://github.com/IshaanD-RX6600/DSA-Help",
      type: "Educational"
    },
    {
      title: "Practice Problem Solving",
      description: "A collection of coding problems and solutions focused on competitive programming preparation, including solutions for various coding platforms and contests.",
      technologies: ["C++", "Competitive Programming", "Algorithms"],
      features: [
        "LeetCode solutions",
        "Contest preparations",
        "Algorithm implementations",
        "Problem-solving strategies"
      ],
      github: "https://github.com/IshaanD-RX6600/Practice-Problem-Solving",
      type: "Competitive Programming"
    },
    {
      title: "Move Master Backend",
      description: "The backend infrastructure for the Move Master platform, providing API endpoints and database management for the sports training application.",
      technologies: ["Node.js", "Express", "Database", "REST API"],
      features: [
        "RESTful API endpoints",
        "User data management",
        "Authentication system",
        "Progress tracking API"
      ],
      github: "https://github.com/IshaanD-RX6600/backend-for-move-master",
      type: "Backend Development"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Exploring the intersection of AI, web development, and software engineering through hands-on projects.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
} 