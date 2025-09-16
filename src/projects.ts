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
    type: 'project',
    title: 'This Website',
    date: '08/2025',
    date_end: '09/2025',
    techstack: ['TS', 'React', 'Css'],
    description: 'My portfolio website, created with React and deployed on my homelab server.',
    links: [{type: 'github', target: 'https://github.com/EnzyZero/DevWebsite'}],
    image: 'my_website.png',
  },
];
