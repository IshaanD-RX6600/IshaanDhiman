import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities & Skills - Ishaan Dhiman',
  description: 'Explore my extracurricular activities, skills, and interests beyond academics.',
};

export default function ActivitiesPage() {
  const activities = [
    {
      category: 'Tech & Coding',
      items: [
        {
          title: 'STEAM Club Member',
          period: '2023 - Present',
          description: 'Active member of the STEAM club, participating in interdisciplinary projects combining science, technology, engineering, arts, and mathematics.',
          achievements: [
            'Collaborated on cross-disciplinary projects',
            'Participated in STEAM workshops and events',
            'Contributed to innovative solutions'
          ]
        },
        {
          title: 'Coding Club Member',
          period: '2023 - Present',
          description: 'Active member of the school coding club, participating in weekly coding challenges and collaborative projects.',
          achievements: [
            'Organized coding workshops for beginners',
            'Participated in team programming competitions',
            'Contributed to club project repositories'
          ]
        },
        {
          title: 'Personal Projects',
          period: 'Ongoing',
          description: 'Developing various personal coding projects to enhance skills and explore new technologies.',
          achievements: [
            'Built this portfolio website using Next.js',
            'Created small utility applications',
            'Experimenting with AI/ML projects'
          ]
        }
      ]
    },
    {
      category: 'Leadership & Community',
      items: [
        {
          title: 'South Asian Student Alliance',
          period: '2023 - Present',
          description: 'Active member in leadership role, fostering community and cultural awareness.',
          achievements: [
            'Organized cultural events and activities',
            'Promoted diversity and inclusion initiatives',
            'Built connections within the South Asian community'
          ]
        },
        {
          title: 'Student Tech Support',
          period: '2023',
          description: 'Volunteering to help fellow students with technical issues and coding challenges.',
          achievements: [
            'Assisted peers with debugging code',
            'Provided guidance on project development',
            'Shared learning resources and best practices'
          ]
        }
      ]
    }
  ];

  const skills = [
    {
      category: 'Technical Skills',
      items: [
        'HTML, CSS, JavaScript',
        'React & Next.js',
        'Python Programming',
        'Git Version Control',
        'Basic Database Management'
      ]
    },
    {
      category: 'Soft Skills',
      items: [
        'Problem Solving',
        'Team Collaboration',
        'Time Management',
        'Written Communication',
        'Public Speaking'
      ]
    },
    {
      category: 'Learning Goals',
      items: [
        'Mobile App Development',
        'Advanced Algorithms',
        'Cloud Computing',
        'Machine Learning',
        'UI/UX Design'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Activities & Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring my journey beyond academics through various activities and skill development.
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-16">
          {activities.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.items.map((activity, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{activity.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {activity.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {activity.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Skills & Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <span className="mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="mb-6">
            I'm always excited to work on new projects and learn from others.
            Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 