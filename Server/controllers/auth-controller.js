const bcrypt = require("bcrypt"); //This line imports the bcrypt library, which provides functions for hashing passwords securely.
// Importing the User model from the ../models/user-model file
const User = require("../models/user-model");

// Controller function for handling requests to the home route
const home = async (req, res) => {
  try {
    // Sending a welcome message with a 200 status code for successful response
    res.status(200).send("Welcome to the home page");
  } catch (error) {
    // Handling errors by sending a "page not found" message with a 400 status code
    res.status(400).send({ msg: "Page not found!" });
  }
};

// Controller function for handling registration requests
const register = async (req, res) => {
  try {
    // Extracting username, email, phone, and password from the request body
    const { username, email, phone, password } = req.body;

    // Checking if a user with the provided email already exists in the database
    const userExist = await User.findOne({ email });
    if (userExist) {
      // If a user with the provided email exists, sending a response with a 400 status code and a message
      return res.status(400).json({ msg: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //Hashing the Password using bcrypt lib

    // If the user with the provided email doesn't exist, creating a new user with the provided information
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    // Sending a response with a 201 status code and the created user object
    res
      .status(201)
      .json({
        msg: "Registration Successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    // Handling internal server errors by sending a response with a 400 status code and a generic error message
    res.status(400).json("Internal server error !");
  }
};

// Exporting the home and register controller functions to be used in other parts of the application
module.exports = { home, register };
