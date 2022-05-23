const mongoose = require("mongoose");

const waiverSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: String },
  address: { type: String, required: true },
  country: { type: String },
  postalCode: { type: String, required: true},
  city: { type: String },
  updated: { type: Date, default: Date.now() },
  userId: { type: String}
});

module.exports = Waiver = mongoose.model("waiver", waiverSchema);
