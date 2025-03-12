import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/layout/Navigation"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s - Ishaan Dhiman',
    default: 'Ishaan Dhiman - Student Developer'
  },
  description: 'Student Developer passionate about Web Development and AI',
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
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
