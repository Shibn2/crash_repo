function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}

function createResumableInterval(callback, delay, ...args) {
  let timer = null;
  let stopped = false;

  function clearTimer() {
    clearInterval(timer);
    timer = null;
  }

  const start = () => {
    if (stopped || timer) {
      return;
    }
    callback(...args);
    const timer = setInterval(() => {
      callback.apply(this, ...args);
    }, delay);
  };

  const pause = () => {
    if (stopped) {
      return;
    }
    clearTimer();
  };

  const stop = () => {
    stopped = true;
    clearTimer();
  };

  return {
    start,
    pause,
    stop,
  };
}

function promiseResolve(value) {
  console.log("value->", value);
  if (value instanceof Promise) {
    console.log("1");
    return value;
  }
  if (value !== null && typeof value.then === "function") {
    console.log("2");
    return new Promise(value.then.bind(value));
  }
  return new Promise((res, _) => {
    console.log("3");
    const result = res(value);
    return result;
  });
}

function withResolvers() {
  let resolve;
  let reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    promise,
    resolve,
    reject,
  };
}

export function withResolversUtil() {
  function delayedGreeting(name) {
    const { promise, resolve, reject } = Promise.withResolvers();

    setTimeout(() => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject(new Error("Name is required."));
      }
    }, 1000);

    return promise;
  }

  delayedGreeting("Alice")
    .then((message) => console.log(message)) // Output: Hello, Alice!
    .catch((error) => console.error(error));

  delayedGreeting()
    .then((message) => console.log(message))
    .catch((error) => console.error(error)); // Output: Error: Name is required.
}

export function promisePolifillsRejectUtils() {
  try {
    promiseReject("Mayday!");
  } catch (err) {
    console.log(err); // Mayday!
  }
}

export function resumableIntervalUtil() {
  let i = 0;
  // t = 0:
  const interval = createResumableInterval(() => {
    i++;
  }, 10);
  // t = 10:
  interval.start(); // i is now 1.
  console.log("1, i->", i);
  // t = 20: callback executes and i is now 2.
  // t = 25:
  interval.pause();
  console.log("2, i->", i);
  // t = 30: i remains at 2 because interval.pause() was called.
  // t = 35:
  interval.start(); // i is now 3.
  console.log("3, i->", i);
  // t = 45: callback executes and i is now 4.
  // t = 50:
  interval.stop(); // i remains at 4.
  console.log("4, i->", i);
}

export async function promiseResolveUtil() {
  const p = promiseResolve(42);
  await p; // 42

  //   const original = new Promise((resolve) => resolve(42));
  //   const cast = promiseResolve(original);
  //   await cast; // 42

  //   await resolvedThenable; // 42
  //   const resolvedThenable = promiseResolve({
  //     then(resolve, reject) {
  //       resolve(42);
  //     },
  //   });
  //   await resolvedThenable; // 42
}
