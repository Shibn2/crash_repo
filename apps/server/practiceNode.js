const express = require("express");
const cors = require("cors");

const practiceRoutes = require("./routes/practiceRoutes");
const ssrRoute = require("./routes/ssrRoute");
const productListRoutes = require("./routes/productListRoutes");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use("/ssr", ssrRoute);

app.use("/practiceList", practiceRoutes);

app.use("/graphql", productListRoutes);

app.listen(PORT, () => {
  console.log(`SSR app running on http://localhost:${PORT}`);
});
