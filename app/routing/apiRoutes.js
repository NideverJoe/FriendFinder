
var friendsArray=require(path.join(__dirname, './app/data/friends'));

module.exports = function(app){

app.get("/api/friends", function(req, res){
    res.json(friendsArray)
})

// need to fix post. Not correct yet.
app.post("/api/friends", function(req, res){
    res.json(path.join(__dirname, "app/public/survey.html"));
})}