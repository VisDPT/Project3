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

    /*   phone: {
           type: Number,
           required: "Enter Phone number",
           validate: [
               function(input) {
                   return input.length = 10;
               },
               "Enter Valid Phone Number."
           ]
       },

       address: {
           type: String,
       },
       email: {
           type: String,
           unique: true,
           required: "Email is Required",
           match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
       }, */


    diagnosis: {
        type: String,
        required: true
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

    plan: {
        type: String,
    },


    STG: String,
    LTG: String,


    docCreated: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('Document', DocumentSchema);