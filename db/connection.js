const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Now connected to mongoDB"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


// Export Connection
module.exports = mongoose;