import { useState, useEffect } from "react"

export default function TimelineProgressBar() {
  const [progressHeight, setProgressHeight] = useState(0);

  // effect which will set the height of the timeline-progress-bar 
  // depending of how far the user is scrolled in
  useEffect(() => {

    const container = document.getElementById('timeline-container');
    if (!container)
      throw new Error("Element with id 'timeline-container' not found");

    const handleScroll = () => {
      const boundingClientRect: DOMRect = container.getBoundingClientRect();
      const containerHeight: number = boundingClientRect.height;

      // DOMRect.top gets negative after the top border is passed, and is therefore negated
      // to get a positive value if the top border is passed
      // add half the window to make the end of the bar centered to the viewport
      const pixelsIntoContainer: number = (-boundingClientRect.top) + window.innerHeight / 2;
  
      // if not inside of the container, exit
      if (pixelsIntoContainer <= 0 || pixelsIntoContainer > containerHeight)
        return;
      
      setProgressHeight(pixelsIntoContainer);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div id="timeline-progress-bar" style={{height: `${progressHeight}px`}}></div>
  );
}