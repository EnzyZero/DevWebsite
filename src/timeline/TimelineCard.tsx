import { useRef } from "react"
import { useIsIntersecting } from "../customHooks"

export default function TimelineCard({ children }: any) {
  const ref = useRef(null);
  const isIntersecting: boolean = useIsIntersecting(ref, {
    threshold: 0.5,
  });
  
  const fadeInClass: string = isIntersecting 
    ? 'fade-in'
    : '';

  return (
    <div ref={ref} className={`timeline-card ${fadeInClass}`}>
      {children}
    </div>
  );
}