interface Direction {
  direction: "left" | "right";
}

export default function TimelinePoint({ direction }: Direction) {
  const directionClass: string = direction === "left"
    ? "circle-to-left"
    : "circle-to-right";

  return <div className={`timeline-point ${directionClass}`}></div>;
}