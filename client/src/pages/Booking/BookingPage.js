import React, { useState } from "react";
import BookingForm  from "../../components/Booking/BookingForm"

export default function BookingPage () {

  const [lashName, setLashName] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);

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
        <BookingForm
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