var express = require("express");
var cookies = require("cookie-parser");

var app = express();

// Middlewares
app.use(cookies());

app.use("/about", (req, res, next) => {
  var count = req.cookies.count;
  if (count) {
    res.cookie("username", +count + 1);
  } else {
    res.cookie("username", 1);
  }
  next();
});

// Handling routes

// app.get("/about", (req, res) => {});

app.get("/", (req, res) => {
  res.send("Welcome to Node JS");
});

app.listen(3000, () => {
  console.log("Listening to PORT 3000");
});
