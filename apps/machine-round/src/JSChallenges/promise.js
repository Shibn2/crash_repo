class PromiseV5 {
  constructor(executor) {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.value = null;
    this.reason = null;
    this.status = "pending";
    this.called = false;
    this.onResolve = null;
    this.onReject = null;
    try {
      executor(this.resolve, this.reject);
    } catch (err) {}
  }

  resolve(value) {
    this.value = value;
    this.status = "fullfilled";
    if (!this.called && typeof this.onResolve === "function") {
      this.onResolve(value);
      this.called = true;
    }
  }

  reject(reason) {
    this.reason = reason;
    this.status = "rejected";
    if (!this.called && typeof this.onReject === "function") {
      this.onReject(reason);
      this.called = true;
    }
  }

  then(onResolve) {
    this.onResolve = onResolve;
    if (this.status === "fullfilled" && !this.called) {
      this.onResolve(this.value);
    }
    return this;
  }

  catch(onReject) {
    this.onReject = onReject;
    if (this.status === "rejected" && !this.called) {
      this.onReject(this.reason);
    }
    return this;
  }
  static all(promiseList) {
    return new PromiseV5((resolve, reject) => {
      if (!Array.isArray(promiseList)) {
        return reject(new TypeError("Argument must be an array"));
      }

      const results = [];
      let completed = 0;

      promiseList.forEach((p, index) => {
        // Ensure value is treated as a Promise
        Promise.resolve(p)
          .then((value) => {
            results[index] = value;
            completed++;

            if (completed === promiseList.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });

      // Empty array case
      if (promiseList.length === 0) {
        resolve([]);
      }
    });
  }
  static allSettled(promiseList) {
    const fullfillList = new Array(promiseList.length);
    return new PromiseV5((resolve, reject) => {
      promiseList.forEach(async (promise, index) => {
        try {
          const res = await promise;
          fullfillList[index] = "fullfilled";
        } catch (err) {
          fullfillList[index] = "rejectd";
        }
      });
      if (fullfillList.length === promiseList.length) resolve(fullfillList);
    });
  }
}

export function promiseV5Util() {
  const p1 = new PromiseV5((res, rej) => res(1000));

  const p2 = new PromiseV5((res, rej) => setTimeout(() => res(2000), 1000));
  //   console.log("P1");
  //   p1.then((val) => {
  //     console.log("Value:", val);
  //   }).catch((err) => {
  //     console.log("Error:", err);
  //   });

  const p3 = PromiseV5.all([p1, p2]);
  p3.then((res) => {
    console.log("Results: ", res);
  }).catch((err) => {
    console.log("Error: ", err);
  });

  //   console.log("P2");
  //   p2.then((val) => {
  //     console.log("Value:", val);
  //   }).catch((err) => {
  //     console.log("Error:", err);
  //   });
}
