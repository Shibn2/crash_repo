import React, { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [incomingMsgs, setIncomingMsgs] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const ws = useRef(null);

  useEffect(() => {
    console.log("Incoming msgs", incomingMsgs);
  }, [incomingMsgs]);
  useEffect(() => {
    try {
      ws.current = new WebSocket("ws://localhost:8080");
      ws.current.onopen = () => {
        console.log("Connected to server");
        setIsReady(true);
      };
      ws.current.onmessage = (event) => {
        setIncomingMsgs((prev) => [...prev, event.data]);
      };
      ws.current.onclose = () => {
        console.log("Disconnected!");
        setIsReady(false);
      };
      ws.current.onerror = (error) => {
        console.log("Websocket error: ", error);
        setIsReady(false);
      };
    } catch (err) {
      console.error("Errro: ", err);
    }

    return () => ws.current.close();
  }, []);

  const handleMessageSubmit = () => {
    if (isReady) {
      ws.current.send(message);
    } else {
      console.warn("WebSocket not ready.");
    }
  };

  const keydownHandler = (e) => {
    if (e.key === "Enter") {
      handleMessageSubmit();
      setMessageList((prev) => [...prev, message]);
      setMessage("");
    }
  };

  return (
    <div style={{ width: "200px", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "10px" }}>
        <ul>
          {messageList?.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
      </div>
      <input
        placeholder="Type your message..."
        onChange={(e) => e.target.value && setMessage(e.target.value)}
        onKeyDown={keydownHandler}
      />
    </div>
  );
}
