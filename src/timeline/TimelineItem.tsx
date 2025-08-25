import { type ReactNode, useRef } from 'react'
import { useWindowWidth, useIsIntersecting } from '../customHooks'
import TimelinePoint from './TimelinePoint'

interface NodePair {
  children: [ReactNode, ReactNode];
}

export default function TimelineItem({ children }: NodePair) {
  const [leftCard, rightCard] = children;
  const width: number = useWindowWidth(window.innerWidth);
  const mobileScreen: boolean = width <= 1000;

  // see if left or right cards are intersecting
  const options = { threshold: 0.2 };
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftIsIntersecting: boolean = useIsIntersecting(leftRef, options);
  const rightIsIntersecting: boolean = useIsIntersecting(rightRef, options);

  // add the show class if this is intersecting
  const leftShow: string = leftIsIntersecting ? 'show' : '';
  const rightShow: string = rightIsIntersecting ? 'show' : '';
 
  // if on mobile, make two timeline points in diffrent containers. The Css will then assign them diffrent cells
  // in a grid.
  // Otherwise, put both timelinepoints in a single container
  const centerTimelinePoints: ReactNode =
  <>
    {mobileScreen && 
      <div className={`timeline-center enter-from-back ${leftShow}`}>
        <TimelinePoint direction="right" />
      </div>}

    <div className={`timeline-center enter-from-back ${leftShow}`}>
      {!mobileScreen && <TimelinePoint direction='left' />}
      <TimelinePoint direction="right" />
    </div>
  </>


  const leftCardOnLeftOrRightSide: ReactNode = mobileScreen
    ? <div ref={leftRef} className={`timeline-right enter-from-right ${leftShow}`}>{leftCard}</div>
    : <div ref={leftRef} className={`timeline-left enter-from-left ${leftShow}`}>{leftCard}</div>;

  return (
    <div className="timeline-item">
      {leftCardOnLeftOrRightSide}
      {centerTimelinePoints}
      <div ref={rightRef} className={`timeline-right enter-from-right ${rightShow}`}>{rightCard}</div>
    </div>
  );
}