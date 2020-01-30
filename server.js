const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const path = require("path");
const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workout");
// Use morgan logger for logging requests -- see npm morgan for more details
app.use(logger("dev"));

//Use standard middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//Set up routes
app.use(workoutRoutes);
app.use(userRoutes);
//Set up default route?
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("*", (req, res) => {
  res.redirect("/");
});

//Set up mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDb");

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("working on" + PORT);
});
