import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volunteering & Certifications - Ishaan Dhiman',
  description: 'My volunteering experience and professional certifications.',
};

export default function VolunteeringPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Volunteering & Certifications
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Making a difference through community service and professional development
          </p>
        </div>

        {/* Volunteering Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Volunteering Experience
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Assistant Coach */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
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
              </ul>
            </div>

            {/* Kids Yoga Camp */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
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
              </ul>
            </div>

            {/* Hackathon */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
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
              </ul>
            </div>
          </div>
        </section>

        {/* Swimming Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Swimming Certifications
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Bronze Medallion */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 sm:mb-0">Bronze Medallion</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">20 Hours + Written Test</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Completed comprehensive training in water rescue and lifesaving techniques.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Mastered essential lifesaving skills</li>
                <li>Passed written examination</li>
                <li>Demonstrated practical rescue techniques</li>
              </ul>
            </div>

            {/* Bronze Cross */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 sm:mb-0">Bronze Cross</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">40 Hours + Written Test</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced certification in lifesaving and water rescue techniques.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Advanced lifesaving and first aid skills</li>
                <li>Complex rescue scenario training</li>
                <li>Emergency response preparation</li>
              </ul>
            </div>

            {/* Assistant Instructor (In Progress) */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-blue-600/20">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 sm:mb-0">Assistant Instructor</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">In Progress</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently working towards becoming a certified Assistant Swimming Instructor.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Learning teaching methodologies</li>
                <li>Developing instructional skills</li>
                <li>Building leadership capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to Know More?</h2>
            <p className="mb-6 text-lg">
              Interested in my volunteer work or certifications? Let's connect!
            </p>
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 