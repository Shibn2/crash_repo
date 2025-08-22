import React, { useEffect, useMemo, useState } from "react";

const URL = "https://dummyjson.com/products/search?q=";

// ✅ Proper rate limiter with a self-draining queue
function rateLimiterWithFetch(setList, delay) {
  let queue = [];
  let timer = null;

  async function processQueue() {
    if (queue.length === 0) {
      timer = null;
      return;
    }
    const currSearch = queue.shift();
    console.log("CurrSearch", currSearch);
    const response = await fetch(`${URL}${currSearch}`);
    const result = await response.json();
    setList(result?.products);
    timer = setTimeout(processQueue, delay);
  }

  return function enqueue(search) {
    queue.push(search);
    if (!timer) {
      processQueue();
    }
  };
}

function RateLimiterComponent() {
  const [list, setList] = useState([]);

  const fetchV2 = useMemo(() => rateLimiterWithFetch(setList, 5000), []);

  const handleChangeInput = (e) => {
    fetchV2(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Rate Limiter</label>
        <input onChange={handleChangeInput} placeholder="Search products" />
      </div>
      <div>
        <ul>
          {list?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RateLimiterComponent;
