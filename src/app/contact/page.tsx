import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me - Your Name',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <ContactForm />
    </div>
  );
} 