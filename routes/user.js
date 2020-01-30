const express = require("express");
const userRouter = express.Router();
const db = require("../models");

userRouter.get("/user/:id", function(req, res) {
  db.User.find({ _id: req.params.id })
    .populate("workout")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
    });
});

userRouter.post("/user", function(req, res) {
  db.User.create(req.body)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = userRouter;
