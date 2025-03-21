import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for client components
const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), { ssr: false });

export const metadata: Metadata = {
  title: 'Contact - Ishaan Dhiman',
  description: 'Get in touch with me for collaborations or opportunities.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'ishaandhiman74@gmail.com',
      href: 'https://mail.google.com/mail/u/0/?hl=en/#spam?compose=GTvVlcSHwsPZFBStQVpRVhBnQxDXNtVKRjVpqDPknKNVrGxgjDHSHGWrmJHSnfDhkfzKRqtvfRDnL',
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
      href: 'https://www.linkedin.com/in/ishaan-dhiman-835a872a4/',
      icon: '🔗'
    },
    {
      title: 'Instagram',
      value: '@ishaan_7484',
      href: 'https://www.instagram.com/ishaan_7484/',
      icon: '📸'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers.
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[300px] w-full"
              >
                <div className="text-7xl mb-8">{info.icon}</div>
                <h3 className="text-3xl font-semibold mb-4">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xl text-center break-words">{info.value}</p>
              </a>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Information */}
        <ScrollAnimation delay={600}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="mb-6">
              Whether you have a project in mind or just want to say hi, I'd love to hear from you!
            </p>
            <p className="text-xl font-semibold mb-6">
              ishaandhiman74@gmail.com
            </p>
            <p className="text-sm opacity-90">
              Response Time: Usually within 24-48 hours
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
} 