const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
