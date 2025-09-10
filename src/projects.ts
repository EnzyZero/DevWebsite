interface Project {
  title: string;
  date: string;
  date_end?: string;
  techstack: string[];
  description: string;
  link_type: 'github' | 'article';
  link_target: string;
}

//export const projects