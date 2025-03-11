import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Ishaan Dhiman',
  description: 'Learn more about my interests, goals, and journey in coding.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Passionate about coding, learning, and creating innovative solutions
          </p>
        </div>

        {/* Introduction */}
        <section className="prose dark:prose-invert lg:prose-lg mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-lg">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Hi there! I'm Ishaan Dhiman, a student with a deep passion for technology and programming. 
              My journey in coding began with simple c++ programs and has evolved into building full-stack 
              applications. I'm particularly interested in web development and artificial intelligence.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              When I'm not coding, you can find me participating in coding competitions, helping fellow 
              students with their projects, coaching soccer, or exploring new technologies. I believe in the power of 
              technology to solve real-world problems and make a positive impact. I beleve that in whatever I do,
              I should give my best and try to be the best at it and see how far I can go.
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="mt-8 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">What I Love</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: "💻",
                title: "Coding",
                description:
                  "I enjoy solving problems through code and building applications that make a difference. Web development and AI are my main areas of interest.",
              },
              {
                icon: "📚",
                title: "Learning",
                description:
                  "I'm constantly learning new technologies and concepts. The fast-paced nature of tech keeps me excited and motivated.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "I love working with others on projects, sharing knowledge, and learning from different perspectives.",
              },
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{interest.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{interest.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why I Code */}
        <section className="mt-8 sm:mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why I Love Coding</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                My passion for coding stems from its perfect blend of creativity and logic. 
                I find it fascinating how we can turn ideas into reality through programming, 
                solving real-world problems while continuously learning and growing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                What excites me most about technology is its potential to create positive change. 
                Whether it's building useful tools, automating tasks, or developing innovative 
                solutions, I believe coding is a powerful way to make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mt-8 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Goals</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Short-term</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <li>• Master full-stack web development</li>
                  <li>• Contribute to open-source projects</li>
                  <li>• Build a strong project portfolio</li>
                  <li>• Improve problem-solving skills</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Long-term</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <li>• Pursue higher education in Computer Science</li>
                  <li>• Specialize in AI/ML development</li>
                  <li>• Create impactful technology solutions</li>
                  <li>• Mentor other aspiring developers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-8 sm:mt-16 text-center">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Want to collaborate on a project or just chat about technology?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Let's Connect
          </a>
        </section>
      </div>
    </div>
  );
} 