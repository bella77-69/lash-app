import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="booking-container booking-left">
      <div className="booking-container__calendar">
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
    </main>
  );
};

export default AppointmentHeader;
