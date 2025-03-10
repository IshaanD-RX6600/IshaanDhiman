-- Create the website_content table
CREATE TABLE website_content (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create a row-level security policy
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON website_content
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated update"
  ON website_content
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial data
INSERT INTO website_content (content) VALUES (
  '{
    "about": {
      "introduction": [
        "Hi there! I''m Ishaan Dhiman, a student with a deep passion for technology and programming.",
        "When I''m not coding, you can find me participating in coding competitions and helping fellow students with their projects."
      ],
      "interests": [
        {
          "title": "Coding",
          "description": "I enjoy solving problems through code and building applications that make a difference."
        },
        {
          "title": "Learning",
          "description": "I''m constantly learning new technologies and concepts."
        },
        {
          "title": "Collaboration",
          "description": "I love working with others on projects and sharing knowledge."
        }
      ],
      "goals": {
        "shortTerm": [
          "Master full-stack web development",
          "Contribute to open-source projects",
          "Build a strong project portfolio",
          "Improve problem-solving skills"
        ],
        "longTerm": [
          "Pursue higher education in Computer Science",
          "Specialize in AI/ML development",
          "Create impactful technology solutions",
          "Mentor other aspiring developers"
        ]
      }
    },
    "academics": {
      "examScores": [
        {
          "name": "CCC Exam",
          "score": "58/75",
          "percentage": "77.3%",
          "description": "The Canadian Computing Competition (CCC) is a programming competition that tests problem-solving and algorithmic thinking skills.",
          "highlights": [
            "Above average performance in algorithmic challenges",
            "Strong problem-solving demonstration",
            "Efficient code implementation"
          ]
        },
        {
          "name": "Pascal Contest",
          "score": "104/150",
          "percentage": "69.3%",
          "description": "The Pascal Contest is a mathematics competition that challenges students with complex problem-solving and mathematical reasoning.",
          "highlights": [
            "Excellence in mathematical reasoning",
            "Creative problem-solving approach",
            "Strong analytical skills"
          ]
        }
      ],
      "achievements": [
        {
          "title": "Academic Honor Roll",
          "year": "2023",
          "description": "Maintained high academic standing throughout the academic year."
        },
        {
          "title": "Mathematics Club Leader",
          "year": "2023",
          "description": "Led weekly problem-solving sessions and organized math competitions."
        }
      ]
    },
    "projects": [
      {
        "title": "Student Showcase Website",
        "description": "A modern portfolio website built with Next.js and Tailwind CSS.",
        "tech": ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        "features": [
          "Responsive design with dark mode",
          "Dynamic content management",
          "SEO optimization",
          "Contact form integration"
        ],
        "github": "https://github.com/yourusername/student-showcase",
        "demo": "https://student-showcase.vercel.app"
      },
      {
        "title": "Python Utility Scripts",
        "description": "A collection of Python scripts for automating various tasks.",
        "tech": ["Python", "Pandas", "NumPy"],
        "features": [
          "Data processing utilities",
          "File management tools",
          "Algorithm implementations",
          "Command-line interfaces"
        ],
        "github": "https://github.com/yourusername/python-utils"
      }
    ],
    "activities": {
      "categories": [
        {
          "name": "Tech & Coding",
          "items": [
            {
              "title": "Coding Club Member",
              "period": "2023 - Present",
              "description": "Active member of the school coding club.",
              "achievements": [
                "Organized coding workshops",
                "Participated in team competitions",
                "Contributed to club projects"
              ]
            }
          ]
        }
      ],
      "skills": [
        {
          "category": "Technical Skills",
          "items": [
            "HTML, CSS, JavaScript",
            "React & Next.js",
            "Python Programming",
            "Git Version Control",
            "Basic Database Management"
          ]
        },
        {
          "category": "Soft Skills",
          "items": [
            "Problem Solving",
            "Team Collaboration",
            "Time Management",
            "Written Communication",
            "Public Speaking"
          ]
        }
      ]
    }
  }'::jsonb
); 