import { type ReactNode, useRef } from 'react'
import { useIsIntersecting, useIsInCenter } from '../customHooks'
import TimelinePoint from './TimelinePoint'

interface Node {
  children: ReactNode;
  date: string;
}

export default function TimelineItem({ children, date }: Node) {
  const ref = useRef(null);

  // add the show class if item is intersecting
  const options = { threshold: 0.1, delay: 200 };
  const itemIsIntersecting: boolean = useIsIntersecting(ref, options);
  const show: string = itemIsIntersecting ? 'show' : '';

  // mark item as active if it is in the center of the screen
  const itemIsInCenter = useIsInCenter(ref, window.innerHeight / 4);
  const active: string = itemIsInCenter ? 'active' : '';

  return (
    <div ref={ref} className="timeline-item">
      <div className={`timeline-left enter-from-back ${show} ${active}`}>
        <TimelinePoint text={date} />
      </div>
      <div className={`timeline-right enter-from-right ${show} ${active}`}>
        {children}
      </div>
    </div>
  );
}