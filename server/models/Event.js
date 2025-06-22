
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // e.g., Workshop, Concert
  date: Date,
  location: String,
  price: Number,
  seatsAvailable: Number
});

module.exports = mongoose.model("event", eventSchema);
