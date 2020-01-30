const express = require("express");
const workoutRouter = express.Router();
const db = require("../models");

workoutRouter.post("/workout", function(req, res) {
  db.Workout.create(req.body)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
    });
});

workoutRouter.put("/workout/:id", function(req, res) {
  db.Workout.update(
    { _id: req.params.id },
    { $push: { workouts: req.body.exercise } }
  )
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = workoutRouter;
