const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const http = require("http");
const WebSocket = require("ws");
const PORT = 5000;
const { fork } = require("child_process");
const { Worker } = require("worker_threads");
const path = require("path");
const cors = require("cors");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected!!!");
  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send("Again👋 Hi from node");
  });
  ws.send("👋 Hi from node");
});

app.use(express.json());
app.use(cors());
console.log("🟢 Express is initializing with server.js...");
console.log("📦 cwd:", process.cwd());
console.log("🗂 Available files:", require("fs").readdirSync("."));

// Middleware: add requestId and log each request
app.use((req, res, next) => {
  req.requestId = uuidv4();

  console.log(
    `[Worker] ${process.pid} ${req.method} ${req.url} | requestId: ${req.requestId}`
  );
  process.send?.({ event: "log-received", data: { requestId: req.requestId } });
  next();
});

// Midlleware: Simple auth check
// app.use((req, res, next) => {
//   const auth = req.headers.authorization;
//   if (!auth || auth !== "Bearer xyz123") {
//     return res.status(403).json({ error: "Unauthorized" });
//   }
//   next();
// });

app.get("/", (req, res) => {
  res.send("New server.js!!!");
});

// Route handler
app.post("/logs", (req, res) => {
  const { type, data } = req.body;

  process.send?.({
    event: "log-processing-started", // ✅ fixed typo
    data: { requestId: req.requestId },
  });

  if (type === "heavy") {
    console.log("---- Server.js/logs received heavy data, ", data);
    const worker = new Worker(path.join(__dirname, "heavyWorker.js"), {
      workerData: { data },
    });

    worker.on("message", (result) => {
      process.send?.({
        event: "log-processed",
        data: { requestId: req.requestId },
      });
      res.json({ result, requestId: req.requestId }); // ✅ fixed join → json
    });
  } else {
    console.log("---- Server.js/logs received light data, ", data);

    const child = fork(path.join(__dirname, "lightProcessor.js"));
    child.send({ data }); // ✅ fixed send → data

    child.on("message", (result) => {
      process.send?.({
        event: "log-processed",
        data: { requestId: req.requestId },
      });
      res.json({ result, requestId: req.requestId }); // ✅ fixed join → json
    });
  }
});

server.listen(PORT, () => {
  console.log(`[Worker ${process.pid}] Server listening on port ${PORT}`);
});
