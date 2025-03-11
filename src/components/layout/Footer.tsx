'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IshaanD-RX6600',
      icon: '📂',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ishaan-undefined-835a872a4/',
      icon: '💼',
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/?hl=en/#spam?compose=GTvVlcSHwsPZFBStQVpRVhBnQxDXNtVKRjVpqDPknKNVrGxgjDHSHGWrmJHSnfDhkfzKRqtvfRDnL',
      icon: '📧',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                <span className="text-2xl">{link.icon}</span>
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Ishaan Dhiman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 