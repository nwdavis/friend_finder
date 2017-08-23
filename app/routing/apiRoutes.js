var express = require('express');
var path = require('path');
var friends = require('../data/friends.js')

module.exports = (function() {
    
      var app = express.Router();
    
      app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
      // This is where the logic will go for the friend comparison, and posting to the friends array
      app.post("/submit", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      return app;
    
    })();
    

