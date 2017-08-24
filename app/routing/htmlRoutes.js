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

    var friendSums = [];

    //friend match is lowest number in friendSums

    for (var i=0; i < friends.length; i++){
      let friendScores = parseInt(friends[i].scores);
      let incomingUserScores = parseInt(incomingUser.scores)
      let sumArr = [];
      if (friendScores[i] === incomingUserScores[i]){
        sumArr.push(friendScores[i]);
      } else if (friendScores[i] > incomingUserScores[i]) {
        sumArr.push(friendScores[i] - incomingUserScores[i]);
      } else if (incomingUserScores[i] > friendScores[i]){
        sumArr.push(incomingUserScores[i] - friendScores[i]);
      }

      //adding together array of scores
      let sum = sumArr.reduce(function(sum, value) {
        return sum + value;
      }, 0);

      friendSums.push(sum);

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
