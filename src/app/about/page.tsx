import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for the GitHub profile component
const GitHubProfile = dynamic(() => import('@/components/GitHubProfile'), { ssr: false });

export const metadata: Metadata = {
  title: 'About Me | Ishaan Dhiman',
  description: 'Learn more about Ishaan Dhiman, a student developer passionate about web development and AI.',
};

export default function AboutPage() {
  return (
    <main className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Student developer with a passion for building innovative web applications and exploring new technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Hi, I'm Ishaan</h2>
            <p>
              I'm a grade 10 student with a passion for coding and problem-solving. My journey in programming 
              began when I was introduced to Scratch in elementary school, and since then, I've been 
              constantly expanding my skills and knowledge.
            </p>
            <p>
              Currently, I'm focused on web development using modern technologies like React, Next.js, 
              and Tailwind CSS. I'm also exploring backend development with Node.js and database 
              management with Supabase.
            </p>
            <h3>My Interests</h3>
            <ul>
              <li>Full-stack web development</li>
              <li>Open source contribution</li>
              <li>AI and machine learning</li>
              <li>Computer vision</li>
              <li>Game development</li>
            </ul>
            <h3>Education</h3>
            <p>
              I'm currently in grade 10 at Colonel By Secondary School, where I'm part of the International 
              Baccalaureate (IB) program. My favorite subjects are Computer Science, Mathematics, and Physics.
            </p>
            <h3>Beyond Coding</h3>
            <p>
              When I'm not coding, you can find me biking around the city, playing soccer with friends, 
              or reading about the latest tech innovations. I'm also actively involved in my school's 
              coding club, where I help other students learn programming.
            </p>
          </div>
        </div>
        
        <div>
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="space-y-3">
              <SkillBar skill="JavaScript/TypeScript" percentage={90} />
              <SkillBar skill="React & Next.js" percentage={85} />
              <SkillBar skill="HTML & CSS" percentage={95} />
              <SkillBar skill="Tailwind CSS" percentage={90} />
              <SkillBar skill="Node.js" percentage={75} />
              <SkillBar skill="Python" percentage={80} />
              <SkillBar skill="C++" percentage={70} />
              <SkillBar skill="Git & GitHub" percentage={85} />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              <SocialLink 
                href="https://github.com/IshaanD-RX6600" 
                platform="GitHub"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                } 
              />
              <SocialLink 
                href="https://twitter.com/ishaan_dhiman" 
                platform="Twitter"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                } 
              />
              <SocialLink 
                href="https://linkedin.com/in/ishaan-dhiman" 
                platform="LinkedIn"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                } 
              />
              <SocialLink 
                href="mailto:contact@ishaandhiman.com" 
                platform="Email"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                } 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* GitHub Profile Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">My GitHub Profile</h2>
        <GitHubProfile username="IshaanD-RX6600" />
      </div>
    </main>
  );
}

function SkillBar({ skill, percentage }: { skill: string, percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-gray-700 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function SocialLink({ href, platform, icon }: { href: string, platform: string, icon: React.ReactNode }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
    >
      {icon}
      <span>{platform}</span>
    </Link>
  );
} 