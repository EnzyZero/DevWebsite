import { RefObject } from "react"

interface Props {
  direction: "left" | "right";
  active: boolean;
  ref?: RefObject<HTMLDivElement | null>;
}

export default function TimelinePoint({ ref, direction, active = false }: Props) {

  const directionClass: string = direction === "left"
    ? "circle-to-left"
    : "circle-to-right";

  // animate if point is in the upper half of the viewport
  const animate: string = active
    ? 'active'
    : '';

  return <div ref={ref} className={`timeline-point ${directionClass} ${animate}`}></div>;
}