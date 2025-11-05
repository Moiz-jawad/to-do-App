const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

const connectionUrl = "mongodb://localhost/27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();

app.set("view-engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
