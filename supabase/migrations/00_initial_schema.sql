-- Create the website_content table
CREATE TABLE website_content (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON website_content
  FOR SELECT USING (true);

CREATE POLICY "Enable update for authenticated users only" ON website_content
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert initial content
INSERT INTO website_content (content) VALUES (
  '{
    "about": {
      "introduction": [
        "Hi, I''m Ishaan Dhiman, a passionate student developer with a keen interest in AI, machine learning, and web development.",
        "I love exploring new technologies and building projects that solve real-world problems.",
        "Currently focusing on expanding my knowledge in artificial intelligence and web development while maintaining a strong foundation in computer science fundamentals."
      ],
      "interests": [
        {
          "title": "Artificial Intelligence",
          "description": "Exploring machine learning, computer vision, and natural language processing"
        },
        {
          "title": "Web Development",
          "description": "Building modern web applications with Next.js and TypeScript"
        },
        {
          "title": "Software Engineering",
          "description": "Creating efficient and scalable solutions to complex problems"
        }
      ],
      "goals": {
        "shortTerm": [
          "Master Next.js and TypeScript for web development",
          "Contribute to open-source AI projects",
          "Improve my understanding of computer vision algorithms",
          "Build more projects combining AI and web technologies"
        ],
        "longTerm": [
          "Become a full-stack AI engineer",
          "Create innovative solutions that impact people''s lives",
          "Contribute to the advancement of AI technology",
          "Build a strong portfolio of diverse projects"
        ]
      }
    },
    "academics": {
      "examScores": [
        {
          "name": "Canadian Computing Competition",
          "score": "58/75",
          "percentage": "77.3%",
          "description": "Demonstrated strong problem-solving skills in algorithmic challenges",
          "highlights": [
            "Ranked in top percentile",
            "Solved complex algorithmic problems",
            "Applied efficient coding practices"
          ]
        },
        {
          "name": "Pascal Contest",
          "score": "104/150",
          "percentage": "69.3%",
          "description": "Showcased mathematical and computational thinking abilities",
          "highlights": [
            "Strong performance in mathematical reasoning",
            "Effective problem-solving approach",
            "Quick analytical thinking"
          ]
        }
      ],
      "achievements": [
        {
          "title": "AI Project Recognition",
          "description": "Developed innovative face swapping application",
          "date": "2023"
        },
        {
          "title": "Web Development Portfolio",
          "description": "Created multiple full-stack web applications",
          "date": "2023"
        }
      ]
    },
    "projects": [
      {
        "title": "Face Swap Application",
        "description": "An advanced face swapping tool that can replace faces in videos using just a single reference image. Built with Python and deep learning, this project requires no dataset or training.",
        "technologies": ["Python", "Computer Vision", "Deep Learning"],
        "features": [
          "Single image face replacement",
          "Video processing support",
          "No training required",
          "Multiple face detection"
        ],
        "github": "https://github.com/IshaanD-RX6600/Face-Swap",
        "type": "AI & Computer Vision"
      },
      {
        "title": "Chess Game Engine",
        "description": "A TypeScript-based chess library for move generation, validation, and game state management. Features support for FEN notation and PGN format.",
        "technologies": ["TypeScript", "Chess.js", "Game Development"],
        "features": [
          "Move validation",
          "Game state management",
          "FEN/PGN support",
          "Headless architecture"
        ],
        "github": "https://github.com/IshaanD-RX6600/Playing-around-with-chess",
        "type": "Game Development"
      },
      {
        "title": "Handwritten Text Recognition",
        "description": "Convert handwritten text into digital format using advanced OCR and machine learning techniques.",
        "technologies": ["Python", "OCR", "Machine Learning"],
        "features": [
          "Handwriting recognition",
          "Text extraction",
          "Digital conversion",
          "Image processing"
        ],
        "github": "https://github.com/IshaanD-RX6600/Handwritten-to-text",
        "type": "AI & Machine Learning"
      },
      {
        "title": "Student Help Website",
        "description": "A platform designed to assist students with resources and tools for academic success.",
        "technologies": ["Web Development", "Educational Tech"],
        "features": [
          "Resource management",
          "Student tools",
          "Academic support",
          "User-friendly interface"
        ],
        "github": "https://github.com/IshaanD-RX6600/Student-Help-Website",
        "type": "Web Development"
      }
    ],
    "activities": {
      "categories": [
        {
          "name": "Programming",
          "items": [
            "Participating in coding competitions",
            "Contributing to open-source projects",
            "Building personal projects"
          ]
        },
        {
          "name": "Learning",
          "items": [
            "Taking online courses in AI and web development",
            "Reading technical documentation and blogs",
            "Experimenting with new technologies"
          ]
        }
      ],
      "skills": [
        {
          "category": "Programming Languages",
          "items": ["Python", "TypeScript", "JavaScript"]
        },
        {
          "category": "Web Technologies",
          "items": ["Next.js", "React", "Tailwind CSS"]
        },
        {
          "category": "AI & ML",
          "items": ["Computer Vision", "OCR", "Deep Learning"]
        },
        {
          "category": "Tools",
          "items": ["Git", "VS Code", "Supabase"]
        }
      ]
    }
  }'
); 