/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */

function isPlainObj(obj) {
  if (
    obj instanceof Object &&
    !(obj instanceof Set) &&
    !(obj instanceof Map) &&
    !(obj instanceof WeakSet) &&
    !(obj instanceof WeakMap)
  ) {
    return true;
  }
  return false;
}

function promiseMerge(p1, p2) {
  return new Promise(async (res, rej) => {
    try {
      const p1res = await p1;
      const p2res = await p2;
      console.log("p1res", typeof p1res, "p2res", typeof p2res);
      if (Array.isArray(p1res) && Array.isArray(p2res)) {
        res([...p1res, ...p2res]);
      } else if (typeof p1res === "number" && typeof p2res === "number") {
        res(p1res + p2res);
      } else if (typeof p1res === "string" && typeof p2res === "string") {
        res(p1res + p2res);
      } else if (isPlainObj(p1res) && isPlainObj(p2res)) {
        res({ ...p1res, ...p2res });
      } else {
        rej("Unsupported data types");
      }
    } catch (err) {
      rej(err);
    }
  });
}

export function promiseMergeUtil() {
  const promise = promiseMerge(
    new Promise((resolve) => setTimeout(() => resolve({ foo: 1 }), 5)),
    new Promise((resolve) => setTimeout(() => resolve({ bar: 2 }), 10))
  );

  promise
    .then((res) => {
      console.log("res ", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
}
