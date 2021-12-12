import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// import Card from "@mui/material/Card";

const Card = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "auto",
            height: "auto",
            padding: "10px",
            justifyContent: "center",
            display: "flex",
            marginTop: "5rem",
            marginBottom: "5rem",
            borderRadius: "10px"
          },
        }}
      >
        <Paper>{props.children}</Paper>
      </Box>
    </>
  );
};

export default Card;
