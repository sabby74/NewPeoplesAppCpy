require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const peopleController = require("./controllers/peoplecontroller");
const morgan = require("morgan");
const cors = require("cors");



//middleware
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", peopleController);

// Routes

app.get("/", (req, res) => {
  res.send("<h1>Hello there, From Peoples App Copy </h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
