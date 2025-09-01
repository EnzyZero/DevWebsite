import { type ReactNode, useRef } from 'react'
import { useIsIntersecting } from '../customHooks'
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

  return (
    <div ref={ref} className="timeline-item">
      <div className={`timeline-left enter-from-back ${show}`}>
        <TimelinePoint text={date} />
      </div>
      <div className={`timeline-right enter-from-right ${show}`}>
        {children}
      </div>
    </div>
  );
}