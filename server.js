///////////////////////////
//DEPENDENCIES//
/////////////////////////

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');


/////////////////////////
//EXPRESS CONFIG AND PORT//
/////////////////////////
var app = express();
var PORT = process.env.PORT || 3000;


/////////////////////////
//MIDDLEWARE//
/////////////////////////
//urlencoded
//express.js
//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

/////////////////////////
//ROUTING CODE//
/////////////////////////

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

/////////////////////////
//LISTENING//
/////////////////////////

app.listen(PORT, function(){
    console.log("connected on: " + PORT);
})