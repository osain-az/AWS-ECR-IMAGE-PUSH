const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express app world");
});

app.get("/me", (req, res) => {
  res.send("Sup, Duke here");
});
let port = 3000
app.listen(port, () => {
  console.log("The app is running on port ", port);
});
