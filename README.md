# Personal Showcase Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Supabase. Features a clean design with light/dark mode, dynamic content management, and a contact form.

## Features

- 🎨 Modern and responsive design
- 🌓 Light/Dark mode toggle
- 📝 Dynamic content management through admin panel
- 📧 Contact form with email integration
- 🔒 Secure admin authentication
- 📱 Mobile-friendly layout
- ⚡ Fast page loads with Next.js
- 🎯 SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Nodemailer

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-showcase-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_FROM=your_email@gmail.com

   # Admin Configuration
   NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password
   ADMIN_API_TOKEN=fallback-admin-token-12345
   ```

4. Set up your Supabase database:
   - Create a new project in Supabase
   - Run the SQL commands provided in the setup instructions
   - Update the environment variables with your Supabase credentials

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Setup

To enable the contact form functionality:

1. Create a Gmail account or use an existing one
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Google Account settings
   - Navigate to Security
   - Under "Signing in to Google," select App Passwords
   - Generate a new app password for "Mail"
4. Use this password in your `EMAIL_PASS` environment variable

## Admin Access

The admin panel is accessible at `/admin`. Use the password set in `NEXT_PUBLIC_ADMIN_PASSWORD` to log in and manage your website content.

## Deployment

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

## Customization

- Update the theme colors in `src/lib/theme.ts`
- Modify the layout components in `src/components/layout/`
- Add new sections by creating components in `src/components/`
- Customize the admin panel fields in `src/app/admin/page.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
