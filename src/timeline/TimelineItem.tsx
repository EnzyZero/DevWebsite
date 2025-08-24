import { type ReactNode } from 'react'
import { useWindowWidth } from '../customHooks'
import TimelinePoint from './TimelinePoint'

interface NodePair {
  children: [ReactNode, ReactNode];
}

export default function TimelineItem({ children }: NodePair) {
  const [leftCard, rightCard] = children;
  const width: number = useWindowWidth(window.innerWidth);

  const mobileScreen: boolean = width <= 1000;
 
  // if on mobile, make two timeline points in diffrent containers. The Css will then assign them diffrent cells
  // in a grid.
  // Otherwise, put both timelinepoints in a single container
  const centerTimelinePoints: ReactNode =
  <>
    {mobileScreen && 
      <div className="timeline-center">
        <TimelinePoint direction="right" />
      </div>}

    <div className="timeline-center">
      {!mobileScreen && <TimelinePoint direction='left' />}
      <TimelinePoint direction="right" />
    </div>
  </>

  const leftOrRightCard: ReactNode = mobileScreen
    ? <div className="timeline-right fade-in-from-right">{leftCard}</div>
    : <div className="timeline-left fade-in-from-left">{leftCard}</div>;

  return (
    <div className="timeline-item">
      {leftOrRightCard}
      {centerTimelinePoints}
      <div className="timeline-right fade-in-from-right">{rightCard}</div>
    </div>
  );
}