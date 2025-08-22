const { parentPort, workerData } = require("worker_threads");

console.log(
  "---- Worker received data, ",
  workerData.data,
  "parentPort",
  parentPort
);

function heavyComputation(data) {
  let hash = 0;

  for (let i = 0; i < data.length; i++) {
    hash = Math.imul(31, hash) + data.charCodeAt(i);
    hash |= 0;
  }
  return { status: "done", hash };
}

const result = heavyComputation(workerData.data);
parentPort.postMessage(result);
