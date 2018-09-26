var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 2207;

var reservations = [];

var waitlist = [];

//routes

app.get("/", function(req, res) {
    res.send()
})