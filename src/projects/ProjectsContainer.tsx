import { type RefObject } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../projects'

export default function ProjectsContainer({ ref }: { ref: RefObject<HTMLDivElement | null> }) {

  return <div ref={ref} className="projects-container">
    {projects.map(project => <ProjectCard project={project} />)}
  </div>
}