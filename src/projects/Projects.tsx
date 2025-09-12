import { useRef } from 'react'
import ProjectRadioButtons from './ProjectRadioButtons'
import ProjectsContainer from './ProjectsContainer'
import { projectsText } from '../constants/texts'
import './projects.css'

export default function Projects({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section id="projects" className={active ? 'active' : ''}>
      <h1>Projects</h1>
      {projectsText} 
      <ProjectRadioButtons cardsContainerRef={ref} />
      <ProjectsContainer ref={ref} />
    </section>
  );
}