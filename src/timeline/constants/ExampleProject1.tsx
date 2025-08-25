import TimelineCard from '../TimelineCard'

const text = <p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>;

const techstack = <ul className="techstack">
  <li key="C++">C++</li>
  <li key="CMake">CMake</li>
</ul>

export default function ExampleProject1() {

  return (
    <>
      <h2 style={{color: 'white'}}>
        Project 1
      </h2>
      <h3>2025</h3>
      <TimelineCard>
        {techstack}
        {text}
      </TimelineCard>
    </>
  );
}