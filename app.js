//==================== SERVER ========================
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

//================ MONGO DEPENDENCIES =================
// 2. Database configuration
// require mongojs, then save the url of our database 
// as well as the name of our collection
var mongojs = require('mongojs');
var databaseUrl = "MedDoc";
//var collections = ["animals"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl); //, collections);

// this makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(err) {
    console.log('Database Error:', err);
});

//================ MONGOOSE DEPENDENCIES =================
var mongoose = require("mongoose");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_c4cn3tc7:9g9kql0f983sjdpergjggisea7@ds111489.mlab.com:11489/heroku_c4cn3tc7");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});



//========================== ROUTES =============================
//HOME PAGE with logo
app.get('/', function(req, res) {
    res.send('HOME PAGE');
});

//log in page
app.get('/login/', function(req, res) {
    res.send('LOGIN PAGE');
});

//Dashoard page after login which displays list of patients; phase 2 your patients
app.get('/user/home/', function(req, res) {
    res.send('YOU LOGGED IN! Here is your dashboard ');
});

//See all docs for 1 patient
app.get('/user/docs/:patientid', function(req, res) {
    res.send('HERE ARE ALL THE DOCUMENTS for Patient X!');
});

//Create New Doc for Patient
app.post('/user/newdoc/', function(req, res) {
    res.send('CREATE NEW DOC!!!');
});

//GETS SPECIFIC PT DOC
app.get('/user/:documentid/', function(req, res) {
    res.send('GETS SPECIFIC PT DOC!!');
});

//DELETES YOUR SPECIFIC PT DOC
app.delete('/user/:documentid/', function(req, res) {
    res.send('DELETES SPECIFIC PT DOC!!');
});

//update YOUR SPECIFIC PT DOC
app.put('/user/:documentid/', function(req, res) {
    res.send('UPDATES SPECIFIC PT DOC!!');
});



//==================== SERVER ========================
app.listen(PORT, function() {
    console.log('24k Magic happens on port ' + PORT);
});