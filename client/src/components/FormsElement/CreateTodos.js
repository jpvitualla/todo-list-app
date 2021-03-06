import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../../UI/Card";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const CreateTodos = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const taskNameHandler = (event) => {
    setTaskName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const addThesis = (event) => {
    // event.preventDefault();
    axios.post("http://localhost:5000/api/todo/create-todo", {
      taskName: taskName,
      description: description,
    });
    window.location.reload(false);
  };

  return (
    <>
      <Card>
        <form>
          <div style={{ marginTop: "2rem", paddingBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Task Name"
              style={{ width: "100%" }}
              variant="outlined"
              onChange={taskNameHandler}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              style={{ width: "100%" }}
              rows={4}
              onChange={descriptionHandler}
        
            />
          </div>
          <div>
            <ButtonGroup>
              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: "2rem", marginLeft: "15rem" }}
                onClick={() => addThesis()}
              >
                ADD TASK
              </Button>
              <Link to="/view/todos" style={{ textDecoration: "none" }}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ marginTop: "2rem" }}
                  // onClick={() => addThesis()}
                >
                  VIEW TODOS
                </Button>
              </Link>
            </ButtonGroup>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateTodos;
