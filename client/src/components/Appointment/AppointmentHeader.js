import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title
 from "../Title/Title";
const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="booking-container">
      <div className="booking-container__calendar">
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
    </main>
  );
};

export default AppointmentHeader;
