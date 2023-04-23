const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// router for api/people routes
app.use("/api/people", people);
// router for authorization routes
app.use("/login", auth);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
