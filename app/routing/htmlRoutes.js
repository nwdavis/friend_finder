var path = require('path');
var express = require('express');
var friends = require('../data/friends.js')


module.exports = (function() {

  var app = express.Router();

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/submit", function(req, res) {
    
    var incomingUser = {
        name: req.body.name,
        scores: req.body.scores
    }

    

    var match = {};



    friends.push(incomingUser);
    res.json(match)
  
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  return app;

})();
