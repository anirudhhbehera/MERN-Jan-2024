// Importing the mongoose module for MongoDB object modeling
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");//importing jwt


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

userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };

// Creating a model named "User" based on the userSchema
const User = new mongoose.model("User", userSchema);

// Exporting the User model to be used in other parts of the application
module.exports = User;
