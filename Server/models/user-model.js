// Importing the mongoose module for MongoDB object modeling
const mongoose = require("mongoose");

// Defining the schema for the User collection
const userSchema = new mongoose.Schema({
   
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// Creating a model named "User" based on the userSchema
const User = new mongoose.model("User", userSchema);

// Exporting the User model to be used in other parts of the application
module.exports = User;
