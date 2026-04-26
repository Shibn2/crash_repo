import React, { useEffect, useState } from "react";
import "./progressBar.scss";

const PROGRESS_BAR_DURATION = 2;

function ProgressBar({ isEmpty, onComplete }) {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (isEmpty || startTransition) {
      return;
    }
    setStartTransition(true);
  }, [isEmpty]);

  return (
    <div
      style={{
        height: "20px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "green",
          transformOrigin: "left",
          transition: `transform ${PROGRESS_BAR_DURATION}s ease-in`,
        }}
        className={startTransition ? "filledBar" : "fillBar"}
        onTransitionEnd={() => onComplete()}
      ></div>
    </div>
  );
}

function ProgressBarList() {
  const [bars, setBars] = useState(0);
  const [filledItems, setFilledItems] = useState(0);
  return (
    <div>
      <h3>ProgressBar</h3>
      <button onClick={() => setBars((prev) => prev + 1)}>
        Add new progress bar
      </button>
      <div
        style={{
          margin: "10px 5px ",
          display: "flex",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        {Array(bars)
          .fill(null)
          .map((_, index) => {
            return (
              <ProgressBar
                isEmpty={index > filledItems}
                onComplete={() => {
                  console.log("On transition end...");
                  setFilledItems((prev) => prev + 1);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProgressBarList;
