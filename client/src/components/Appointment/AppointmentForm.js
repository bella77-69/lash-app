import React, { useState } from "react";
import BookingModal from "../Booking/BookingModal";
import axios from "axios";

const AppointmentForm = ({ date, time, modalIsOpen }) => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    lashType: "",
    isBooked: true,
    time: time,
    date: date.toDateString(),
  });
  const [error, setError] = useState("");
  const baseUrl = "http://localhost:5000";

  const changeHandler = (event) => {
    setError("");
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const validateInput = () => {
    if (!input.email || !input.name || !input.lashType) {
      setError("All fields are required");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validateInput()) {
      axios
        .post(`${baseUrl}/appointment/add`, input)
        .then((response) => {
          console.log("success adding appointment:", response);
          setInput({
            email: "",
            name: "",
            lashType: "",
            time: " ",
            date: " ",
            isBooked: true,
          });
        })
        .catch((error) => {
          console.log("error adding appointment:", error);
        });
    }
  };

  return (
    <div className="booking-container booking-right booking-middle">
      <form className="booking-form" onSubmit={submitHandler}>
        <div className="booking-form__container">
          <h2 className="booking-form__info">
            Please Fill Out the Following Information to Book your Appointment
          </h2>
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Your Name"
            className="booking-form__label"
            onChange={changeHandler}
          />
        </div>
        <div className="booking-form__container">
          <input
            type="text"
            value={input.email}
            name="email"
            placeholder="Your Email"
            className="booking-form__label"
            onChange={changeHandler}
          />
        </div>
        <div className="booking-form__container">
          <div className="booking-form__div">
            <select
              className="booking-form__label"
              name="lashType"
              value={input.lashType}
              onChange={changeHandler}
             
            >
              <option
                className="booking-option"
                disabled={true}
                value="Not set"
              >
                Select Service
              </option>
              <option value="Select Lash Service">Select Lash Service</option>
              <option value="Classic Lashes Full Set">
                Classic Lashes Full Set
              </option>
              <option value="Classic Lashes Fill">Classic Lashes Fill</option>
              <option value="Hybrid Lashes Full Set">
                Hybrid Lashes Full Set
              </option>
              <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
              <option value="Volume Lashes Full Set">
                Volume Lashes Full Set
              </option>
              <option value="Volume Lashes Fill">Volume Lashes Fill</option>
              <option value="Russian Lashes Full Set">
                Russian Lashes Full Set
              </option>
              <option value="Russian Lashes Fill">Russian Lashes Fill</option>
            </select>
          </div>
        </div>
        {error && <div>{error}</div>}
        <div className="booking-form__container">
          {/* <button
                type="submit"
                className="btn btn-brand"
               onClick={submitHandler}
                onSubmit={() => setInput(input)}
              >
                Submit
              </button> */}

          <BookingModal
            onClick={submitHandler}
            onSubmit={() => setInput(input)}
            // onSubmit={submitHandler}
            ariaHideApp={false}
            time={time}
            date={date}
            lashType={input.lashType}
            name={input.name}
            email={input.email}
          />
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
