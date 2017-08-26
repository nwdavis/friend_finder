var friends = require('./friends.js');

module.exports = function(user){
    console.log("checking");

    var userScores = user.scores;
    var chosenFriend = '';
    //temp variable for comparing difference in scores
    var k;

    friends.forEach(function(friend){
        
        var fScores = friend.scores;
        var uScores = userScores;
        var totalDiff;
        

        for (i=0; i < uScores.length; i++){

            var j = difference(parseInt(uScores[i]), parseInt(fScores[i]));
            console.log(j)
            totalDiff += j;

        }

        function difference(a, b) { return Math.abs(a - b); }

        if (totalDiff < k){
            console.log("pushing to k")
            chosenFriend = friend.name;
        }

    });

    console.log("Chosen friend is: " + chosenFriend);
    return chosenFriend;
    
}