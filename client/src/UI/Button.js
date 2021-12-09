import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Button = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          position: "fixed",
          width: "80px",
          height: "80px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0C9",
          color: "#FFF",
          borderRadius: "50px",
          textAlign: "center",
          boxShadow: " 2px 2px 3px #999",
        },
      }}
    >
      <Fab size="large" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Button;
