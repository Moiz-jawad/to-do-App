const ejs = require("ejs");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { type } = require("os");

const app = express();

const PORT = 8000;

const connectionUrl = "mongodb://localhost/27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log(err.message);
  });

const todoSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    desc: String,
  },
  { timeStamp: true }
);

const todo = mongoose.model("todo", todoSchema);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.get("/add-todo", (req, res) => {
  try {
    res.render("newTodos");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
app.get("/update-todo", (req, res) => {
  try {
    res.render("updateTodos");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
app.get("/delete-todo", (req, res) => {
  try {
    res.render("deleteTodos");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
