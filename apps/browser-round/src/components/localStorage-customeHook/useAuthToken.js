import { useCallback, useEffect, useRef, useState } from "react";

const TOKEN_KEY = "auth_token";

const setToLocalStorage = (key, value) => {
  if (value) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key) || null;
};

// Custome hook to handle local storage token
export function useAuthToke() {
  const [tokenState, setTokenState] = useState(() =>
    getFromLocalStorage(TOKEN_KEY)
  );
  const token = useRef(null);

  const setToken = useCallback((e) => {
    const { value } = e.target;
    token.current = value;
    setTokenState(value);
    setToLocalStorage(TOKEN_KEY, value);
  }, []);

  const getToken = useCallback(() => {
    return token.current || null;
  }, []);

  useEffect(() => {
    if (tokenState) {
      token.current = tokenState;
    }
  }, [tokenState]);

  return [setToken, getToken];
}
