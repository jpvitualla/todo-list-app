import { useState, useEffect } from "react";
import axios from "axios";

import TodoItem from "./TodoItem";
import Button from "../../src/UI/Button";

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

  return (
    <>
      {renderTodos()}
      <Button />
    </>
  );
};

export default TodoForm;
