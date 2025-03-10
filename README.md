# Student Showcase Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern design with dark mode support
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- 💾 Dynamic content management with Supabase
- ✨ Beautiful animations and transitions

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student-showcase-website.git
   cd student-showcase-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Push your code to GitHub
2. Set up a new project on Supabase
3. Run the SQL migration script from `supabase/migrations`
4. Deploy on Vercel:
   - Connect your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- next-themes
