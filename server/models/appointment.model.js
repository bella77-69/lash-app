const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    phone: { type: String, required: true },
    isBooked: { type: Boolean, default: false },
    updated: { type: Date, default: Date.now() },
    // userId: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = Appointment = mongoose.model("Appointment", appointmentSchema);
