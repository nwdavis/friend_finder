var friends = require('./friends.js');

module.exports = function(user){

    var userScores = user.scores;
    var chosenFriend = {};
    //temp variable for comparing difference in scores
    var k;

//runs through all the friends in friends.js and compares the incoming user data
    friends.forEach(function(friend){
        
        var fScores = friend.scores;
        var uScores = userScores;
        var totalDiff;
              

        for (i=0; i < uScores.length; i++){

            var j = difference(parseInt(uScores[i]), parseInt(fScores[i]));
            totalDiff += j;
            
        }

        function difference(a, b) { return Math.abs(a - b); }

        if (totalDiff < k){
            console.log("pushing to k")
            k = totalDiff;
            chosenFriend = friend.name;
        }

    });

    console.log("Chosen friend is: " + chosenFriend);
    return chosenFriend;
    
}