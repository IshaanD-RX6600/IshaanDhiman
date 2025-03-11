'use client';

import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import type { WebsiteContent } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Admin - Ishaan Dhiman',
  description: 'Admin dashboard for content management.',
};

export default function AdminPage() {
  const [content, setContent] = useState<WebsiteContent['content']>({
    about: {
      introduction: [],
      interests: [],
      goals: {
        shortTerm: [],
        longTerm: []
      }
    },
    academics: {
      examScores: [],
      achievements: []
    },
    projects: [],
    activities: {
      categories: [],
      skills: []
    }
  });

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .single();

    if (error) {
      console.error('Error fetching content:', error);
      return;
    }

    if (data) {
      setContent(data.content);
    }
  }

  async function updateContent() {
    const { error } = await supabase
      .from('website_content')
      .update({ content })
      .eq('id', 1);

    if (error) {
      console.error('Error updating content:', error);
      return;
    }

    alert('Content updated successfully!');
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Content Management</h1>

        {/* About Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Introduction</label>
              <textarea
                value={content.about.introduction.join('\n\n')}
                onChange={(e) => setContent({
                  ...content,
                  about: {
                    ...content.about,
                    introduction: e.target.value.split('\n\n').filter(Boolean)
                  }
                })}
                className="w-full h-40 p-2 border rounded-lg dark:bg-gray-700"
              />
            </div>


            <div>
              <label className="block text-sm font-medium mb-2">Goals</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Short Term</h3>
                  <textarea
                    value={content.about.goals.shortTerm.join('\n')}
                    onChange={(e) => setContent({
                      ...content,
                      about: {
                        ...content.about,
                        goals: {
                          ...content.about.goals,
                          shortTerm: e.target.value.split('\n').filter(Boolean)
                        }
                      }
                    })}
                    className="w-full h-40 p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Long Term</h3>
                  <textarea
                    value={content.about.goals.longTerm.join('\n')}
                    onChange={(e) => setContent({
                      ...content,
                      about: {
                        ...content.about,
                        goals: {
                          ...content.about.goals,
                          longTerm: e.target.value.split('\n').filter(Boolean)
                        }
                      }
                    })}
                    className="w-full h-40 p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Academics</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Exam Scores</label>
              <textarea
                value={JSON.stringify(content.academics.examScores, null, 2)}
                onChange={(e) => {
                  try {
                    const examScores = JSON.parse(e.target.value);
                    setContent({
                      ...content,
                      academics: {
                        ...content.academics,
                        examScores
                      }
                    });
                  } catch (error) {
                    console.error('Invalid JSON:', error);
                  }
                }}
                className="w-full h-60 p-2 border rounded-lg font-mono text-sm dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Achievements</label>
              <textarea
                value={JSON.stringify(content.academics.achievements, null, 2)}
                onChange={(e) => {
                  try {
                    const achievements = JSON.parse(e.target.value);
                    setContent({
                      ...content,
                      academics: {
                        ...content.academics,
                        achievements
                      }
                    });
                  } catch (error) {
                    console.error('Invalid JSON:', error);
                  }
                }}
                className="w-full h-40 p-2 border rounded-lg font-mono text-sm dark:bg-gray-700"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <textarea
            value={JSON.stringify(content.projects, null, 2)}
            onChange={(e) => {
              try {
                const projects = JSON.parse(e.target.value);
                setContent({
                  ...content,
                  projects
                });
              } catch (error) {
                console.error('Invalid JSON:', error);
              }
            }}
            className="w-full h-96 p-2 border rounded-lg font-mono text-sm dark:bg-gray-700"
          />
        </section>

        {/* Activities Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Activities</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Categories</label>
              <textarea
                value={JSON.stringify(content.activities.categories, null, 2)}
                onChange={(e) => {
                  try {
                    const categories = JSON.parse(e.target.value);
                    setContent({
                      ...content,
                      activities: {
                        ...content.activities,
                        categories
                      }
                    });
                  } catch (error) {
                    console.error('Invalid JSON:', error);
                  }
                }}
                className="w-full h-60 p-2 border rounded-lg font-mono text-sm dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <textarea
                value={JSON.stringify(content.activities.skills, null, 2)}
                onChange={(e) => {
                  try {
                    const skills = JSON.parse(e.target.value);
                    setContent({
                      ...content,
                      activities: {
                        ...content.activities,
                        skills
                      }
                    });
                  } catch (error) {
                    console.error('Invalid JSON:', error);
                  }
                }}
                className="w-full h-40 p-2 border rounded-lg font-mono text-sm dark:bg-gray-700"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            onClick={updateContent}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 