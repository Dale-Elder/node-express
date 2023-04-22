const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
