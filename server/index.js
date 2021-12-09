const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const TodoRoutes = require("./route/todo");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", TodoRoutes);

const CONNECTION_URL = `mongodb+srv://user:Jp09284250620@cluster0.oytaf.mongodb.net/todo_db?retryWrites=true&w=majority`;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("Connection established!");
  })
  .catch((err) => console.log(err));
