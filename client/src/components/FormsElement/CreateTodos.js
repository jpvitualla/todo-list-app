
import Card from "../../UI/Card";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateTodos = () => {
    
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
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              style={{ width: "100%" }}
              rows={4}
            />
          </div>
          <div>
            <Button
              variant="contained"
              style={{ marginTop: "2rem", marginLeft: "15rem" }}
            >
              ADD TASK
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateTodos;
