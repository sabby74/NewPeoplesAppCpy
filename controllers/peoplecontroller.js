const express = require("express");

const router = express.Router();

const People = require("../models/people");




//index route try catch block get all people
router.get("/people", async (req, res) => {
  try {
    const allPeople = await People.find({});
    res.status(200).json(allPeople);
  } catch (error) {
    res.status(400).json(error);
  }
});

//post route try catch block
router.post("/people", async (req, res) => {
  try {
    const newPeople = await People.create(req.body);
    console.log(req.body);
    res.status(200).json(newPeople);
  } catch (error) {
    res.status(400).json(error);
  }
});

//update route try catch block

router.put("/people/:id", async (req, res) => {
    try {
        const updatePeople = await People.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatePeople);
    } catch (error) {
        res.status(400).json(error);
    }
    });

//delete route try catch block
router.delete("/people/:id", async (req, res) => {
  try {
    const deletePeople = await People.findByIdAndDelete(req.params.id);
    res.status(200).json(deletePeople);
  } catch (error) {
    res.status(400).json(error);
  }
});

//index route try catch block get one person
router.get("/people/:id", async (req, res) => {
  try {
    const onePerson = await People.findById(req.params.id);
    res.status(200).json(onePerson);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;