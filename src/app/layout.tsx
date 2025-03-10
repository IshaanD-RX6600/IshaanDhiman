import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/components/layout/template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Ishaan Dhiman - Portfolio',
    template: '%s | Ishaan Dhiman'
  },
  description: 'Full Stack Developer & AI Enthusiast',
  keywords: ['Next.js', 'React', 'JavaScript', 'Web Development', 'Full Stack', 'AI'],
  metadataBase: new URL('https://ishaan-portfolio.vercel.app'),
  openGraph: {
    title: 'Ishaan Dhiman - Portfolio',
    description: 'Full Stack Developer & AI Enthusiast',
    url: 'https://ishaan-portfolio.vercel.app',
    siteName: 'Ishaan Dhiman Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
