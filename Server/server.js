// Importing the dotenv module to load environment variables from a .env file
require("dotenv").config();

// Importing the express module
const express = require("express");

// Creating an Express application
const app = express();

// Importing the router module for handling authentication routes
const router = require("./router/auth-router");

// Importing the connectDb function from the utils/db module
const connectDb = require("./utils/db");

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mounting the authentication router at the "/api/auth" endpoint
app.use("/api/auth", router);

// Setting the port for the server to listen on
const PORT = 5000;

// Connecting to the database and starting the server
connectDb().then(() => {
  app.listen(PORT, () => {
    // Logging a message indicating that the server is running and listening on the specified port
    console.log(`Server is running at port: ${PORT}`);
  });
});
