import { useState, useEffect } from "react";
import axios from "axios";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const responseData = await axios.get("http://localhost:5000/api/todos");
    setTodos(responseData);
  };

  return (
    <>
      <div>Hi</div>
    </>
  );
};

export default TodoForm;
