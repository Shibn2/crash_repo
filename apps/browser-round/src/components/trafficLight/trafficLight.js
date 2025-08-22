import React, { useEffect, useState } from "react";
import "./trafficLight.scss";

function TrafficLight() {
  const [current, setCurrent] = useState("yellow");
  useEffect(() => {
    let delay;
    let color;
    switch (current) {
      case "yellow":
        delay = 2000;
        color = "red";
        break;
      case "red":
        delay = 5000;
        color = "green";
        break;
      case "green":
        delay = 3500;
        color = "yellow";
        break;
      default:
        break;
    }
    const timer = setTimeout(() => {
      setCurrent(color);
    }, delay);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="traffic-light">
      <div
        className={`light red-light ${current === "red" ? "" : "off"}`}
      ></div>
      <div
        className={`light green-light ${current === "green" ? "" : "off"}`}
      ></div>
      <div
        className={`light yellow-light ${current === "yellow" ? "" : "off"}`}
      ></div>
    </div>
  );
}

export default TrafficLight;
