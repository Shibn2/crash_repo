import React, { useEffect, useMemo, useRef, useState } from "react";

const randomNumber = (start, end) => {
  return Math.round(start + Math.random() * (end - start));
};

function ChickenShoot() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const chickenRef = useRef(null);
  const boardRef = useRef(null);
  const checkenBottomPos = useRef(0);
  const boardDimensions = useRef(null);
  const hit = useRef(false);
  const [hitFlag, setHitFlag] = useState(hit.current);

  function intialiseBird() {
    setTimeout(() => {
      checkenBottomPos.current = 0;
      hit.current = false;
      setHitFlag(hit.current);
    }, 2000);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hit--->", hit);
      if (chickenRef.current && boardDimensions.current && !hit.current) {
        const left = randomNumber(
          boardDimensions.current.left,
          boardDimensions.current.right
        );
        chickenRef.current.style.left = `${left}px`;

        checkenBottomPos.current += 5;
        if (checkenBottomPos.current >= boardDimensions.current.top) {
          intialiseBird();
        }
        chickenRef.current.style.bottom = `${checkenBottomPos.current}px`;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();
      boardRef.current.style.cursor = "🔘";
      boardDimensions.current = boardRect || null;
    }
  }, []);

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score]);

  const handleBirdHit = (e) => {
    setScore((prev) => prev + 1);
    hit.current = true;
    setHitFlag(hit.current);
    intialiseBird();
  };

  return (
    <>
      <span>Score: {score}</span>
      <span>High Score: {topScore}</span>
      <div
        ref={boardRef}
        style={{
          backgroundColor: "grey",
          width: "500px",
          height: "500px",
          position: "relative",
        }}
      >
        <button
          ref={chickenRef}
          className="chicken"
          onClick={handleBirdHit}
          style={{
            position: "absolute",
            transition: "left 0.5s linear, bottom 0.5s linear",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          {hitFlag ? "💥" : "🐣"}
        </button>
      </div>
    </>
  );
}

export default ChickenShoot;
