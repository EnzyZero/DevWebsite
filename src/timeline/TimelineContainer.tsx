import TimelineBar from './TimelineBar'
import TimelineItem from './TimelineItem'
import ExampleProject1 from './constants/ExampleProject1'
import './timeline.css'
import './timeline_animations.css'

export default function TimelineContainer() {

  return (
    <div className="timeline-container" id="timeline-container">
      <TimelineBar />

      <TimelineItem>
        <ExampleProject1 />
        <ExampleProject1 />
      </TimelineItem>
      <TimelineItem>
        <ExampleProject1 />
        <ExampleProject1 />
      </TimelineItem>
      <TimelineItem>
        <ExampleProject1 />
        <ExampleProject1 />
      </TimelineItem>
    </div>

  );
}