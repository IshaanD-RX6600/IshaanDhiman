import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section with Animation */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -right-4 -top-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient">
              Ishaan Dhiman
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
              Full Stack Developer & AI Enthusiast
            </p>
            <div className="flex justify-center gap-6 animate-fade-in-up">
              <Link
                href="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl transform group-hover:scale-110 transition-transform">
                  🚀
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A modern portfolio website built with Next.js and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "React", "Tailwind CSS"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links with Hover Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "About Me",
                description: "Learn about my background and skills",
                href: "/about",
                icon: "👨‍💻",
              },
              {
                title: "Achievements",
                description: "View my accomplishments",
                href: "/achievements",
                icon: "🏆",
              },
              {
                title: "Contact",
                description: "Get in touch for opportunities",
                href: "/contact",
                icon: "📧",
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
