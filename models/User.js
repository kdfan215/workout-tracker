const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  workout: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
