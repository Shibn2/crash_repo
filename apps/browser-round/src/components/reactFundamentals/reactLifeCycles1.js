import React, { useEffect, useState } from "react";
function Child() {
  const [number, setNumber] = useState(2);

  useEffect(() => {
    setNumber(3);
    console.log("Child Component did mount", number);
    return () => {
      console.log("Child Component will unmount", number);
    };
  }, []);
  useEffect(() => {
    console.log("Child Component did update", number);
  }, [number]);
  return (
    <div>
      {console.log("Child Component rendering", number)}
      <h2>Child - {number}</h2>
    </div>
  );
}

function ReactLifecycle1() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // setNumber(1);
    console.log("Parent component did mount", number);
    return () => {
      console.log("Parent component will unmount", number);
    };
  }, []);
  useEffect(() => {
    console.log("Parent component did update", number);
  }, [number]);
  return (
    <div>
      {console.log("Parent component rendering", number)}
      <h2>Parent - {number}</h2>
      <Child />
    </div>
  );
}

export { ReactLifecycle1 };
