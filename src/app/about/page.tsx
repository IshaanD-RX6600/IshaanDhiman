import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Ishaan Dhiman',
  description: 'Learn more about Ishaan Dhiman - Full Stack Developer, avid reader, and AI enthusiast.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="prose dark:prose-invert lg:prose-lg mx-auto">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Hi, I'm Ishaan Dhiman, a passionate Full Stack Developer with a deep fascination for technology and its potential to shape our future. My journey in tech is driven by curiosity and a desire to create meaningful solutions that make a difference.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">My Passions</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-2 text-blue-600 dark:text-blue-400">📚 Avid Reader</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Reading is my gateway to endless possibilities. I'm constantly exploring various genres, from science fiction to technical literature, which helps me gain diverse perspectives and fuels my creativity in problem-solving.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-2 text-blue-600 dark:text-blue-400">💻 Coding Enthusiast</h4>
              <p className="text-gray-600 dark:text-gray-400">
                I thrive on turning ideas into reality through code. My expertise spans across modern web technologies, and I'm always excited to learn and implement new tools and frameworks that enhance the development process.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-2 text-blue-600 dark:text-blue-400">🤖 AI Enthusiast</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Artificial Intelligence fascinates me with its potential to revolutionize how we live and work. I actively follow AI developments and enjoy exploring ways to integrate AI technologies into practical applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'Tailwind CSS',
            'PostgreSQL',
            'Git',
            'AI/ML',
            'Python',
            'RESTful APIs',
            'MongoDB',
            'AWS',
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center hover:shadow-md transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Current Focus</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <p className="text-gray-600 dark:text-gray-400 text-center">
            I'm currently focused on developing innovative web applications while exploring the integration of AI technologies. 
            My goal is to create solutions that are not only technically robust but also provide meaningful value to users.
          </p>
        </div>
      </div>
    </div>
  );
} 