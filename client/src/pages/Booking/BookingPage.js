
import React, { useState } from "react";
import AppointmentForm from "../../components/Appointment/AppointmentForm";
import AppointmentHeader from "../../components/Appointment/AppointmentHeader";
import BookAppointment from "../../components/Appointment/BookAppointment";
import BookingCard from "../../components/Appointment/BookingCard";
import Title from "../../components/Title/Title";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="booking">
      <div className="title">
        <Title title="Book Appointment" />
      </div>
      <AppointmentHeader
        handleDateChange={handleDateChange}
        time={setTime}
      ></AppointmentHeader>
      <div className="booking-container booking-right">
        <p className="booking-select">Select a time:</p>
        <select
          className="booking-container__time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option className="booking-container__select">Select a time</option>
          <option value="8:00am">8:00am</option>
          <option value="9:00am">9:00am</option>
          <option value="9:30am">9:30am</option>
          <option value="10:00am">10:00am</option>
          <option value="10:30am">10:30am</option>
          <option value="11:00am">11:00am</option>
          <option value="11:30am">11:30am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5:00pm">5:00pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7:00pm">7:00pm</option>
        </select>
        <h2 className="booking-container__title">
          Appointment Booked for: {selectedDate.toDateString()} at {time}
        </h2>
        {/* <h1 className="booking-select">Selected Time: {time}</h1> */}
      </div>
      {/* <BookAppointment date={selectedDate} time={time}></BookAppointment> */}
      {/* <BookingCard date={selectedDate} time={time}></BookingCard> */}
      <AppointmentForm date={selectedDate} time={time} />
    </section>
  );
}
