import React, { useState } from "react";

function LruCache() {
  this.cache = new Map();
  this.limit = 10;

  const get = (key) => {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  };

  const set = (key, value) => {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const oldestKey = this.cache.key.next();
      this.cache.delete(oldestKey);
    }
    return true;
  };

  return {
    get,
    set,
  };
}

const newLruCache = new LruCache();

function LruCacheUI() {
  const [currValue, setCurrValue] = useState("");
  const [toCache, setToCache] = useState({ key: "", value: "" });
  const [requestKey, setRequestKey] = useState("");
  const get = (key) => {
    console.log("key", key);
    const value = newLruCache.get(key);
    setCurrValue(value);
  };
  const set = (key, value) => {
    console.log("key", key, "value", value);
    newLruCache.set(key, value);
  };
  return (
    <div>
      <form>
        <fieldset>
          <legend>Submit to lru cache</legend>
          <label>
            Key:{" "}
            <input
              onChange={(e) =>
                setToCache((prev) => ({ ...prev, key: e.target.value }))
              }
              type="text"
            />
          </label>
          <label>
            Value:{" "}
            <input
              onChange={(e) =>
                setToCache((prev) => ({ ...prev, value: e.target.value }))
              }
              type="text"
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              set(toCache.key, toCache.value);
            }}
          >
            Submit
          </button>
        </fieldset>
        <fieldset>
          <legend>Fetch lru value</legend>
          <div>
            <input onChange={(e) => setRequestKey(e.target.value)} />
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("requestKey", requestKey);
                get(requestKey);
              }}
            >
              Get the value
            </button>
          </div>
          <div>
            <label>Value from cache: </label>
            <label>{currValue}</label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LruCacheUI;
