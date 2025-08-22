const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();

const server2Routes = require("./server2/routes/server2Routes");
app.use(
  cors({
    origin: "http://localhost:3002",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// app.options("*", )
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("Hit at /");
//   res.send({ message: "Success" });
// });

app.use("/api/account", server2Routes);

app.listen(PORT, () => {
  console.log(`Server2 is running at ${PORT}`);
});
