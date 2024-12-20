import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      const media = window.matchMedia(query); // Fresh media query
      setMatches(media.matches);
    };
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
