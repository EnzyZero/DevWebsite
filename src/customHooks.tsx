import { useState, useEffect, type RefObject } from 'react'

export function useWindowWidth(initialWidth: number): number {
  const [width, setWidth] = useState(initialWidth);

  // add event listener for resizes, set new width on resize event.
  useEffect(() => {
    const handleResize = () => { setWidth(window.innerWidth); };

    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return width;
}

interface Options {
  threshold?: number;
  delay?: number;
}

export function useIsIntersecting<T extends Element>(ref: RefObject<T | null>, options?: Options): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current)
    {
      console.warn("Reference passed to useIsIntersecting hook is false" + ref.current);
      return;
    }

    // trigger a render if isIntersecting changed
    const observer = new IntersectionObserver(([element]) => {
      setIsIntersecting(element.isIntersecting);
    }, options ?? {});

    observer.observe(ref.current);

    return () => observer.disconnect();

  }, [ref.current]);

  return isIntersecting;
}

export function useIsUpperHalf<T extends Element>(ref: RefObject<T | null>): boolean {
  const [isLowerHalf, setIsLowerHalf] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      console.warn("Reference passed to useIsIntersecting hook is false" + ref.current);
      return;
    }

    const handleScroll = () => {
      if (!ref.current)
        return;

      const boundingClientRect: DOMRect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const boundingClientRectHalf: number = boundingClientRect.top + boundingClientRect.height / 2;
      const distanceFromViewportCenter: number = boundingClientRectHalf - windowHeight / 2;
      
      // element is in lower half if it is smaller than the middle height of the viewport
      setIsLowerHalf(distanceFromViewportCenter <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref.current]);

  return isLowerHalf;
}