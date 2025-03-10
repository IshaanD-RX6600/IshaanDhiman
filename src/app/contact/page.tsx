import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me - Your Name',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:ishaandhiman74@gmail.com" className="text-blue-600 hover:text-blue-700">
                ishaandhiman74@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium mr-2">LinkedIn:</span>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                linkedin.com/in/yourusername
              </a>
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium mr-2">GitHub:</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                github.com/yourusername
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 