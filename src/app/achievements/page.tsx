import { supabase } from '@/lib/supabase';
import type { WebsiteContent } from '@/lib/supabase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements - Your Name',
  description: 'My academic and extracurricular achievements and accomplishments.',
};

async function getAchievements() {
  const { data, error } = await supabase
    .from('website_content')
    .select('*')
    .eq('id', 1)
    .single();

  if (error) {
    console.error('Error fetching achievements:', error);
    return {
      academicAchievements: [],
      extracurricularActivities: [],
    };
  }

  return {
    academicAchievements: (data as WebsiteContent).content.academicAchievements,
    extracurricularActivities: (data as WebsiteContent).content.extracurricularActivities,
  };
}

export default async function AchievementsPage() {
  const { academicAchievements, extracurricularActivities } = await getAchievements();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Achievements</h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Achievements</h2>
          <div className="space-y-6">
            {academicAchievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {achievement.description}
                </p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Extracurricular Activities
          </h2>
          <div className="space-y-6">
            {extracurricularActivities.map((activity, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Role: {activity.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'AWS Certified Developer',
                issuer: 'Amazon Web Services',
                date: '2023',
                link: '#',
              },
              {
                name: 'Professional Scrum Master I',
                issuer: 'Scrum.org',
                date: '2023',
                link: '#',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 