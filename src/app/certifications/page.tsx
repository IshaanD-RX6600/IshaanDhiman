import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });
const CountUp = dynamic(() => import('@/components/CountUp'), { ssr: false });

export const metadata: Metadata = {
  title: 'Certifications - Ishaan Dhiman',
  description: 'My swimming certifications and professional development.',
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Swimming Certifications
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400">
              Professional development in aquatics and lifesaving
            </p>
          </div>
        </ScrollAnimation>

        {/* Certifications Timeline */}
        <section className="mb-12">
          <div className="relative">            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-blue-300 dark:bg-blue-900 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Bronze Medallion */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pr-8">
                    <ScrollAnimation delay={100}>                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold mb-2 sm:mb-0 text-gray-900 dark:text-white">Bronze Medallion</h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">20 Hours + Written Test</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                          Comprehensive training in water rescue and lifesaving techniques.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                          <li>Mastered essential lifesaving skills</li>
                          <li>Passed written examination</li>
                          <li>Demonstrated practical rescue techniques</li>
                          <li>Learned emergency response protocols</li>
                          <li>Developed water safety awareness</li>
                        </ul>
                      </div>
                    </ScrollAnimation>
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
                    <ScrollAnimation delay={200}>                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold mb-2 sm:mb-0 text-gray-900 dark:text-white">Bronze Cross</h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">40 Hours + Written Test</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                          Advanced certification in lifesaving and water rescue techniques.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                          <li>Advanced lifesaving and first aid skills</li>
                          <li>Complex rescue scenario training</li>
                          <li>Emergency response preparation</li>
                          <li>Physical fitness and endurance training</li>
                          <li>Leadership development in aquatic settings</li>
                        </ul>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>              {/* National Lifeguard */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pr-8">
                    <ScrollAnimation delay={300}>                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold mb-2 sm:mb-0 text-gray-900 dark:text-white">National Lifeguard</h3>
                          <span className="text-green-600 dark:text-green-400 font-medium">Complete</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                          Certified National Lifeguard with comprehensive training in professional water safety and rescue.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                          <li>Advanced water rescue techniques</li>
                          <li>Emergency first aid and CPR</li>
                          <li>Surveillance and hazard identification</li>
                          <li>Team-based emergency response</li>
                          <li>Public safety education</li>
                        </ul>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-green-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Instructor's Course */}
              <div className="relative flex justify-center">
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <div className="flex-1 w-full sm:w-1/2 sm:pl-8 sm:ml-auto">
                    <ScrollAnimation delay={400}>                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold mb-2 sm:mb-0 text-gray-900 dark:text-white">Instructor's Course</h3>
                          <span className="text-green-600 dark:text-green-400 font-medium">Complete</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                          Advanced instructor certification for teaching swimming and water safety programs.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                          <li>Teaching methodology and curriculum development</li>
                          <li>Student assessment and progress tracking</li>
                          <li>Advanced swimming technique instruction</li>
                          <li>Safety program implementation</li>
                          <li>Professional communication and leadership</li>
                        </ul>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-green-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        {/* Stats Section */}
        <section className="mb-12">
          <ScrollAnimation delay={500}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <CountUp end={100} suffix="+" />
                  </div>
                  <div className="text-gray-700 dark:text-gray-400">Training Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <CountUp end={4} />
                  </div>
                  <div className="text-gray-700 dark:text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-gray-700 dark:text-gray-400">Complete</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>        {/* Download Resume Section */}
        <section className="mb-12">
          <ScrollAnimation delay={600}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Download My Resume
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Get the complete overview of my certifications, skills, and experience. Currently seeking opportunities in aquatics instruction and lifeguarding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    PDF Format • Updated June 2025
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-center text-green-700 dark:text-green-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                    </svg>
                    <span className="font-medium">Currently seeking employment opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>{/* Call to Action */}
        <section className="text-center">
          <ScrollAnimation delay={700}>
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
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
} 