export type LinkType = {
  type: 'github' | 'article';
  target: string;
}

export type ProjectType = 'education' | 'career' | 'project';

export interface Project {
  type: ProjectType;
  title: string;
  date: string;
  date_end?: string;
  techstack: string[];
  description: string;
  links: LinkType[];
  image: string;
}

export const projects: Project[] = [
  {
    type: 'education',
    title: 'Hello World',
    date: '2025',
    date_end: '2025',
    techstack: ['C++', 'CMake'],
    description: 'This is a test project',
    links: [{type: 'github', target: 'github.com'}, {type: 'article', target: '/projects/start'}],
    image: 'coffee.png',
  },
  {
    type: 'career',
    title: 'Hello World',
    date: '2025',
    date_end: '2025',
    techstack: ['C++', 'CMake'],
    description: 'This is a test project',
    links: [{type: 'github', target: 'github.com'}, {type: 'article', target: '/projects/start'}],
    image: 'coffee.png',
  },
  {
    type: 'project',
    title: 'Hello World',
    date: '2025',
    date_end: '2025',
    techstack: ['C++', 'CMake'],
    description: 'This is a test project',
    links: [{type: 'github', target: 'github.com'}, {type: 'article', target: '/projects/start'}],
    image: 'coffee.png',
  },
];
