const ejs = require("ejs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongoDb");
const todoRoute = require("./routes/todosRoute");
const dotenv = require("dotenv");

// ! enviroment variable

dotenv.config();

// ! app init
const app = express();

// ! Database connection
connectMongodb();
// ! view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ! all todos route
app.use("/", todoRoute);

module.exports = app;
