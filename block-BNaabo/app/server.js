var express = require("express");

var app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(__dirname + "/root/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Welcome to URL encoded Form");
});

app.post("/json", (req, res) => {
  console.log(req.body);
  res.send("Welcome to JSON");
});

app.listen(4001, () => {
  console.log("Listening to 4001");
});
