var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 2207;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var reservations = [];

var waitlist = [];

//routes

app.get("/", function(req, res) {
    res.send()
})

app.listen(PORT, function() {
    console.log("We are open for business @ "+PORT);
})