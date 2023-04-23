const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 3000 || process.env.PORT;

// middleware

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.status(200).send("Task Manager App!");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')        -- get all the tasks
// app.post('/api/v1/tasks')       -- create a new task
// app.get('/api/v1/tasks/:id')    -- get a single task
// app.patch('/api/v1/tasks/:id')  -- update a task
// app.delete('/api/v1/tasks/:id') -- delete a task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log(`Server is running at http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
