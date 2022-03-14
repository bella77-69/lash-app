const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
  userId: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
