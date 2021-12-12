import { useState, useEffect } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
export default function BasicTable() {
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

  return (
    <Container>
      <TableContainer
        component={Paper}
        style={{
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Task Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {todo.taskName}
                </TableCell>
                <TableCell align="center">{todo.description}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                    <Button color="error">Delete</Button>
                    <Button>Done</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
