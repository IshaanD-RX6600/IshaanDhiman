import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Ishaan Dhiman - Student Developer',
  description: 'Welcome to my portfolio. I am a passionate student developer focusing on web development and AI.',
};

async function getGitHubStats() {
  try {
    const username = 'IshaanD-RX6600';
    const token = process.env.GITHUB_ACCESS_TOKEN;

    // GraphQL query to get total commits
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositories(first: 100, ownerAffiliations: OWNER) {
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    // Fetch data using GraphQL
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Revalidate every hour
    });

    const data = await response.json();
    
    if (!data.data) {
      throw new Error('No data received from GitHub');
    }

    // Calculate total commits
    const totalCommits = data.data.user.repositories.nodes.reduce((total: number, repo: any) => {
      if (repo.defaultBranchRef?.target?.history?.totalCount) {
        return total + repo.defaultBranchRef.target.history.totalCount;
      }
      return total;
    }, 0);

    // Get repositories to count technologies
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposResponse.json();

    // Count unique technologies
    const languages = new Set();
    await Promise.all(repos.map(async (repo: any) => {
      if (repo.language) {
        languages.add(repo.language);
      }
      const langResponse = await fetch(repo.languages_url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const langData = await langResponse.json();
      Object.keys(langData).forEach(lang => languages.add(lang));
    }));

    return {
      projects: repos.length,
      totalCommits: totalCommits,
      technologies: languages.size,
      hackathons: 3
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      projects: 0,
      totalCommits: 0,
      technologies: 0,
      hackathons: 0
    };
  }
}

export default async function Home() {
  const stats = await getGitHubStats();
  
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
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:200%_auto] text-transparent bg-clip-text">
            Aspiring Developer & Passionate Learner
          </p>
          <div className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-base sm:text-lg animate-fade-in">
            <p className="mb-4">
              Hi, I'm Ishaan Dhiman, a passionate grade 10 student with a love for coding, web development, and problem-solving. I'm currently exploring backend development, physics, and math while working on exciting projects, including a website for my coding club. My tech stack includes React, Next.js, Tailwind CSS, Supabase, and Vercel, and I'm always eager to learn and improve.
            </p>
            <p>
              When I'm not coding, you'll find me experimenting with new technologies, biking, playing soccer with my friends, refining my skills, or collaborating on innovative projects. Let's build something amazing together!
            </p>
          </div>
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

      {/* Statistics Section */}
      <section className="py-12 bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stats.projects}+</div>
              <div className="text-gray-400 text-sm text-center">Projects Completed</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stats.hackathons}+</div>
              <div className="text-gray-400 text-sm text-center">Hackathons</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stats.totalCommits}</div>
              <div className="text-gray-400 text-sm text-center">Total Commits</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0-3h8v2h-8zm0 6h4v2h-4z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stats.technologies}+</div>
              <div className="text-gray-400 text-sm text-center">Technologies</div>
            </div>
          </div>
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
