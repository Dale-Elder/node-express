const express = require("express");
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();
const port = 5000 || process.env.PORT;

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]);
// app.use(express.static("./public"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("<h1>Products Page</h1>");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>Items Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
