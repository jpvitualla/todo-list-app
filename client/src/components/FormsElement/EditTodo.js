import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../../UI/Card";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const EditTodo = () => {
  const { todoId } = useParams();
  const [taskName, setNewTaskName] = useState();
  const [description, setNewDescription] = useState();
  const [todo, setTodos] = useState();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        await axios
          .get(`http://localhost:5000/api/todo/${todoId}`)
          .then((allTodos) => {
            setTodos(allTodos.data.todos);
          });
      } catch (error) {}
    };
    fetchTodo();
  }, [todoId]);

  const editTask = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:5000/api/todo/update/${todoId}`, {
      taskName: taskName,
      description: description,
    });
  };

  return (
    <>
      <Card>
        {todo && (
          <form onSubmit={editTask}>
            <div style={{ marginTop: "2rem", paddingBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Task Name"
                style={{ width: "100%" }}
                variant="outlined"
                onChange={(event) => {
                  setNewTaskName(event.target.value);
                }}
                defaultValue={todo.taskName}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                style={{ width: "100%" }}
                rows={4}
                onChange={(event) => {
                  setNewDescription(event.target.value);
                }}
                defaultValue={todo.description}
              />
            </div>

            <div>
              <ButtonGroup>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ marginTop: "2rem", marginLeft: "15rem" }}
                >
                 SAVE CHANGES
                </Button>
                <Link to="/view/todos" style={{ textDecoration: "none" }}>
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginTop: "2rem" }}
                  >
                    VIEW TODOS
                  </Button>
                </Link>
                <Link to="/view/todos" style={{ textDecoration: "none" }}>
                  <Button
                    color="error"
                    variant="contained"
                    style={{ marginTop: "2rem" }}
                  >
                    CANCEL
                  </Button>
                </Link>
              </ButtonGroup>
            </div>
          </form>
        )}
      </Card>
    </>
  );
};

export default EditTodo;
