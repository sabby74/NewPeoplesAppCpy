const mongoose = require("mongoose");

// Create Schema
const PeopleSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    title: String,
  },
  { timestamps: true }
);

// Create Model
const People = mongoose.model("People", PeopleSchema);

// Export Model
module.exports = People;
