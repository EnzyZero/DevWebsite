import TimelineProgressBar from "./TimelineProgressBar"

export default function TimelineBar() {

  return (
    <div className="timeline-item">
      <div className="timeline-center">
        <div id="timeline-bar"></div>
        <TimelineProgressBar />
        <div id="timeline-overlay-fade-top"></div>
        <div id="timeline-overlay-fade-bottom"></div>
      </div>
    </div>
  );
}