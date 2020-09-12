import { useEffect, useRef, useState } from 'react';

export default function useNearScreen() {
  const element = useRef(null);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShowPhoto(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    });
  }, [element]);

  return [showPhoto, element];
}
