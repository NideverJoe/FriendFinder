/////////////////////////
//ROUTES//
/////////////////////////
app.get("/api/friends", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

// need to fix post. Not correct yet.
// app.post("/api/friends", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// })