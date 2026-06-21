require('dotenv').config();

const express = require("express");
const express = require("express");

const healthRoute = require("./routes/health");
const productsRoute = require("./routes/products");

const app = express();

app.use(express.json());

app.use("/api", healthRoute);
app.use("/api", productsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
