import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditTodo = () => {
  const { todoId } = useParams();
  const [todo, setTodos] = useState();

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/api/todo/${todoId}`).then((allTodos) => {
        setTodos(allTodos.data.todos);
      });
    } catch (error) {}
  });

  return (
    <>
      {todo && (
        <div>
          <div>{todo.taskName}</div>
          <div>{todo.description}</div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
