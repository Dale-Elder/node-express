const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
