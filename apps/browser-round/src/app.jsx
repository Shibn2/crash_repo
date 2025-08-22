import React, { useEffect, useState } from "react";
import { componentList } from "./componentRgistry";

export const Test = () => <h4>Test Module</h4>;

function App() {
  const initialModuleList = {
    test: Test,
  };

  const [CurrentModule, setCurrentModule] = useState(null);

  useEffect(() => {
    const moduleFromUrl = getModuleFromUrl();
    setCurrentModule(moduleFromUrl);
  }, []);
  function getModuleFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("module") || "test";
  }

  function setModuleInUrl(newModule) {
    const params = new URLSearchParams(window.location.search);
    if (params.get("module")) {
      params.delete("module");
    }
    params.set("module", newModule);
    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", url);
  }

  const handleBtnClick = (e, module) => {
    console.log("module--->", module);
    setCurrentModule(module);
    setModuleInUrl(module);
  };

  return (
    <>
      <ul
        style={{
          flexWrap: "wrap",
          padding: "0px",
          width: "100vw",
          display: "flex",
          gap: "5px",
        }}
      >
        {Object.keys(componentList).map((module) => (
          <li style={{ listStyle: "none" }}>
            <button onClick={(e) => handleBtnClick(e, module)}>{module}</button>
          </li>
        ))}
      </ul>
      <div>{componentList[CurrentModule]}</div>
    </>
  );
}

export default App;
