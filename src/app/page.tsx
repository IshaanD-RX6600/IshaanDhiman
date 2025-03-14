import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Ishaan Dhiman - Student Developer',
  description: 'Welcome to my portfolio. I am a passionate student developer focusing on web development and AI.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0">
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -right-4 -top-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-4000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
            Ishaan Dhiman
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in">
            Aspiring Developer & Passionate Learner
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up">
            <Link
              href="/projects"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-44 sm:w-48 text-sm sm:text-base"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 w-44 sm:w-48 text-sm sm:text-base"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">At a Glance</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
            {[
              {
                title: "Academic Excellence",
                icon: "🎓",
                description: "CCC Score: 58/75 | Pascal Contest: 104/150",
                link: "/academics"
              },
              {
                title: "Coding Projects",
                icon: "💻",
                description: "Building innovative solutions with modern technologies",
                link: "/projects"
              },
              {
                title: "Extracurricular",
                icon: "🌟",
                description: "Active participation in tech clubs and coding competitions",
                link: "/activities"
              }
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white dark:hover:bg-gray-700"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                title: "Student Showcase Website",
                description: "A modern portfolio built with Next.js and Tailwind CSS",
                tech: ["Next.js", "Tailwind CSS", "TypeScript"],
              },
              {
                title: "GitHub Projects",
                description: "Check out my other projects and contributions",
                tech: ["Various Technologies"],
                isGitHub: true
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="h-36 sm:h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-125">
                    {project.isGitHub ? '📚' : '🚀'}
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/projects"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Let's Connect!</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Interested in collaborating or want to learn more about my work?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
