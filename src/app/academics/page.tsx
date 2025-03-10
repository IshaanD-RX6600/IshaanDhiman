import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Achievements - Ishaan Dhiman',
  description: 'View my academic achievements, exam scores, and certifications.',
};

export default function AcademicsPage() {
  const examScores = [
    {
      name: 'CCC Exam',
      score: '58/75',
      percentage: '77.3%',
      description: 'The Canadian Computing Competition (CCC) is a programming competition that tests problem-solving and algorithmic thinking skills.',
      highlights: [
        'Above average performance in algorithmic challenges',
        'Strong problem-solving demonstration',
        'Efficient code implementation'
      ]
    },
    {
      name: 'Pascal Contest',
      score: '104/150',
      percentage: '69.3%',
      description: 'The Pascal Contest is a mathematics competition that challenges students with complex problem-solving and mathematical reasoning.',
      highlights: [
        'Excellence in mathematical reasoning',
        'Creative problem-solving approach',
        'Strong analytical skills'
      ]
    }
  ];

  const otherAchievements = [
    {
      title: 'Academic Honor Roll',
      year: '2023',
      description: 'Maintained high academic standing throughout the academic year.'
    },
    {
      title: 'Mathematics Club Leader',
      year: '2023',
      description: 'Led weekly problem-solving sessions and organized math competitions.'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Academic Achievements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my academic performance and achievements in computing and mathematics.
          </p>
        </div>

        {/* Exam Scores */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold mb-8">Exam Scores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examScores.map((exam, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{exam.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {exam.score}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {exam.percentage}
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
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Other Academic Achievements</h2>
          <div className="space-y-6">
            {otherAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
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
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Academic Goals</h2>
          <div className="space-y-4">
            <p>
              I am committed to continuous learning and academic excellence. My current goals include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Participating in advanced programming competitions</li>
              <li>Expanding knowledge in artificial intelligence and machine learning</li>
              <li>Maintaining strong academic performance while pursuing practical projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 