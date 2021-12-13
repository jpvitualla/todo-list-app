import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import style from "./Modal.module.css";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.closeModal} />;
};

const EditThesisModal = (props) => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState();
  const [newTaskName, setNewTaskName] = useState("");

  const closeModal = () => {
    props.closeModal(false);
  };

  useEffect(() => {
    const fetchTodo = async () => {
      const responseData = await axios.get(
        `http://localhost:5000/api/todo/${todoId}`
      );
      setTodo(responseData.todo);
    };
    fetchTodo();
  }, [todoId]);

  //   const updateInformation = (id) => {
  //     axios.put(`http://localhost:3001/update/${todoId}`, {
  //       newThesisTitle: newThesisTitle,
  //     });
  //   };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById("backdrop-root")
      )}

      <div className={style.modal}>
        <div className={style.card}>
          <div className={style.header}></div>
          <h2>Edit Thesis Information</h2>
          <div className={style.content}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { margin: "10px  100px ", width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                name="Task Name"
                id="outlined-basic"
                label="Thesis Title"
                variant="outlined"
                type="text"
                // value={todo.taskName}
                // onChange={(e) => {
                // //   setNewTaskName(e.target.value);
                // }}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                type="text"
                // value={todo.description}
              />
            </Box>

            <footer className={style.actions}>
              <ButtonGroup variant="contained">
                <Button
                  className={style.button}
                  variant="contained"
                  color="secondary"
                  onClick={closeModal}
                >
                  Cancel
                </Button>

                <Button variant="contained" color="primary">
                  Save
                </Button>
              </ButtonGroup>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditThesisModal;
