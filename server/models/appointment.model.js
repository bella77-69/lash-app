const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lashType: { type: String, required: true },
    slotTime: { type: String, requred: true },
    // slotDate: {type: String, required: true},
    // isBooked: { type: Boolean, default: false },
    updated: { type: Date, default: Date.now() },
    userId: { type: String },
  },
  { timestamps: true }
);

module.exports = Appointment = mongoose.model("Appointment", appointmentSchema);
