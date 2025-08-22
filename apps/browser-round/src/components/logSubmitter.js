import React, { useState } from "react";

export default function LogSubmitter() {
  const [type, setType] = useState("light");
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const submitLog = async () => {
    try {
      const res = await fetch("http://localhost:8080/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer xyz123",
        },
        body: JSON.stringify({ type, data }),
      });

      if (!res.ok) {
        throw new Error(`Status ${res.status}`);
      }

      const json = await res.json();
      setResponse(json);
      setError("");
    } catch (err) {
      setError(`Failed to submit log: ${err.message}`);
      setResponse(null);
    }
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
      <h2>Log Submitter</h2>
      <label>
        Log Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="light">Light</option>
          <option value="heavy">Heavy</option>
        </select>
      </label>
      <br />
      <br />
      <textarea
        rows={4}
        cols={50}
        placeholder="Enter log data here..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submitLog}>Submit Log</button>
      <br />
      <br />

      {error && <div style={{ color: "red" }}>{error}</div>}
      {response && (
        <div style={{ color: "green" }}>
          <strong>Response:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
