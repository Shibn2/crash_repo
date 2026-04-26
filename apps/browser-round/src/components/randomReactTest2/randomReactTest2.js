import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function RandomReactTest2() {
  const boxRef = useRef(null);
  const [w, setW] = useState(120);

  useLayoutEffect(() => {
    // Runs in the commit phase (blocks paint) — keep it minimal!
    const el = boxRef.current;
    if (!el) return;
    // eslint-disable-next-line no-console
    console.log(
      "\u23F1\uFE0F useLayoutEffect: measuring box width:",
      el.getBoundingClientRect().width
    );
  }, [w]);

  useEffect(() => {
    // Runs later in a separate pass; does not block paint.
    const id = setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("\u2705 useEffect: async work after paint");
    }, 0);
    return () => clearTimeout(id);
  }, [w]);

  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
      }}
    >
      <h2 style={{ fontSize: 18, marginBottom: 8 }}>
        3) Commit (layout) vs Passive effects
      </h2>
      <div
        ref={boxRef}
        style={{
          height: 40,
          width: w,
          background: "#e0f2fe",
          border: "1px solid #7dd3fc",
          borderRadius: 8,
          transition: "width 150ms",
        }}
      />
      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button onClick={() => setW((x) => x - 20)}>- width</button>
        <button onClick={() => setW((x) => x + 20)}>+ width</button>
      </div>
      <p style={{ fontSize: 13, opacity: 0.8, marginTop: 8 }}>
        Open console: <code>useLayoutEffect</code> logs before paint;{" "}
        <code>useEffect</code> logs after paint.
      </p>
    </section>
  );
}

export default function RandomReactTest2Util() {
  return <RandomReactTest2 />;
}
