import React, { useEffect, useState } from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

function App2() {
  const [status, setStatus] = useState("loading"); // 'loading' | 'login' | 'signup' | 'redirected'

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/account/user/me", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.ok) {
          // User is authenticated
          window.location.href = "/dashboard";
          setStatus("redirected");
          return;
        }

        // Not authenticated, now check if any users exist
        const sysRes = await fetch(
          "http://localhost:8080/api/account/system-status"
        );
        const data = await sysRes.json();

        if (data.hasUsers === false) {
          setStatus("signup");
        } else {
          setStatus("login");
        }
      } catch (err) {
        console.error("Error determining auth state", err);
        setStatus("login");
      }
    };

    checkAuth();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "signup") return <Signup />;
  if (status === "login") return <Login />;
  return null;
}

export default App2;
