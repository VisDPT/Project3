// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;


// Create article schema
var DocumentSchema = new Schema({
    // title is a required string
    documentID: {
        type: Number,
        unique: true,
        required: "Enter a valid document ID.",

    },
    patientID: {
        type: Number,
        //        unique: true,
        required: "Enter your Patient ID.",
        validate: [
            function(input) {
                return input.length = 7;
            },
            "Enter your Patient ID."
        ]
    },
    patientName: {
        type: String,
        required: true
    },

    providerID: {
        type: Number,
    },

    providerName: {
        type: String,
        required: true
    },

    specialty: { // PT, OT, ST
        type: String,
        required: true
    },

    setting: { //acute, OP, school & PT, OT, School based
        type: String,
        required: true
    },

    doctype: { //IE, reval, IEP, triennial, annual
        type: String,
        required: true
    },



    dateOfBirth: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        //        required: true
    },

    chronologicalAge: {
        type: String,
    },


    docCreated: {
        type: Date,
        default: Date.now
    },

    patientHX: String,
    instructorConcerns: String,
    generalResponse: String,
    rangeOfMotion: String,
    toneMC: String,
    functionalStrength: String,
    manualMuscleTesting: String,
    standardizedTests: String,

    assessment: {
        type: String,
    },

    Plan: {
        type: String,
    },

    goals: {
        STG: String,
        LTG: String,

    }
});



module.exports = mongoose.model('Document', DocumentSchema);

/*
// Create the "User" model with our UserSchema schema
var Document = mongoose.model("Document", DocumentSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Document;  */


/*
    //embedded Sub document
    Subj: {
        patientHX: String,
        instructorConcerns: String,
        generalResponse: String,
    },
    //embedded Sub document
    Obs: {
        ROM: String,
        toneMC: String,
        functionalStrength: String,
        MMT: String,
        standardizedTests: String,
    }, */