var express = require("express");

var app = express();

// handeling middlewares //
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/admin", (req, res, next) => {
  next(`Unauthorised ❌`);
});

// handeling routes //
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// handeling errors //
app.use((req, res, next) => {
  res.sendFile(__dirname + "/error.html");
});

app.use((err, req, res, next) => {
  res.sendFile(__dirname + "/admin-error.html");
});

app.listen(4000, () => {
  console.log(`Listening to PORT 4000`);
});
