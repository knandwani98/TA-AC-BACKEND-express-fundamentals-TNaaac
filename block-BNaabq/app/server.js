var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// Middlewares
app.use(cookieParser());

app.use(logger("dev"));

app.use("/about", (req, res, next) => {
  res.cookie("username", "knandwani98");
  console.log(req.cookies);
  res.end("About Page");
});

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

// Handling routes

app.get("/", (req, res) => {
  res.send("Welcome to Node JS");
});

app.listen(3000, () => {
  console.log("Listening to PORT 3000");
});
