import React, { useState, useEffect } from "react";
import "./undoableCounter.scss";

const INIT_STATE = {
  history: [
    {
      oldVal: 0,
      newVal: 0,
      ops: "",
    },
  ],
  backup: [
    {
      oldVal: 0,
      newVal: 0,
      ops: "",
    },
  ],
};

export default function UndoableCounter() {
  const [history, setHistory] = useState(INIT_STATE);

  useEffect(() => {
    console.log("history", history);
  }, [history]);

  const handleUndo = () => {
    setHistory((prev) => {
      const update = { ...prev };
      if (update.history.length <= 1) {
        return update;
      }
      const toBackup = update.history.pop();
      update.backup = [...update.backup, toBackup];

      return update;
    });
  };

  const handleReset = () => {
    setHistory(INIT_STATE);
  };

  const handleRedo = () => {
    setHistory((prev) => {
      const update = { ...prev };
      if (update.backup.length <= 1) {
        return update;
      }
      const toHistory = update.backup.pop();
      update.history = [...update.history, toHistory];

      return update;
    });
  };

  const handleOpChange = (op) => {
    switch (op) {
      case "/2":
        setHistory((prev) => {
          const update = { ...prev };
          const recent = update.history[update.history.length - 1];
          const newRecord = {
            ops: "/2",
            oldVal: recent.newVal,
            newVal: recent.newVal / 2,
          };
          update.history = [...update.history, newRecord];
          return update;
        });
        break;
      case "-1":
        setHistory((prev) => {
          const update = { ...prev };
          const recent = update.history[update.history.length - 1];
          const newRecord = {
            ops: "-1",
            oldVal: recent.newVal,
            newVal: recent.newVal - 1,
          };
          update.history = [...update.history, newRecord];
          return update;
        });
        break;
      case "+1":
        setHistory((prev) => {
          const update = { ...prev };
          const recent = update.history[update.history.length - 1];
          const newRecord = {
            ops: "+1",
            oldVal: recent.newVal,
            newVal: recent.newVal + 1,
          };
          update.history = [...update.history, newRecord];
          return update;
        });
        break;
      case "*2":
        setHistory((prev) => {
          const update = { ...prev };
          const recent = update.history[update.history.length - 1];
          const newRecord = {
            ops: "*2",
            oldVal: recent.newVal,
            newVal: recent.newVal * 2,
          };
          update.history = [...update.history, newRecord];
          return update;
        });
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <div className="btn-row">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{ display: "flex" }} className="ops-row">
        <button onClick={() => handleOpChange("/2")}>/2</button>
        <button onClick={() => handleOpChange("-1")}>-1</button>
        <label>{history.history[history.history.length - 1].newVal}</label>
        <button onClick={() => handleOpChange("+1")}>+1</button>
        <button onClick={() => handleOpChange("*2")}>*2</button>
      </div>
      <ul>
        {history?.history?.slice(1)?.map((item) => {
          return (
            <li>
              <span>{item.ops}</span>
              <span>{item.oldVal}</span>
              <span>{item.newVal}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
