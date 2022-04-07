// import React, { useState } from "react";
// import moment from "moment";
// import axios from "axios";
// import { Switch, DatePicker, Button, Radio } from "antd";
// import "./bookingPage.scss";
// import BookingModal from "../../components/Booking/BookingModal";
// //import DatePicker from "react-date-picker";
// import Calendar from "react-calendar";
// import TimeSlot from "../../components/Booking/TimeSlot";
// import Appointment from "../../components/Appointment/Appointment"
// const BookingPage = (props) => {
//   const [input, setInput] = useState({
//     email: "",
//     name: "",
//     lashType: "",
//     time: "",
//     date: "",
//   });

//   const [error, setError] = useState("");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const baseUrl = "http://localhost:5000";

//   const changeHandler = (event) => {
//     setError("");
//     setInput({
//       ...input,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const validateInput = () => {
//     if (
//       !input.email ||
//       !input.name ||
//       !input.lashType
//       // !input.time ||
//      //  !input.date
//     ) {
//       setError("All fields are required");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (validateInput()) {
//       axios
//         .post(`${baseUrl}/appointment/add`, input)
//         .then((response) => {
//           console.log("success adding appointment:", response);
//           setInput({
//             email: "",
//             name: "",
//             lashType: "",
//             time: "",
//           });
//           setSelectedDate({
//             date: ""
//           })
//           // props.history.push('/modal')
//         })
//         .catch((error) => {
//           console.log("error adding appointment:", error);
//         });
//     }
//   };

//   return (
//     <form className="booking-form" onSubmit={submitHandler}>
//       <label className="booking-label">Name</label>
//       <div className="booking-form__container">
//         <input
//           name="name"
//           value={input.name}
//           placeholder="Name"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <label className="booking-label">Email Address</label>
//       <div className="booking-form__container">
//         <input
//           name="email"
//           value={input.email}
//           placeholder="Email"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="booking-form__drop">
//         <select
//           name="lashType"
//           value={input.lashType}
//           placeholder="Lash Type"
//           onChange={changeHandler}
//         >
//           <option className="booking-option">Select Service</option>
//           <option value="Classic Lashes Full Set">
//             Classic Lashes Full Set
//           </option>
//           <option value="Classic Lashes Fill">Classic Lashes Fill</option>
//           <option value="Hybrid Lashes Full Set">Hybrid Lashes Full Set</option>
//           <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
//           <option value="Volume Lashes Full Set">Volume Lashes Full Set</option>
//           <option value="Volume Lashes Fill">Volume Lashes Fill</option>
//           <option value="Russian Lashes Full Set">
//             Russian Lashes Full Set
//           </option>
//           <option value="Russian Lashes Fill">Russian Lashes Fill</option>
//         </select>
//         <label className="booking-label"></label>
//       </div>

//       <div className="booking-form__container">
//         <div className="booking-calendar">
//           <Calendar
//             onChange={handleDateChange}
//             value={new Date()}
//           required
//             className="react-calendar"
//           />
//         </div>
//         <TimeSlot value={input.time}/>
//       </div>
//       <p className="booking-select">
//         Current selected date is:{" "}
//         <b>{moment(selectedDate).format("MMMM Do YYYY")}</b>
//       </p>

//       {/* <DatePicker onChange={dateHandler}  /> */}
//       {error && <div>{error}</div>}
//       {/* <DatePicker onChange={setDate} required value={newdate} /> */}

//       {/* <Button onClick={submitHandler} onSubmit={() => setInput(input)}>
//         Submit
//       </Button> */}

//       <Appointment />
//         <BookingModal
//           onClick={submitHandler}
//           onSubmit={submitHandler}
//           setInput={setInput}
//           lashType={input.lashType}
//           name={input.name}
//           email={input.email}

//         />
//     </form>
//   );
// };

// export default BookingPage;

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
