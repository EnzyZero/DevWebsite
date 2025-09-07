import TimelineCard from '../TimelineCard'
import { Link } from 'react-router'

const text = <p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</p>;

const techstack = <ul className="techstack">
  <li key="C++">C++</li>
  <li key="CMake">CMake</li>
</ul>

const button = 
<Link to='projects/start'>
  <button className="timeline-card-button">Show more</button>
</Link>

export default function ExampleProject1() {

  return (
      <TimelineCard>
        <h2> Project 1 </h2>
          {techstack}
          {text}
          {button}
      </TimelineCard>
  );
}