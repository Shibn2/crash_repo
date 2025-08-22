import { useEffect, useRef, useState } from "react";

function debouncedSearch(search, delay = 2000) {
  const [debouncedSearchKey, setDebouncedSearchKey] = useState("");
  const timer = useRef(null);
  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDebouncedSearchKey(search);
    }, delay);
  }, [search]);
  return debouncedSearchKey;
}

export default debouncedSearch;
