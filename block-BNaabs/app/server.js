var express = require("express");
var app = express();

app.use(express.static(__dirname + "/root"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

app.post("/new", (req, res) => {
  res.send(req);
});

app.get("/users/:username", (req, res) => {
  res.send(req.params.username);
});

app.listen(4000, () => {
  console.log(`Listening to PORT 4000`);
});
