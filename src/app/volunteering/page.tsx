import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });
const CountUp = dynamic(() => import('@/components/CountUp'), { ssr: false });

export const metadata: Metadata = {
  title: 'Volunteering - Ishaan Dhiman',
  description: 'My volunteering experience and community service.',
};

export default function VolunteeringPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Volunteering
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Making a difference through community service and giving back
            </p>
          </div>
        </ScrollAnimation>

        {/* Volunteering Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 gap-6">
            {/* Assistant Coach */}
            <ScrollAnimation delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold mb-2 sm:mb-0">Assistant Coach at Budd Park</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">26 Hours</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Assisted in coaching and mentoring young athletes, helping them develop their skills and confidence.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Provided guidance and support to young athletes</li>
                  <li>Helped organize and run training sessions</li>
                  <li>Fostered a positive and encouraging environment</li>
                  <li>Developed leadership and communication skills</li>
                  <li>Contributed to youth sports development</li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Kids Yoga Camp */}
            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold mb-2 sm:mb-0">Kids Yoga Camp Volunteer</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">35 Hours</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Volunteered at a yoga camp for children, promoting physical activity and mindfulness.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Assisted in teaching basic yoga poses to children</li>
                  <li>Helped maintain a calm and focused environment</li>
                  <li>Supported children in their wellness journey</li>
                  <li>Promoted healthy lifestyle habits</li>
                  <li>Enhanced children's physical and mental well-being</li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Hackathon */}
            <ScrollAnimation delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold mb-2 sm:mb-0">Hackathon Volunteer</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">19 Hours</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Volunteered at a local hackathon event, supporting participants and helping with event organization.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Assisted participants with technical issues</li>
                  <li>Helped coordinate event logistics</li>
                  <li>Supported event setup and cleanup</li>
                  <li>Facilitated team collaboration</li>
                  <li>Contributed to the tech community</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <ScrollAnimation delay={400}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Total Impact
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center transform transition-transform hover:scale-110">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <CountUp end={80} suffix="+" />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Total Hours</div>
                </div>
                <div className="text-center transform transition-transform hover:scale-110">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <CountUp end={3} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Organizations</div>
                </div>
                <div className="text-center transform transition-transform hover:scale-110">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <CountUp end={100} suffix="+" />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">People Impacted</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <ScrollAnimation delay={500}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to Know More?</h2>
              <p className="mb-6 text-lg">
                Interested in my volunteer work or want to collaborate on community projects?
              </p>
              <a
                href="/contact"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium"
              >
                Get in Touch
              </a>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
} 