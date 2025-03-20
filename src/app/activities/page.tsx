import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });

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
          title: 'STEM Club Member',
          period: '2023 - Present',
          description: 'Active member of the STEM club, participating in interdisciplinary projects combining science, technology, engineering, arts, and mathematics.',
          achievements: [
            'Collaborated on cross-disciplinary projects',
            'Participated in STEM workshops and events',
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
      category: 'Hackathons',
      items: [
        {
          title: 'Hack the North 2024',
          period: '2024',
          description: 'Participated in Canada\'s biggest hackathon at the University of Waterloo, collaborating with peers to build innovative solutions.',
          achievements: [
            'Developed a project within 36 hours',
            'Collaborated with team members from diverse backgrounds',
            'Gained experience with rapid prototyping and development'
          ]
        },
        {
          title: 'Hawkhacks 2024',
          period: '2024',
          description: 'Participated in Wilfrid Laurier University\'s annual hackathon, focusing on creating impactful technology solutions.',
          achievements: [
            'Worked on innovative project ideas',
            'Networked with industry professionals',
            'Enhanced problem-solving skills under time constraints'
          ]
        },
        {
          title: 'Ignition Hacks 2024',
          period: '2024',
          description: 'Participated in this dynamic hackathon focused on fostering innovation and technological creativity.',
          achievements: [
            'Developed solutions to real-world problems',
            'Engaged in workshops and mentorship sessions',
            'Practiced pitching and presentation skills'
          ]
        }
      ]
    },
    {
      category: 'Leadership & Community',
      items: [
        {
          title: 'GEOGUESSER club member',
          period: '2025 - Present',
          description: 'Active member of the Geoguesser club, participating in weekly geoguessing competitions and collaborative projects.',
          achievements: [
            'Participated in weekly geoguessing competitions',
            'Contributed to club project repositories'
          ]
        },
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
    <div className="min-h-screen py-6 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Activities & Skills
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Exploring my journey beyond academics through various activities and skill development.
            </p>
          </div>
        </ScrollAnimation>

        {/* Activities */}
        <div className="space-y-8 sm:space-y-16">
          {activities.map((section, index) => (
            <div key={index}>
              <ScrollAnimation delay={index * 150}>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-blue-600 dark:text-blue-400 px-2 sm:px-0">
                  {section.category}
                </h2>
              </ScrollAnimation>
              <div className="space-y-4 sm:space-y-8">
                {section.items.map((activity, itemIndex) => (
                  <ScrollAnimation key={itemIndex} delay={(index * 150) + (itemIndex * 100)}>
                    <div
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">{activity.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                        {activity.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400 space-y-1">
                          {activity.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="pl-1">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-8 sm:mt-16">
          <ScrollAnimation delay={600}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 px-2 sm:px-0">Skills & Learning</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 gap-4 sm:gap-8 px-0">
            {skills.map((skillSet, index) => (
              <ScrollAnimation key={index} delay={700 + (index * 100)}>
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400">
                    {skillSet.category}
                  </h3>
                  <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-400"
                      >
                        <span className="mr-2">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-16 mx-2 sm:mx-0">
          <ScrollAnimation delay={1000}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Want to Collaborate?</h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                I'm always excited to work on new projects and learn from others.
                Let's create something amazing together!
              </p>
              <a
                href="/contact"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
} 