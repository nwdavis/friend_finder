var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
  
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});