const Todo = require("../models/Todos");
const moment = require("moment");

const homeController = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.locals.moment = moment;
    res.render("index", { todos });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addTodoGetController = (req, res) => {
  try {
    res.render("newTodos");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateTodoGetController = async (req, res) => {
  try {
    const { id } = req.query;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    res.render("updateTodos", { todo });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteTodoGetController = (req, res) => {
  try {
    const { id } = req.query;
    res.render("deleteTodos", { id });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addTodoController = async (req, res) => {
  try {
    const { title, desc } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "title field must be filled!",
      });
    }
    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      req.status(400).json({
        message: "Todo not found",
      });
    }
    todo.title = title;
    todo.desc = desc;

    await todo.save();

    res.redirect("/");
    res.render("updateTodos");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteTodoController = async (req, res) => {
  try {
    const { id, confirm } = req.query;

    if (confirm === "yes") {
      await Todo.findByIdAndDelete(id);
    }

    return res.redirect("/");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  homeController,
  addTodoGetController,
  updateTodoGetController,
  deleteTodoGetController,
  addTodoController,
  updateTodoController,
  deleteTodoController,
};
