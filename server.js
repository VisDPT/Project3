//npm install --save @blueprintjs/core



//==================== SERVER ========================
var express = require('express');
var PORT = process.env.PORT || 8000;
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





//================ MONGOOSE DEPENDENCIES & CONFIG=================

var mongoose = require("mongoose");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_c4cn3tc7:9g9kql0f983sjdpergjggisea7@ds111489.mlab.com:11489/heroku_c4cn3tc7");
//mongoose.connect("mongodb://localhost/MedDoc");
//""
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
    console.log("Mongoose connection successful.");
});


//================ REQUIRING FILES/MODELS =================
var Provider = require("./models/Provider.js");
var Document = require("./models/Document.js");
var Patient = require("./models/Patient.js");


//======================== REACT ========================
var React = require('react');
var ReactDOM = require('react-dom');

//webpack
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

//CLASS NPM PACKAGE
require("babel-core").transform("code", {
    plugins: ["transform-class-properties"]
});



//=========================================================
//                        ROUTES 
//=========================================================
//app.use(express.static(__dirname + '/www'));
//*********** HOME PAGE with logo ***********
app.get('/', function(req, res) {
    //    res.send('HOME PAGE with logo');
    res.sendFile(__dirname + "/public/view/index.html");
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
            } else {
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

    newDocument.documentID = req.body.documentID;
    newDocument.patientID = req.body.patientID;
    newDocument.patientName = req.body.patientName;
    newDocument.providerID = req.body.provider;
    newDocument.providerName = req.body.providerName;
    newDocument.specialty = req.body.specialty;
    newDocument.setting = req.body.setting;
    newDocument.doctype = req.body.doctype;
    newDocument.dateOfBirth = req.body.dateOfBirth;
    newDocument.age = req.body.age;
    newDocument.chronologicalAge = req.body.chronologicalAge;


    //  newDocument.phone = req.body.phone;
    //   newDocument.address = req.body.address;
    //   newDocument.email = req.body.email;
    newDocument.diagnosis = req.body.diagnosis;
    newDocument.patientHX = req.body.patientHX;
    newDocument.instructorConcerns = req.body.instructorConcerns;
    newDocument.generalResponse = req.body.generalResponse;
    newDocument.rangeOfMotion = req.body.rangeOfMotion;
    newDocument.toneMC = req.body.toneMC;
    newDocument.functionalStrength = req.body.functionalStrength;
    newDocument.manualMuscleTesting = req.body.manualMuscletesting;
    newDocument.standardizedTests = req.body.standardizedTests;
    newDocument.assessment = req.body.assessment;
    newDocument.plan = req.body.plan;
    newDocument.STG = req.body.STG;
    newDocument.LTG = req.body.LTG;
    newDocument.docCreated = req.body.docCreated;

    newDocument.save(function(err, document) {
        if (err) {
            res.send(err);
        } else {
            console.log(document);
            res.send(document);
        }
    })


    var newPatient = new Patient();

    newPatient.patientID = req.body.patientID;
    newPatient.patientName = req.body.patientName;
    newPatient.address = req.body.address;
    newPatient.phone = req.body.phone;
    newPatient.email = req.body.email;
    newPatient.diagnosis = req.body.diagnosis;
    newPatient.dateOfBirth = req.body.dateOfBirth;
    newPatient.age = req.body.age;
    newPatient.chronologicalAge = req.body.chronologicalAge;

    newPatient.save(function(err, patient) {
        if (err) {
            res.send(err);
        } else {
            console.log(patient);
            res.send(patient);
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



// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err,
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
    });
});


//==================== SERVER ========================
app.listen(PORT, function() {
    console.log('24k Magic happens on port ' + PORT);
});