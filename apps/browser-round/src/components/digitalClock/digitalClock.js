import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [hour, setHour] = useState(0);
  const [min, setMinutes] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (hour === 24) {
      setHour(0);
    }
  }, [hour]);

  useEffect(() => {
    if (min === 60) {
      setMinutes(0);
      setHour((prev) => prev + 1);
    }
  }, [min]);

  useEffect(() => {
    if (sec === 60) {
      setSec(0);
      setMinutes((prev) => prev + 1);
    }
  }, [sec]);

  useEffect(() => {
    setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      Digital clock!!!
      <div>{hour}</div>
      <div>{min}</div>
      <div>{sec}</div>
    </div>
  );
}

export default DigitalClock;
