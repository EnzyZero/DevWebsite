import { useRef, useEffect, useState } from "react"

export default function Boot(isBootedSetter: React.Dispatch<React.SetStateAction<boolean>>) {
  const ref = useRef(null);
  const [children, setChildren] = useState<HTMLParagraphElement[] | null>(null);

  useEffect(() => {
    booting(setChildren);
    isBootedSetter(true);
  }, []);

  return (
    <div ref={ref} id="boot"></div>
  );
}

function booting(
  logMessages: HTMLParagraphElement
  LogMessagesSetter: React.Dispatch<React.SetStateAction<HTMLParagraphElement[] | null>>) {

  


}