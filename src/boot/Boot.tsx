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

    // INITIALISING bootRef of boot class here
    booting(ref, isBootedSetter);
    boot.ref = ref;
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

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class boot {
  private static bootRef: RefObject<null | Element>;

  static set ref(value: RefObject<null | Element>) {
    this.bootRef = value; 
  }

  static get ref(): RefObject<null | Element> {
    return this.bootRef;
  }

  private static check() { 
    if (!this.bootRef.current) {
      console.warn("bootRef reference is null");
      return true;
    }
    else return false;
  }

  // call after each print to keep the boot element scrolled to the latest log message
  // plus some offset for readability
  private static scrollToBottom() {
    this.bootRef.current!.scrollTop = this.bootRef.current!.scrollHeight + 10;
  }

  static active(b: boolean): void {
    if (this.check()) return;
    this.bootRef.current!.classList.toggle('active', b);
  }

  static info(msg: string): void {
    if (this.check()) return;
    this.bootRef.current!.appendChild(printLogMessage('info', msg));
    this.scrollToBottom();
  }

  static warn(msg: string): void {
    if (this.check()) return;
    this.bootRef.current!.appendChild(printLogMessage('warn', msg));
    this.scrollToBottom();
  }

  static error(msg: string): void {
    if (this.check()) return;
    this.bootRef.current!.appendChild(printLogMessage('error', msg));
    this.scrollToBottom();
  }

  static critical(msg: string): void {
    if (this.check()) return;
    this.bootRef.current!.appendChild(printLogMessage('critical', msg));
    this.scrollToBottom();
  }
}