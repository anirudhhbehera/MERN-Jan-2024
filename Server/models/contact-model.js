
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});
// create a new collections(Model)
const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;
