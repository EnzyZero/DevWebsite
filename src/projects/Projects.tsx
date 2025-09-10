import ProjectsContainer from './ProjectsContainer'
import { projectsText } from '../constants/texts'
import './projects.css'

export default function Projects({ active }: { active: boolean }) {

  return (
    <section id="projects" className={active ? 'active' : ''}>
      <h1>Projects</h1>
      {projectsText} 
      <ProjectsContainer />
    </section>
  );
}