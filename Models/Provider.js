// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;


// Create article schema
var ProviderSchema = new Schema({
    // title is a required string
    name: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
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
        required: true, //??????
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },

    userCreated: {
        type: Date,
        default: Date.now
    }
});


// Create the "User" model with our UserSchema schema
var Provider = mongoose.model("Provider", ProviderSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Provider;