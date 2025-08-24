import TimelineContainer from './timeline/TimelineContainer'
import { projectsText } from './constants/texts'

export default function Projects() {

  return (
    <section id="projects">
      <h1>Projects</h1>
      {projectsText} 
      <TimelineContainer />
    </section>
  );
}