import React, { useEffect, useRef, useState } from "react";

export default function InfiniteScroller() {
  const [products, setProducts] = useState([]);
  const bottomEl = useRef(null);
  useEffect(() => {
    const pList = new Array(5)
      .fill("Product")
      .map((_, idx) => `Product${idx + 1}`);

    setProducts(pList);
  }, []);

  useEffect(() => {
    const handler = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setProducts((prevList) => {
          let pList = new Array(5).fill("Product");
          pList = pList.map((_, idx) => `Product${prevList.length + idx + 1}`);
          return [...prevList, ...pList];
        });
      }
    };
    const observer = new IntersectionObserver(handler);

    if (bottomEl.current) {
      observer.observe(bottomEl.current);
    }
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ul>
        {products?.map((product) => {
          return (
            <li
              style={{
                height: "100px",
                width: "150px",
                backgroundColor: "grey",
              }}
            >
              {product}
            </li>
          );
        })}
      </ul>
      <div
        ref={bottomEl}
        style={{ height: "0.5px", width: "100vw", backgroundColor: "red" }}
      ></div>
    </div>
  );
}
