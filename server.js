var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var api = require('./app/routing/apiRoutes.js');
var router = require('./app/routing/htmlRoutes.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use('/api', api);
app.use('/', router);





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});