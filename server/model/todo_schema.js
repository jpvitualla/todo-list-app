const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "Provide a task name"],
    trim: true,
    maxLength: [50, "Task name must be less than 50 characters"],
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoSchema = mongoose.model("Todo", TodoSchema);

module.exports = todoSchema;
