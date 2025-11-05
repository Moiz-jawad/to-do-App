const express = require("express");
const ejs = require("ejs");

const PORT = 8000;

const app = express();

app.set("view-engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
