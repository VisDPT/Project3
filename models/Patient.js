// Require mongoose
var mongoose = require('mongoose');
// Create Schema class
var Schema = mongoose.Schema;


var PatientSchema = new Schema({

    patientID: {
        type: Number,
        unique: true,
        required: true,
        validate: [
            function(input) {
                return input.length = 7;
            },
            "Enter a valid patient ID."
        ]
    },

    patientName: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: "Enter Phone number",
        validate: [
            function(input) {
                return input.length = 10;
            },
            "Enter Valid Phone Number."
        ]
    },
    email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    diagnosis: {
        type: String,
    },
    patientName: {
        type: String,
        required: true
    },

    DOB: {
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


    patientCreated: {
        type: Date,
        default: Date.now
    },
    documents: [{
        type: Schema.Types.ObjectId,
        ref: "Document"
    }]

});


module.exports = mongoose.model('Patient', PatientSchema);