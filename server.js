require("dotenv").config();
const cors = require("cors");
// pull PORT from .env, give default value of 4000
const PORT = process.env.PORT;
// pull DATABASE_URL from .env
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("./db/connection");

const People = require("./models/people.js");
const morgan = require("morgan");
const peopleController = require("./controllers/peoplecontroller");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.json());

app.use("/", peopleController);

// Routes

app.get("/", (req, res) => {
  res.send("<h1>Hello World From Peoples App Copy</h1>");
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
