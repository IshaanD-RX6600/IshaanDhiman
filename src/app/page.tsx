import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { WebsiteContent } from "@/lib/supabase";

async function getWebsiteContent() {
  const { data, error } = await supabase
    .from("website_content")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error fetching website content:", error);
    return null;
  }

  return data as WebsiteContent;
}

export default async function Home() {
  const content = await getWebsiteContent();
  const featuredProjects = content?.content.projects.slice(0, 3) || [];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Ishaan Dhiman
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Full Stack Developer & Tech Enthusiast
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 rounded-xl">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about my background and skills
              </p>
            </Link>
            <Link
              href="/achievements"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="text-gray-600 dark:text-gray-400">
                View my accomplishments and certifications
              </p>
            </Link>
            <Link
              href="/contact"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get in touch for opportunities
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
