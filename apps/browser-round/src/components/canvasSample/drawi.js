import React, { useEffect, useState, useRef } from "react";

function Draw2() {
  const isDrawing = useRef(false);
  const [context, setContext] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasContext = canvasRef.current;
    if (!canvasContext) {
      return;
    }
    canvasContext.height = window.innerHeight;
    canvasContext.width = window.innerWidth;
    const ctx = canvasContext.getContext("2d");

    if (ctx) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      setContext(ctx);
    }
  }, []);

  const draw = (e) => {
    if (!isDrawing.current || !context) return;
    const { x, y } = getXY(e);
    context.lineTo(x, y);
    context.stroke();
  };

  const startDrawing = (e) => {
    isDrawing.current = true;
    if (!context) return;
    const { x, y } = getXY(e);
    context.beginPath();
    context.moveTo(x, y);
  };

  const stopDrawing = (e) => {
    isDrawing.current = false;
    context.closePath();
  };

  const getXY = (e) => {
    if (
      e.nativeEvent instanceof TouchEvent &&
      e.nativeEvent.touches.length > 0
    ) {
      const touch = e.nativeEvent.touches[0];
      return { x: touch.clientX, y: touch.clientY };
    } else {
      const nativeEvent = e.nativeEvent;
      return { x: nativeEvent.offsetX, y: nativeEvent.offsetY };
    }
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onTouchStart={startDrawing}
      onMouseUp={stopDrawing}
      onTouchEnd={stopDrawing}
      onMouseLeave={stopDrawing}
      onMouseMove={draw}
      onTouchMove={draw}
      ref={canvasRef}
    />
  );
}

function Drawi() {
  return (
    <div>
      <Draw2 />
    </div>
  );
}

export default Drawi;
