import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });

export const metadata: Metadata = {
  title: 'Achievements - Ishaan Dhiman',
  description: 'Explore my professional achievements, certifications, and milestones.',
};

export default function AchievementsPage() {
  const achievements = [
    {
      category: 'Certifications',
      items: [
        {
          title: 'AWS Certified Developer',
          organization: 'Amazon Web Services',
          date: '2024',
          description: 'Certification demonstrating expertise in developing and maintaining applications on AWS.',
        },
        {
          title: 'Machine Learning Specialization',
          organization: 'Coursera',
          date: '2023',
          description: 'Comprehensive certification covering machine learning algorithms and applications.',
        },
      ],
    },
    {
      category: 'Projects & Recognition',
      items: [
        {
          title: 'Hackathon Winner',
          organization: 'Tech Innovation Summit',
          date: '2023',
          description: 'First place in the AI/ML category for developing an innovative solution.',
        },
        {
          title: 'Open Source Contributor',
          organization: 'Various Projects',
          date: '2022-Present',
          description: 'Active contributor to several open-source projects, focusing on web development tools.',
        },
      ],
    },
    {
      category: 'Academic Excellence',
      items: [
        {
          title: "Dean's List",
          organization: 'University',
          date: '2022-2023',
          description: 'Recognized for outstanding academic performance.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Achievements
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my professional accomplishments, certifications, and recognition.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-16">
          {achievements.map((category, index) => (
            <div key={index}>
              <ScrollAnimation delay={index * 200}>
                <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                  {category.category}
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <ScrollAnimation key={itemIndex} delay={(index * 200) + (itemIndex * 150)}>
                    <div
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 