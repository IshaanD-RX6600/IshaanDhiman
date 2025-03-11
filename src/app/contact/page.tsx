import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Ishaan Dhiman',
  description: 'Get in touch with me for collaborations or opportunities.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'ishaandhiman74@gmail.com',
      href: 'mailto:ishaandhiman74@gmail.com',
      icon: '📧'
    },
    {
      title: 'GitHub',
      value: 'IshaanD-RX6600',
      href: 'https://github.com/IshaanD-RX6600',
      icon: '💻'
    },
    {
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/your-profile',
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="mb-6">
            Whether you have a project in mind or just want to say hi, I'd love to hear from you!
          </p>
          <p className="text-sm opacity-90">
            Response Time: Usually within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
} 