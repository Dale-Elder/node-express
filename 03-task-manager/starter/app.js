const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

// routes
app.get("/hello", (req, res) => {
  res.status(200).send("Task Manager App!");
});

// app.get('/api/v1/tasks')        -- get all the tasks
// app.post('/api/v1/tasks')       -- create a new task
// app.get('/api/v1/tasks/:id')    -- get a single task
// app.patch('/api/v1/tasks/:id')  -- update a task
// app.delete('/api/v1/tasks/:id') -- delete a task

app.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}...`);
});
