var path = require("path");
var matchName = '';
var matchImage = '';

var friendsArray=require('../data/friends');

module.exports = function(app){

app.get("/api/friends", function(req, res){
    res.json(friendsArray)
})

// need to fix post. Not correct yet.
app.post("/api/friends", function(req, res){
		// Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match

		var totalDifference = 9001; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friendsArray.length; i++) {
			console.log('friend = ' + JSON.stringify(friendsArray[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendsArray[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friendsArray[i].name);
				console.log('Friend image = ' + friendsArray[i].photo);

				totalDifference = diff;
				matchName = friendsArray[i].name;
				matchImage = friendsArray[i].photo;
				// document.getElementById("#match-name").textContent(matchName);
				// document.getElementById("#match-img").setAttribute("src", matchImage);
	  
			}
		}

		// Send appropriate response
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });

}
