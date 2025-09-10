import ProjectCard from './ProjectCard'
import { projects } from '../projects'

export default function ProjectsContainer() {

  return <div className="projects-container">
    {projects.map(project => <ProjectCard project={project} />)}
  </div>
}