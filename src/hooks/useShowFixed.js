import { useEffect, useState } from 'react';

export default function useShowFixed() {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      window.scrollY > 180 ? setShowFixed(true) : setShowFixed(false);

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return showFixed;
}
