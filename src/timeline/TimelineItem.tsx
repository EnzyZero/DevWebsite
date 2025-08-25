import { type ReactNode, useRef } from 'react'
import { useWindowWidth, useIsIntersecting, useIsUpperHalf } from '../customHooks'
import TimelinePoint from './TimelinePoint'

interface NodePair {
  children: [ReactNode, ReactNode];
}

export default function TimelineItem({ children }: NodePair) {
  const [leftCard, rightCard] = children;
  const width: number = useWindowWidth(window.innerWidth);
  const mobileScreen: boolean = width <= 1000;

  // see if left or right cards are intersecting
  const options = { threshold: 0.2, delay: 1000 };
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftIsIntersecting: boolean = useIsIntersecting(leftRef, options);
  const rightIsIntersecting: boolean = useIsIntersecting(rightRef, options);

  // add the show class if this is intersecting
  const leftShow: string = leftIsIntersecting ? 'show' : '';
  const rightShow: string = rightIsIntersecting ? 'show' : '';

  // mark card and points as active if the points are in the upper half of the viewport
  const leftPointRef = useRef(null);
  const rightPointRef = useRef(null);
  const leftPointIsUpperHalf = useIsUpperHalf(leftPointRef);
  const rightPointIsUpperHalf = useIsUpperHalf(rightPointRef);
 
  // if on mobile, make two timeline points in diffrent containers. The Css will then assign them diffrent cells
  // in a grid.
  // Otherwise, put both timelinepoints in a single container
  const centerTimelinePoints: ReactNode =
  <>
    {mobileScreen && 
      <div className={`timeline-center enter-from-back ${leftShow}`}>
        <TimelinePoint ref={leftPointRef} direction="right" active={leftPointIsUpperHalf} />
      </div>}

    <div className={`timeline-center enter-from-back ${rightShow}`}>
      {!mobileScreen && <TimelinePoint ref={leftPointRef} direction='left' active={leftPointIsUpperHalf} />}
      <TimelinePoint ref={rightPointRef} direction="right" active={rightPointIsUpperHalf} />
    </div>
  </>

  const leftIsActive: string = leftPointIsUpperHalf
    ? 'active'
    : '';

  const rightIsActive: string = rightPointIsUpperHalf
    ? 'active'
    : '';

  const leftCardOnLeftOrRightSide: ReactNode = mobileScreen
    ? <div ref={leftRef} className={`timeline-right enter-from-right ${leftShow} ${leftIsActive}`}>{leftCard}</div>
    : <div ref={leftRef} className={`timeline-left enter-from-left ${leftShow} ${leftIsActive}`}>{leftCard}</div>;

  return (
    <div className="timeline-item">
      {leftCardOnLeftOrRightSide}
      {centerTimelinePoints}
      <div ref={rightRef} className={`timeline-right enter-from-right ${rightShow} ${rightIsActive}`}>{rightCard}</div>
    </div>
  );
}