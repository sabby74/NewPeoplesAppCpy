const mongoose = require("../db/connection");

const PeopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,

},
{ timestamps: true }
);


const People = mongoose.model("People", PeopleSchema);

module.exports = People;


