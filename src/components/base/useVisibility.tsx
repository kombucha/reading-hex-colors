import { useState, useEffect } from "react";

const useVisibility = (node: React.RefObject<Element>, options?: IntersectionObserverInit) => {
  const [visible, setVisibilty] = useState(true);

  useEffect(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisibilty(entry.isIntersecting);
      }, options);

      if (node.current) {
        observer.observe(node.current);
      }

      return () => observer.disconnect();
    },
    [node.current, options]
  );

  return visible;
};

export default useVisibility;
