type CodeTab = {
  name: string;
  language: string;
  code: string;
};

const codeTabs: CodeTab[] = [
  {
    name: "aboutme.json",
    language: "json",
    code: `{
    "name": "Philip",
    "age" : 26,
    "description": "React Frontend Developer",
    "author": {
      "name": "Philip",
      "email": "philip.baravi@gmail.com",
      "tel": "+34 (664) 587-841",
      
    },
    "skills": [
      "React",
      "Next.js",
      "TypeScript",
      "Javascript",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Shadcn",
      "Keycloak",
      "Git",
    ],
    "experience": [
      {
        "company": "InvoiceHub",
        "position": "Frontend Developer",
        "duration": "2024 - Present"
      },
      {
        "company": "Upwork",
        "position": "Wordpress Developer",
        "duration": "2024 - 2024"
      },
        {
        "company": "Georgian Technical University",
        "position": "Bitrix Integration Specialist",
        "duration": "2020 - 2021"
      },
      {
        "company": "Georgian Travelguide",
        "position": "Frontend Developer",
        "duration": "2020 - 2020"
      }
    ],
    "education": {
      "degree": "BSc in Computer Science",
      "institution": "University Of Georgia",
      "year": 2018
    },
    "interests": [
      "Algorithms",
      "UI/UX Design",
      "Machine Learning"
    ]
  }`,
  },

  {
    name: "api.ts",
    language: "typescript",
    code: `import { NextApiRequest, NextApiResponse } from 'next';
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
      const projects = [
        { id: 1, name: 'InvoiceHub', tech: ['React', 'Typescript', 'React Router', 'Keycloak', 'TailwindCss', 'Shadcn UI', 'Vercel'] },
        { id: 2, name: 'Positivus', tech: ['React', 'React Router', 'Algorithms', 'Monaco Editor'] },
        { id: 3, name: 'Georgian TravelGuide', tech: ['javascript', 'html', 'css', 'bootstrap'] },
      ];
  
      res.status(200).json({ projects });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }`,
  },
];

export default codeTabs;
