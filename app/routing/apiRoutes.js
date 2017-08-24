var express = require('express');
var path = require('path');
var friends = require('../data/friends.js')

module.exports = (function() {
    
      var api = express.Router();
    
      api.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    
      // This is where the logic will go for the friend comparison, and posting to the friends array
      api.post("/api/submit", function(req, res) {
        
        var incomingUser = {
            name: req.body.name,
            scores: req.body.scores
        }

      });
    
      return api;
    
    })();
    

