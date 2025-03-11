import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications - Ishaan Dhiman',
  description: 'My swimming certifications and professional development.',
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Swimming Certifications
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Professional development in aquatics and lifesaving
          </p>
        </div>

        {/* Certifications Timeline */}
        <section className="mb-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Bronze Medallion */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pr-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold mb-2 sm:mb-0">Bronze Medallion</h3>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">20 Hours + Written Test</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Comprehensive training in water rescue and lifesaving techniques.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Mastered essential lifesaving skills</li>
                        <li>Passed written examination</li>
                        <li>Demonstrated practical rescue techniques</li>
                        <li>Learned emergency response protocols</li>
                        <li>Developed water safety awareness</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Bronze Cross */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pl-8 sm:ml-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
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
                        <li>Physical fitness and endurance training</li>
                        <li>Leadership development in aquatic settings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Assistant Instructor */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pr-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-blue-600/20">
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
                        <li>Understanding swim program curriculum</li>
                        <li>Practicing effective communication</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-blue-600/20 rounded-full transform -translate-x-1/2 flex items-center justify-center border-2 border-blue-600">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">60+</div>
                <div className="text-gray-600 dark:text-gray-400">Training Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3rd</div>
                <div className="text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to Know More?</h2>
            <p className="mb-6 text-lg">
              Interested in my aquatics journey or professional development?
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