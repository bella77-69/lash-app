import React from "react";
import AppointmentForm from "./AppointmentForm";
import BookingModal from "../Booking/BookingModal";

const BookAppointment = ({ date, time }) => {
  return (
    <section>
      <h1 className="booking-select">Selected Time: {time}</h1>
      <div className="booking-row">
        <BookingModal date={date} time={time} />
        <AppointmentForm time={time} date={date} />
      </div>
    </section>
  );
};

export default BookAppointment;
