const mongoose = require("mongoose");

const waiverSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  updated: { type: Date, default: Date.now() },
  // userId: { type: String, required: true}
});

module.exports = Waiver = mongoose.model("waiver", waiverSchema);
