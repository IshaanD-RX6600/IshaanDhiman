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

# GitHub Portfolio Generator

This project includes scripts to generate a beautiful GitHub portfolio page and display it on your website.

## Scripts Overview

1. **github_repo_stats.ps1**: Lists all your repositories sorted by star count.
2. **github_issue_checker.ps1**: Checks for open issues across all your repositories.
3. **github_repo_analyzer.ps1**: Provides detailed analysis of a specific repository.
4. **generate_github_portfolio.ps1**: Generates a beautiful HTML page showcasing your GitHub profile and repositories.

## Requirements

- GitHub CLI (`gh`) installed and authenticated
- PowerShell
- Node.js (for running the local server)

## Installation

1. Install GitHub CLI following the [official instructions](https://github.com/cli/cli#installation)
2. Authenticate with GitHub CLI:
   ```
   gh auth login
   ```
3. Run any of the scripts above to get GitHub information

## Viewing Your GitHub Portfolio

After generating your GitHub portfolio HTML, you have two options:

### Option 1: Run the Local Server

Run the included Node.js server to preview your portfolio:

```
node server.js
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Include in Your Website

Copy the content from `github_portfolio.html` and integrate it into your existing website.

## Customization

You can modify `generate_github_portfolio.ps1` to change the style and content of your GitHub portfolio page.

## Automatically Updating Your Portfolio

Run the portfolio generator periodically to keep your GitHub stats up to date:

1. Use Windows Task Scheduler to run the script daily/weekly
2. Or, include it in your website build process

## License

MIT
