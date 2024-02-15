// Importing the express module to create a router
const express = require("express");

// Creating an instance of a router using express.Router()
const router = express.Router();

// Importing the authentication controllers from the ../controllers/auth-controller file
const authcontrollers = require("../controllers/auth-controller");

// Defining routes and their corresponding controller functions
router.route("/").get(authcontrollers.home); // GET request to the root route ("/") handled by the home controller function
router.route("/register").post(authcontrollers.register); // POST request to the "/register" route handled by the register controller function
router.route("/login").post(authcontrollers.login);
router.route("/verify").post(authcontrollers.verify);
// Exporting the router to be used in other parts of the application
module.exports = router;    
