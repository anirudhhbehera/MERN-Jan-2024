// Importing the mongoose module for MongoDB object modeling
const mongoose = require("mongoose");

// Retrieving the MongoDB connection URI from the environment variables
const URI = process.env.MONGODB_URI;

// Logging the MongoDB connection URI to the console for debugging purposes
console.log(URI);

// Defining an asynchronous function to connect to the MongoDB database
const connectDb = async () => {
    try {
        // Attempting to establish a connection to the MongoDB database using the URI
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        // Handling any errors that occur during the connection process
        console.error("Database connection failed:", error);
        // Exiting the Node.js process if the connection fails
        process.exit(0);
    }
};

// Exporting the connectDb function to be used in other parts of the application
module.exports = connectDb;
