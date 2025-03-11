import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photography - Ishaan Dhiman',
  description: 'A collection of my photography work and visual storytelling.',
};

export default function PhotographyPage() {
  const photos = [
    {
      src: '/photography/IMG_4295.JPG',
      title: 'Washington Square Arch',
      description: 'Historic arch with flying birds in NYC'
    },
    {
      src: '/photography/IMG_3592.jpg',
      title: 'Urban Landscape',
      description: 'City architecture and urban scenes'
    },
    {
      src: '/photography/IMG_1981 (1).jpg',
      title: 'City Views',
      description: 'Exploring the urban environment'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Photography
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing moments and telling stories through the lens. Here's a collection of my photographic work.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  unoptimized={photo.src.startsWith('http')}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{photo.description || ''}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">My Photography Journey</h2>
          <p className="mb-6">
            Photography has been a passion of mine, allowing me to capture and share unique perspectives of the world around us.
          </p>
          <p className="text-sm opacity-90">
            Equipment: [Your camera/equipment details here]
          </p>
        </div>
      </div>
    </div>
  );
} 