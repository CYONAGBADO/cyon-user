require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const path = require("path");
const favicon = require("express-favicon");
const port = process.env.PORT || 8080;
const app = express();

const mongoose = require("mongoose");


app.use(favicon(_dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connection successful");
});



app.listen(port);
