import { type RefObject, useRef, useEffect } from "react"
import printLogMessage from "./printLogMessage"
import './boot.css'

interface Props {
  isBooted: boolean;
  isBootedSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Boot({ isBooted, isBootedSetter }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    booting(ref, isBootedSetter);
  }, []);

  return (
    <div ref={ref} id="boot" className={`${isBooted && 'active'}`}></div>
  );
}

async function booting(ref: RefObject<Element | null>, isBootedSetter: React.Dispatch<React.SetStateAction<boolean>>) {
  if (!ref.current)
  {
    console.error('Reference to boot element is null');
    return;
  }

  ref.current.appendChild(printLogMessage('info', 'Hello and Welcome to my website!'));
  ref.current.appendChild(printLogMessage('warn', 'Booting website...'));
  await sleep(500);

  ref.current.appendChild(printLogMessage('info', 'Done - starting website!'));
  await sleep(500);
  isBootedSetter(true);
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}