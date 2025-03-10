import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type WebsiteContent = {
  id: number;
  content: {
    projects: Array<{
      title: string;
      description: string;
      technologies: string[];
      link?: string;
      image?: string;
    }>;
    academicAchievements: Array<{
      title: string;
      description: string;
      date: string;
    }>;
    extracurricularActivities: Array<{
      title: string;
      description: string;
      role: string;
    }>;
    files: Array<{
      name: string;
      url: string;
    }>;
    aboutMe: {
      paragraphs: string[];
    };
  };
  updated_at: string;
}; 