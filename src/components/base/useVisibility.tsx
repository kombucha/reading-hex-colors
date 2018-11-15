import { useState, useEffect } from "react";

const useVisibility = (node: React.RefObject<Element>, options?: IntersectionObserverInit) => {
  const [visible, setVisibilty] = useState(true);

  useEffect(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        // Workaround what seems to be a bug in the polyfill when using thresholds :/
        const isIntersecting =
          options && typeof options.threshold === "number"
            ? entry.intersectionRatio > options.threshold
            : entry.isIntersecting;

        setVisibilty(isIntersecting);
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
