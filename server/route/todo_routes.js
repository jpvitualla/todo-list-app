const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodos,
  getTodoById,
  updateTodos,
  deleteTodos,
} = require("../controller/todo_controller");

router.get("/to-do-list", getTodos);
router.post("/create-todo", createTodos);
router.get("/:tId", getTodoById);
router.put("/update/:uId", updateTodos);
router.delete("/delete/:tId", deleteTodos);

module.exports = router;
