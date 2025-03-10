import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Ishaan Dhiman',
  description: 'Learn more about Ishaan Dhiman - Full Stack Developer & AI Enthusiast',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Passionate about technology, innovation, and continuous learning
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Introduction */}
        <section className="prose dark:prose-invert lg:prose-lg mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed mb-6">
              Hi there! I'm Ishaan Dhiman, a Full Stack Developer with a deep passion for creating innovative solutions. I specialize in building modern web applications and exploring the fascinating world of artificial intelligence.
            </p>
            <p className="text-lg leading-relaxed">
              As an avid reader and lifelong learner, I constantly seek to expand my knowledge and stay up-to-date with the latest technological advancements. My journey in tech is driven by curiosity and a desire to create meaningful impact through code.
            </p>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Reading",
                description:
                  "From technical books to sci-fi novels, reading helps me gain new perspectives and fuels my creativity.",
              },
              {
                icon: "💻",
                title: "Coding",
                description:
                  "Building elegant solutions to complex problems and creating user-friendly applications.",
              },
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                description:
                  "Exploring the possibilities of artificial intelligence and its applications in solving real-world problems.",
              },
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Python", "Express", "MongoDB"],
                },
                {
                  category: "AI/ML",
                  skills: ["TensorFlow", "PyTorch", "Natural Language Processing"],
                },
                {
                  category: "Tools",
                  skills: ["Git", "Docker", "AWS", "Linux"],
                },
                {
                  category: "Soft Skills",
                  skills: ["Problem Solving", "Team Collaboration", "Communication"],
                },
                {
                  category: "Learning",
                  skills: ["Machine Learning", "Cloud Architecture", "System Design"],
                },
              ].map((category, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {category.category}
                  </h3>
                  <ul className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Current Focus</h2>
          <p className="text-center max-w-2xl mx-auto">
            I'm currently focused on deepening my expertise in AI and machine learning while building scalable web applications. I'm particularly interested in projects that combine both these domains to create innovative solutions.
          </p>
        </section>
      </div>
    </div>
  );
} 