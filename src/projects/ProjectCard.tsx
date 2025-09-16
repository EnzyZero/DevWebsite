import { type Project, type LinkType, type ProjectType } from '../projects'
import { Link } from 'react-router'
import { Github, NotepadText, Code, Layers, GraduationCap } from 'lucide-react'

export default function ProjectCard({ project }: { project: Project }) {

  function link_maker({type, target}: LinkType) {
    switch (type) {
      case 'github':
        return <a className='github-link' href={target} target='_blank'><Github color='white' /></a>
      case 'article':
        return <Link className='article-link' to={target}><NotepadText color='white' /></Link>
    }
  };

  function type_maker(type: ProjectType) {
    switch (type) {
      case 'career': 
        return <Layers color="#62a0ea" />;
      case 'project':
        return <Code color="#dc8add" />;
      case 'education':
        return <GraduationCap color="#8ff0a4" />;
    }
  }

  return (
    <div className={`project-card ${project.type}`}>
      <div className="tilt">
        <div className="img">
          <img className="project-card-image" src={project.image} alt={project.title} />
          <div className="project-card-type">{type_maker(project.type)}</div>
        </div>
      </div>
      <div className="project-card-contents">
        <h1 className="project-card-title">{project.title}</h1>
        <h2 className="project-card-date">{project.date + (project.date_end ? ' - ' + project.date_end : '')}</h2>
        <ul className="project-card-techstack">
          {project.techstack.map((tech, index) => 
            <li key={index}>{tech}</li>
          )}
        </ul>
        <p className="project-card-text">{project.description}</p>
        <ul className='project-card-links'>
          {project.links.map((link, index) => 
            <li key={index}>{link_maker(link)}</li>
          )}
        </ul>
      </div>
    </div>
  );
}