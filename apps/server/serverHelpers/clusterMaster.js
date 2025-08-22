const cluster = require("cluster");

const os = require("os");

const { EventEmitter } = require("events");

const numCPUs = os.cpus().length;

const logEvents = new EventEmitter();

logEvents.on("log-received", (data) => {
  console.log(`[Master] log received: ${data.requestId}`);
});

logEvents.on("log-processing-started", (data) => {
  console.log(`[Master] processing started: ${data.requestId}`);
});

logEvents.on("log-processed", (data) => {
  console.log(`[Master] processing completed: ${data.requestId}`);
});

if (cluster.isMaster) {
  console.log(`[Master] forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on("message", (msg) => {
      logEvents.emit(msg.event, msg.data);
    });
  }

  cluster.on("exit", (worker) => {
    console.log(`[Master] worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  require("../server");
}
