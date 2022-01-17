import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Booking.scss";
import TimeSlot from "./TimeSlot";

export default function Form() {
  const [roomName, setLashName] = useState("");
  const [userName, setuserName] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);
  const successMessage = () => {

    return (
      <>
        {success && (
          <div className="alert" role="alert">
            Your Appointment Booked SuccessFully
            <span className="alert-danger">{userName}</span>
          </div>
        )}
      </>
    );
  };
  const bookAppointment = () => {
    setSuccess(true);
    setuserName("");
    setDescription("");
    setSelectedDate("");
  };

  const onChange = (value) => {
    setSelectDate(value);
    var date = new Date(value),
      dayOfDate = ("0" + date.getDate()).slice(-2),
      month = ("0" + (date.getMonth() + 1)).slice(-2);
    setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
    setSuccess(false);
  };
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <h5 className="booking-title">Booking</h5>
          <form className="booking-form">
            <div className="booking-form__container">
              <select
                className="booking-select"
                placeholder="Select Service"
                aria-label="Select Service"
                value={roomName}
                onChange={(e) => setLashName(e.target.value)}
              >
                <option >Select Service</option>
                <option selected>Classic Lashes Full Set</option>
                <option selected>Classic Lashes Fill</option>
                <option selected>Hybrid Lashes Full Set</option>
                <option selected>Hybrid Lashes Fill</option>
                <option selected>Volume Lashes Full Set</option>
                <option selected>Volume Lashes Fill</option>
                <option selected>Russian Lashes Full Set</option>
                <option selected>Russian Lashes Fill</option>
              </select>
              <label className="booking-label"></label>
            </div>

            <div className="booking-form__container">
              <input
                type="text"
                className="booking-control"
                placeholder="Enter your name"
                required
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              ></input>
              <label className="booking-label">Name</label>
            </div>
            <div className="booking-form__container">
              <input
                type="text"
                className="booking-control"
                placeholder="Enter a valid email"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
              <label className="booking-label">Email Address</label>
            </div>
            <div className="booking-form__container">
              <div className="react-calendar">
                <Calendar onClickDay={onChange} value={selectDate} required />
              </div>
            </div>
          </form>
          <h5 className="card-title">Date : {selectedDate}</h5>

          <TimeSlot></TimeSlot>
          {successMessage()}
          <button
            type="button"
            className="card-booking"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}
