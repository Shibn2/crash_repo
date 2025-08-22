import React, { useEffect, useState } from "react";

export default function DragBlocks() {
  const [item, setItem] = useState("");
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  useEffect(() => {
    let list = new Array(8).fill("item");
    list = list.map((_, idx) => idx);
    setLeftItems(list);
  }, []);

  const onDragStartHandler = (el) => {
    setItem(el);
  };

  const onDropHandler = (isLeft) => {
    if (isLeft) {
      setLeftItems((prev) => [...prev, item]);
      const rightItemUpdated = rightItems.filter((rItem) => rItem !== item);
      setRightItems(rightItemUpdated);
    } else {
      setRightItems((prev) => [...prev, item]);
      const leftItemUpdated = leftItems.filter((lItem) => lItem !== item);
      setLeftItems(leftItemUpdated);
    }
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "500px" }}>
      <div
        style={{ width: "50%", border: "1px solid black" }}
        onDrop={() => onDropHandler(true)}
        onDragOver={onDragOverHandler}
      >
        <ul>
          {leftItems?.map((el) => (
            <li
              style={{
                listStyle: "none",
                width: "100%",
                height: "40px",
                backgroundColor: "grey",
                padding: "10px",
                margin: "2px",
              }}
              draggable="true"
              onDragStart={(e) => onDragStartHandler(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ width: "50%", border: "1px solid black" }}
        onDrop={() => onDropHandler(false)}
        onDragOver={onDragOverHandler}
      >
        {rightItems?.map((el) => (
          <li
            style={{
              listStyle: "none",
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              padding: "10px",
              margin: "2px",
            }}
            draggable="true"
            onDragStart={(e) => onDragStartHandler(el)}
          >
            {el}
          </li>
        ))}
      </div>
    </div>
  );
}
