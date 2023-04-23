const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.status(200).send("All tasks");
};

const getTask = (req, res) => {
  res.status(200).json(req.params.id);
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("Update a task");
};
const deleteTask = (req, res) => {
  res.status(200).send("Delete a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};