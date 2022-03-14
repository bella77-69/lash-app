import React, { useState } from "react";
import BookingForm  from "../../components/Booking/BookingForm"
import Title from "../../components/Title/Title";
import axios from "axios";
export default function BookingPage () {

  const [lashName, setLashName] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
    
      const appointment = await axios.post(
        "http://localhost:5000/appointment/appointment_add",
appointment
      );
      } catch (err) {
        console.log(err)
      }}
  const bookAppointment = () => {
    setSuccess(true);
    setUserName("");
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
    <div>
      <section>
      <Title title="Booking" />
        <BookingForm
        onSubmit={submit}
          onChange={onChange}
          bookAppointment={bookAppointment}
          lashName={lashName}
          userName={userName}
          description={description}
          selectDate={selectDate}
          selectedDate={selectedDate}
          setUserName={setUserName}
          setDescription={setDescription}
          setSelectedDate={setSelectedDate}
          setLashName={setLashName}
          setSuccess={setSuccess}
        />
      </section>
      <hr />
  
    </div>
  );
};