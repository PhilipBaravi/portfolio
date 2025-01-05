type CodeTab = {
  name: string;
  language: string;
  code: string;
};

const codeTabs: CodeTab[] = [
  {
    name: "App.tsx",
    language: "tsx",
    code: `import { useState, useEffect, FC } from 'react';
  
  const AwesomeComponent: FC = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="p-4 bg-stone-800 text-stone-100">
        <h1 className="text-2xl font-bold mb-2">
          Welcome to My Portfolio
        </h1>
        <p>This component has been running for {count} seconds.</p>
      </div>
    );
  };
  
  export default AwesomeComponent;`,
  },
  {
    name: "package.json",
    language: "json",
    code: `{
    "name": "john-doe-portfolio",
    "version": "1.0.0",
    "description": "John Doe's Web Developer Portfolio",
    "author": {
      "name": "John Doe",
      "email": "john@example.com",
      "url": "https://johndoe.dev"
    },
    "skills": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "GraphQL"
    ],
    "experience": [
      {
        "company": "Tech Innovators Inc.",
        "position": "Senior Frontend Developer",
        "duration": "2020 - Present"
      },
      {
        "company": "Web Solutions Ltd.",
        "position": "Full Stack Developer",
        "duration": "2018 - 2020"
      }
    ],
    "education": {
      "degree": "BSc in Computer Science",
      "institution": "Tech University",
      "year": 2018
    },
    "interests": [
      "Open Source Contribution",
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
        { id: 1, name: 'E-commerce Platform', tech: ['Next.js', 'GraphQL', 'MongoDB'] },
        { id: 2, name: 'Task Management App', tech: ['React', 'Redux', 'Node.js'] },
        { id: 3, name: 'Social Media Dashboard', tech: ['Vue.js', 'Express', 'PostgreSQL'] },
      ];
  
      res.status(200).json({ projects });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }`,
  },
];

export default codeTabs;
