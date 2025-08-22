import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/account/signup", {
        method: "POST",
        credentials: "include", // important for cookie-based login
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name: "Shibin" }),
      });
      localStorage.setItem("token", res.token);

      if (res.ok) {
        // Redirect after signup
        window.location.href = "/dashboard";
      } else {
        const data = await res.json();
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error-msg">{error}</p>}

        <div>
          <label>Email</label>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
