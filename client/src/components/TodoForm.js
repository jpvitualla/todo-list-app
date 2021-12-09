import { useState, useEffect } from "react";
import axios from "axios";

import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/todo/to-do-list")
        .then((allTodos) => {
          setTodos(allTodos.data);
        });
    } catch (error) {}
  }, []);

  const renderTodos = () => {
    return todos.map((todo, key) => {
      return (
        <TodoItem
          taskName={todo.taskName}
          description={todo.description}
          key={key}
        />
      );
    });
  };

  return <>{renderTodos()}</>;
};

export default TodoForm;
