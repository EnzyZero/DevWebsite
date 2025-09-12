import Techstack from './Techstack'
import { aboutMeText } from '../texts'
import './about.css'

export default function About({ active }: { active: boolean}) {
    
  return (
    <section id="about" className={active ? 'active' : ''}>
      <h1>About</h1>
      { aboutMeText }
      <Techstack />
    </section>
  );
}