var friends = require('../data/friends.js');
var checker = require('../data/checker.js');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){

        var newUser = req.body;

        var chosenFriend = checker(newUser);

        //sends back chosen friend after checker runs
        res.json(chosenFriend);

        //this will handle the friend search logic
    });


}

