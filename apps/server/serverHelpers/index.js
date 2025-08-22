const express = require("express");
const app = express();

const PORT = 5000;

// Middleware
app.use(express.json()); // For parsing json bodies

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

console.log("🟢 Express is initializing...");
console.log("📦 cwd:", process.cwd());
console.log("🗂 Available files:", require("fs").readdirSync("."));
// Routes
app.get("/", (req, res) => {
  res.send("Helllo from express server");
});

app.post("/data", (req, res) => {
  console.log("---->", req.body);
  res.send("Received data");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
