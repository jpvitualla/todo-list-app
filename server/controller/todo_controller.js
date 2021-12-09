const TodoModel = require("../model/todo_schema");

const getTodos = async (req, res) => {
  // let todos;
  // try {
  //   todos = await TodoModel.find({});
  // } catch (error) {
  //   res.status(500).json({ message: error });
  // }
  // res.json({ todos: todos.map((todo) => todo.toObject({ getters: true }))  });
  TodoModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};

const createTodos = async (req, res) => {
  const { taskName, description } = req.body;

  const createdTodo = new TodoModel({
    taskName,
    description,
  });

  try {
    createdTodo.save();
  } catch (error) {
    res.status(500).json({ message: error });
  }

  res.status(201).json({ todo: createdTodo });
};

const getTodoById = async (req, res) => {
  const todoId = req.params.tId;

  let todos;

  try {
    todos = await TodoModel.findById(todoId);
    if (!todos) {
      res
        .status(404)
        .json({ message: "Could not find a to-do for the provided id." });
    }
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTodos = async (req, res) => {
  const { taskName, description } = req.body;
  const todoId = req.params.uId;

  let todo;
  try {
    todo = await TodoModel.findById(todoId);
    if (!todo) {
      res
        .status(404)
        .json({ message: "Could not find a to-do for the provided id." });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }

  todo.taskName = taskName;
  todo.description = description;

  try {
    await todo.save();
  } catch (error) {
    res.status(500).json({ message: "Saving place failed, please try again" });
  }

  res.status(200).json({ todo: todo.toObject({ getters: true }) });
};

const deleteTodos = async (req, res) => {
  const todoId = req.params.tId;

  let todo;
  try {
    todo = await TodoModel.findByIdAndRemove(todoId);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Deleting place failed, please try again" });
  }

  if (!todo) {
    res.status(404).json({ message: "Could not find to-dos for this id" });
  }
  res.status(200).json({ message: "Deleted place." });
};

module.exports = {
  getTodos,
  createTodos,
  getTodoById,
  updateTodos,
  deleteTodos,
};
