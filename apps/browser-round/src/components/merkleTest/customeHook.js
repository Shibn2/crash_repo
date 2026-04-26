import { useCallback, useEffect } from "react";

function setToLocalStorage(key, val) {
  if (val) {
    localStorage.setItem(key, val);
  } else {
    localStorage.removeItem(key);
  }
}

export default function useLocalStore() {
  const [tokenState, setTokenState] = useState(null);
  const token = useRef(null);

  const setToken = useCallback((key, value) => {
    setTokenState(tokenState);
    setToLocalStorage(key, value);
  }, []);

  const getToken = useCallback((key) => {
    return token.current || null;
  }, []);

  useEffect(() => {
    token.current = tokenState;
  }, [tokenState]);
  return { setToken, getToken };
}
