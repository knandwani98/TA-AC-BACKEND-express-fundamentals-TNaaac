var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(cookieParser());

app.use("/admin", (req, res, next) => {
  next(`<h1>Access Denied</h1>`);
});

// Routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/blog.html");
});
app.get("/cases", (req, res) => {
  res.sendFile(__dirname + "/cases.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/users", (req, res) => {
  res.send(`<h1>Users Page</h1>`);
});

// 404 error
app.use((req, res, next) => {
  res.sendFile(__dirname + "/error.html");
});

// custom error
app.use((err, req, res, next) => {
  res.sendFile(__dirname + "/admin-error.html");
});

app.listen(4000, () => {
  console.log(`Listening to PORT 4000`);
});
