import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WebsiteContent {
  id: number;
  content: {
    about: {
      introduction: string[];
      interests: Array<{
        title: string;
        description: string;
      }>;
      goals: {
        shortTerm: string[];
        longTerm: string[];
      };
    };
    academics: {
      examScores: Array<{
        name: string;
        score: string;
        percentage: string;
        description: string;
        highlights: string[];
      }>;
      achievements: Array<{
        title: string;
        year: string;
        description: string;
      }>;
    };
    projects: Array<{
      title: string;
      description: string;
      tech: string[];
      features: string[];
      github: string;
      demo?: string;
      image?: string;
    }>;
    activities: {
      categories: Array<{
        name: string;
        items: Array<{
          title: string;
          period: string;
          description: string;
          achievements: string[];
        }>;
      }>;
      skills: Array<{
        category: string;
        items: string[];
      }>;
    };
  };
  updated_at: string;
} 