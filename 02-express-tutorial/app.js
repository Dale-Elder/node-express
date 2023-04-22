const express = require("express");
const path = require("path");
// create express app
const app = express();
// setting up the port if not set by the environment
const port = 5000 || process.env.port;
// setting up the static files and middleware
app.use(express.static("./public"));

// about page
// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
// });

// 404 page
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found!</h1>");
});

// app listening at localhost on port 5000 or the environment port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
