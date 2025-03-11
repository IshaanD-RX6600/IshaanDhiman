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
      value: '@IshaanD-RX6600',
      href: 'https://github.com/IshaanD-RX6600',
      icon: '💻'
    },
    {
      title: 'LinkedIn',
      value: '@ishaan-dhiman',
      href: 'https://www.linkedin.com/in/ishaan-undefined-835a872a4/',
      icon: '🔗'
    },
    {
      title: 'Instagram',
      value: '@ishaan_7484',
      href: 'https://www.instagram.com/ishaan_7484/',
      icon: '📸'
    }
  ];

  const featuredRepos = [
    {
      name: "Face Swap Application",
      url: "https://github.com/IshaanD-RX6600/Face-Swap"
    },
    {
      name: "Chess Game Engine",
      url: "https://github.com/IshaanD-RX6600/Playing-around-with-chess"
    },
    {
      name: "Handwritten Text Recognition",
      url: "https://github.com/IshaanD-RX6600/Handwritten-to-text"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Featured Repositories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredRepos.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{repo.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="mb-6">
            Whether you have a project in mind or just want to say hi, I'd love to hear from you!
          </p>
          <a
            href="mailto:ishaandhiman74@gmail.com?subject=Let's%20Connect!&body=Hi%20Ishaan,%0D%0A%0D%0AI'd%20like%20to%20connect%20regarding%20..."
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 mb-6"
            onClick={(e) => {
              // Fallback for when mailto doesn't work
              if (!window.open(e.currentTarget.href)) {
                // If the mailto link fails, copy email to clipboard
                navigator.clipboard.writeText('ishaandhiman74@gmail.com');
                alert('Email address copied to clipboard: ishaandhiman74@gmail.com');
              }
            }}
          >
            Send me an Email
          </a>
          <p className="text-sm opacity-90">
            Response Time: Usually within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
} 