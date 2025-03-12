import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics - Ishaan Dhiman',
  description: 'My academic journey, achievements, and course history.',
};

export default function AcademicsPage() {
  const examScores = [
    {
      name: '2025 CCC Exam',
      score: '58/75',
      description: 'The Canadian Computing Competition (CCC) is a programming competition that tests problem-solving and algorithmic thinking skills. With each of the questions becoming exponentially harder, I was able to solve 4 questions correctly.',
      highlights: [
        'Above average performance in algorithmic challenges',
        'Strong problem-solving demonstration',
        'Efficient code implementation'
      ]
    },
    {
      name: 'Pascal Contest',
      score: '104/150',
      description: 'The Pascal Contest is a mathematics competition that challenges students with complex problem-solving and mathematical reasoning.',
      highlights: [
        'Excellence in mathematical reasoning',
        'Creative problem-solving approach',
        'Strong analytical skills'
      ]
    },
    {
      name: '2024 CCC Exam',
      score: '45/75',
      description: 'The Canadian Computing Competition (CCC) is a programming competition that tests problem-solving and algorithmic thinking skills. With each of the questions becoming exponentially harder, I was able to solve 3 questions correctly.',
      highlights: [
        'Above average performance in algorithmic challenges',
        'Strong problem-solving demonstration',
        'Efficient code implementation'
      ]
    },
    {
      name: 'Grade 10 Math final Exam',
      score: '97%',
      description: 'I was able to score full marks in the final exam of Grade 10 Math. This was a great achievement for me as I was able to understand the concepts and apply them to the questions.',
      highlights: [
        'Full marks in the final exam',
        'Strong understanding of the concepts',
        'Efficient problem-solving'
      ]
    },
  ];

  const otherAchievements = [
    {
      title: 'Academic Honor Roll',
      year: '2023',
      description: 'Maintained high academic standing throughout the academic year.'
    },
    {
      title: 'Mathematics Club Member',
      year: '2023',
      description: 'Led weekly problem-solving sessions and organized math competitions.'
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Academic Journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            My educational path, achievements, and course history
          </p>
        </div>

        {/* Course Timeline */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Course History</h2>
          
          {/* Grade 9 */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Grade 9 (Completed)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">English:</span> ENLIW (ENG1W)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Mathematics:</span> MTH1W (MPM1DW)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Science:</span> SNC1W (SNC1DW)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Geography:</span> CGC1D (CGC1D)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">French:</span> FSF1D (FSF1DW)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Drama:</span> ADA1O (ADA1O)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Business:</span> BBI1O (BBI1O)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Hindi:</span> LIHBD
                </p>
              </div>
            </div>
          </section>

          {/* Grade 10 */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Grade 10 (Current Year)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">English:</span> ENG2D (ENG2D)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Math:</span> MPM2D (MPM2DW)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Science:</span> SNC2D (SNC2DW)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">History:</span> CHC2D (CHC2D)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Civics:</span> CHV2O (CHV2O)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Careers:</span> GLC2O (GLC2O)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Computer Science:</span> ICS3U (ICS3U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Physics:</span> SPH3U (SPH3U)
                </p>
              </div>
            </div>
          </section>

          {/* Grade 11 */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Grade 11 (Next Year)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">English:</span> NBE3U (NBE3U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">IB Math:</span> MCR3U (MCR3U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">IB Physics (Part 1):</span> SPH3U (SPH3U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Chemistry:</span> SCH3U (SCH3U)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Computer Science:</span> ICS4U (ICS4U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">IB Physics (Part 2):</span> SPH4U (SPH4U)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Yearbook:</span> AWT3M (AWT3M)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Personal Fitness:</span> PAF3O (PAF3O)
                </p>
              </div>
            </div>
          </section>

          {/* Grade 12 */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Grade 12 (Plan Ahead)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">English:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 2:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 3:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 4:</span> TBD
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 5:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 6:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 7:</span> TBD
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Course 8:</span> TBD
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Exam Scores */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Competition & Exam Scores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examScores.map((exam, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold mb-2 sm:mb-0">{exam.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {exam.score}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exam.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {exam.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Other Academic Achievements</h2>
          <div className="space-y-6">
            {otherAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Goals */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Academic Goals</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am committed to continuous learning and academic excellence. My current goals include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Participating in advanced programming competitions</li>
              <li>Expanding knowledge in artificial intelligence and machine learning</li>
              <li>Maintaining strong academic performance while pursuing practical projects</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to Know More?</h2>
            <p className="mb-6 text-lg">
              Interested in learning more about my academic journey?
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