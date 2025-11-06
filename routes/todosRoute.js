const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

// Home route
router.get("/", todoController.homeController);

// Add Todo
router.get("/add-todo", todoController.addTodoGetController);
router.post("/add-todo", todoController.addTodoController);

// Update Todo
router.get("/update-todo", todoController.updateTodoGetController);
router.post("/update-todo/:id", todoController.updateTodoController);

// Delete Todo
router.get("/delete-todo", todoController.deleteTodoGetController); // Show confirmation page
router.get("/confirm-delete", todoController.deleteTodoController); // Handle delete logic

module.exports = router;
