// Require mongoose
var mongoose = require('mongoose');
// Create Schema class
var Schema = mongoose.Schema;


var ProviderSchema = new Schema({

    providerID: {
        type: Number,
        unique: true,
        required: "Enter your TX license number.",
        validate: [
            function(input) {
                return input.length = 7;
            },
            "Enter a valid TX license number."
        ]
    },
    name: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        // trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password should be longer"
        ]
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
    userCreated: {
        type: Date,
        default: Date.now

    },
    documents: [{
        type: Schema.Types.ObjectId,
        ref: "Document"
    }]

});


module.exports = mongoose.model('Provider', ProviderSchema);

/*
// creates our provider model from above schema
var Provider = mongoose.model("Provider", ProviderSchema);
// Export the User model, so it can be used in server.js with a require
module.exports = Provider;   
*/