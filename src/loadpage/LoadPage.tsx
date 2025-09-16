import { type RefObject, useRef, useEffect } from 'react'
import { boot, sleep } from '../boot/Boot'
import './loadpage.css'

export default function LoadPage({ path }: { path: string }) {
  const ref: RefObject<null | HTMLDivElement> = useRef(null);

  // effect to load get the page and load it with log messages
  useEffect(() => {
    if (!ref.current)
    {
      console.warn('reference to LoadPage is null');
      return;
    }

    getPage(path, ref);

  }, [ref]);

  return <div ref={ref} className="loadpage" id={path}></div>
}

async function getPage(path: string, ref: RefObject<null | HTMLDivElement>) {

  // move Boot into foreground and fetch file, check status
  boot.info(`sending request for ${path}`);
  boot.active(false);
  const response = await fetch(path);
  await sleep(500);

  if (!response.ok)
  {
    boot.error(`got response with status code ${response.status}`)
    return;
  }
  else
    boot.info(`got response with status code ${response.status}`);

  // get response text 
  boot.info(`fetching page content for ${path}`);
  const contents = await response.text();
  await sleep(500);

  // get page and load with log messages, move Boot into background again
  boot.info(`recieved contents of ${path}`);
  boot.warn('loading page...');

  await sleep(500);
  boot.active(true);

  ref.current!.innerHTML = contents;
}