//npm install --save @blueprintjs/core



//==================== SERVER ========================
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

//body parser
var bodyParser = require('body-parser')
var logger = require("morgan"); //writes logs everything that has happened to the log file; records everything that happened while server running
// Our newest addition to the dependency family

// Use morgan and body parser with our app
app.use(logger("dev"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

// Make public a static dir
app.use(express.static("public"));


//================ REQUIRING FILES/MODELS =================
var Provider = require("./models/Provider.js");
var Document = require("./models/Document.js");
var Patient = require("./models/Patient.js");
//================ MONGO DEPENDENCIES =================
/*
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
*/

//================ MONGOOSE DEPENDENCIES & CONFIG=================

var mongoose = require("mongoose");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/MedDoc");
//"mongodb://heroku_c4cn3tc7:9g9kql0f983sjdpergjggisea7@ds111489.mlab.com:11489/heroku_c4cn3tc7"
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
    console.log("Mongoose connection successful.");
});



//======================== REACT ========================
var React = require('react');
var ReactDOM = require('react-dom');


//=========================================================
//                        ROUTES 
//=========================================================

//*********** HOME PAGE with logo ***********
app.get('/', function(req, res) {
    res.send('HOME PAGE with logo');
    /*
// THIS SEARCH WORKS!
        Provider.find({})
            .exec(function(err, results) {
                if (err) {
                    res.send('error occurred');
                } else {
                    console.log(results);
                    res.json(results);
                }
            })   */
});

//*********** LOG IN **************
app.get('/login/', function(req, res) {
    res.send('LOGIN PAGE');
});

//********** Dashoard page after login **************
//(which displays list of ALL patients;)
app.get('/user/home/', function(req, res) {
    //res.send('YOU LOGGED IN! Here is your dashboard ');
    Patient.find({})
        .populate("documents") 
        .exec(function(error, doc) { 
            if (error) {
                res.send(error);
            }
            else {
                res.send(doc);
            }
        });
});

//********** See all docs for 1 patient **************
app.get('/user/docs/:patientid', function(req, res) {
    res.send('HERE ARE ALL THE DOCUMENTS for Patient X!');
});

//********** GETS SPECIFIC PT DOC  **************
app.get('/user/:documentid/', function(req, res) {
    res.send('GETS SPECIFIC PT DOC!!');
});


//********** NEW DOC  **************
app.post('/user/newdoc/', function(req, res) {
    //res.send('CREATE NEW DOC!!!');
    var newDocument = new Document();

    newDocument.documentID =req.body.documentID;
    newDocument.patientID =req.body.patientID;
    newDocument.patientName =req.body.patientName;
    newDocument.providerID = req.body.provider;
    newDocument.providerName = req.body.providerName;
    newDocument.specialty = req.body.specialty;
    newDocument.setting = req.body.setting;
    newDocument.doctype = req.body.doctype;
    newDocument.dateOfBirth = req.body.dateOfBirth; 
    newDocument.age = req.body.age;
    newDocument.chronologicalAge= req.body.chronologicalAge;
    newDocument.docCreated = req.body.docCreated;
    newDocument.patientHX =req.body.patientHX;
    newDocument.instructorConcerns = req.body.instructorConcerns;
    newDocument.generalResponse = req.body.generalResponse;
    newDocument.rangeOfMotion = req.body.rangeOfMotion;
    newDocument.toneMC =req.body.toneMC;
    newDocument.functionalStrength = req.body.functionalStrength;
    newDocument.manualMuscleTesting = req.body.manuelMuscletesting;
    newDocument.standardizedTests = req.body.standardizedTests;
    newDocument.Plan = req.body.Plan;
    newDocument.goals = req.body.goals;   

    newDocument.save(function(err, document){
        if(err) {
            res.send(err);
        } else{
            console.log(document);
            res.send(document);
        }
    })
});


//********** DELETES PT DOC  **************
app.delete('/user/:documentid/', function(req, res) {
    res.send('DELETES SPECIFIC PT DOC!!');
});

//********** UPDATE DOC  **************
app.put('/user/:documentid/', function(req, res) {
    res.send('UPDATES SPECIFIC PT DOC!!');
});



//==================== SERVER ========================
app.listen(PORT, function() {
    console.log('24k Magic happens on port ' + PORT);
});