var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "knandwani98");
  next();
});

app.use("/admin", (req, res, next) => {
  next(`Access Denied`);
});

// routes

app.get("/", (req, res) => {
  res.send(`<h2>Welcome to express</h2>`);
});

app.get("/about", (req, res) => {
  res.send(`My name is qwerty`);
});

app.get("/users/:username", (req, res) => {
  res.send(`<h1>${req.params.username}</h1>`);
});

app.post("/form", (req, res) => {
  res.send(req.body);
});

app.post("/json", (req, res) => {
  res.send(req.body);
});

// 404 error
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/error.html");
});

// 505 error
app.use((err, req, res, next) => {
  res.status(505).sendFile(__dirname + "/admin-error.html");
});

app.listen(3000, () => {
  console.log(`Listening to PORT 3000`);
});
