import React, { useState } from "react";
import axios from "axios";
import {

  Switch,
  DatePicker,
  Button,
  Radio,
} from "antd";
import "./bookingPage.scss";
import BookingModal from "../../components/Booking/BookingModal";
//import DatePicker from "react-date-picker";
import Calendar from "react-calendar";
import styled from "styled-components";
const BookingPage = (props) => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    lashType: "",
    slotTime: "",
    slotDate: "",
  });

  const [AM, setAM] = useState(true);
  const [error, setError] = useState("");
  const [newdate, setDate] = useState("");
  const slotsAM = ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00"];
  const slotsPM = ["1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00", "5:00-6:00"];
  const baseUrl = "http://localhost:5000";

  const changeHandler = (event) => {
    setError("");
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const switchHandler = () => {
    setError("");
    setAM(!AM);
  };

  const dateHandler = (date, datestring) => {
    setError("");
    setDate({
      ...input,
      slotDate: date,
    });
  };

  const validateInput = () => {
    if (
      !input.email ||
      !input.name ||
      !input.lashType ||
      !input.slotTime 
    
    ) {
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
            slotTime: "",
            slotDate: "",
          });
          // props.history.push('/modal')
        })
        .catch((error) => {
          console.log("error adding appointment:", error);
        });
    }
  };

  return (
    <form className="booking-form" onSubmit={submitHandler}>
      <label className="booking-label">Name</label>
      <div className="booking-form__container">
        <input
          name="name"
          value={input.name}
          placeholder="Name"
          onChange={changeHandler}
        ></input>
      </div>
      <label className="booking-label">Email Address</label>
      <div className="booking-form__container">
        <input
          name="email"
          value={input.email}
          placeholder="Email"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="booking-form__drop">
        <select
          name="lashType"
          value={input.lashType}
          placeholder="Lash Type"
          onChange={changeHandler}
        >
          <option className="booking-option">Select Service</option>
          <option value="Classic Lashes Full Set">
            Classic Lashes Full Set
          </option>
          <option value="Classic Lashes Fill">Classic Lashes Fill</option>
          <option value="Hybrid Lashes Full Set">Hybrid Lashes Full Set</option>
          <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
          <option value="Volume Lashes Full Set">Volume Lashes Full Set</option>
          <option value="Volume Lashes Fill">Volume Lashes Fill</option>
          <option value="Russian Lashes Full Set">
            Russian Lashes Full Set
          </option>
          <option value="Russian Lashes Fill">Russian Lashes Fill</option>
        </select>
        <label className="booking-label"></label>
      </div>
      <Switch
        checkedChildren="AM"
        unCheckedChildren="PM"
        defaultChecked
        onChange={switchHandler}
      />
      {AM ? (
        <Radio.Group
          name="slotTime"
          value={input.slotTime}
          onChange={changeHandler}
        >
          {slotsAM.map((item) => (
            <Radio key={item} value={`${item} AM`}>{`${item} AM`}</Radio>
          ))}
        </Radio.Group>
      ) : (
        <Radio.Group
          name="slotTime"
          value={input.slotTime}
          onChange={changeHandler}
        >
          {slotsPM.map((item) => (
            <Radio key={item} value={`${item} PM`}>{`${item} PM`}</Radio>
          ))}
        </Radio.Group>
      )}
             <div className="booking-form__container">
               <div className="booking-calendar">
             
                   <Calendar
                   onChange={dateHandler}
                    required 
                    value={input.slotDate}
                    className="react-calendar"
                  />
            
              </div>
            </div>

            <h5 className="booking-select">Date : {input.slotDate}</h5>

      {/* <DatePicker onChange={dateHandler}  /> */}
      {error && <div>{error}</div>}
      {/* <DatePicker onChange={setDate} required value={newdate} /> */}
      {/* <Button onClick={submitHandler}> */}
        {/* <Button onClick={submitHandler} onSubmit={() => setInput(input)}>
        Submit
      </Button> */}
      <BookingModal
          onClick={submitHandler}
          onSubmit={submitHandler}
          setInput={setInput}
          lashType={input.lashType}
          name={input.name}
          email={input.email}
        />
    </form>
  );
};

export default BookingPage;


// import React, { useState } from "react";
// import BookingForm from "../../components/Booking/BookingForm";
// import Title from "../../components/Title/Title";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css";

// import TimeSlot from "../../components/Booking/TimeSlot";
// import Calendar from "react-calendar";
// import styled from "styled-components";

// export default function BookingPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [lashType, setLashType] = useState("");
//   // const [time, setTime] = useState("");
//   const [date, setDate] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [isBooked, setIsBooked] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const booked = await axios.post("http://localhost:5000/appointment/add");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const bookAppointment = () => {
//     setSuccess(true);
//     setIsBooked(true);
//     setName("");
//     setEmail("");
//     setSelectedDate("");
//     setDate();
//     setLashType("");
//   };

//   const onChange = (value) => {
//     setDate(value);
//     var date = new Date(value),
//       dayOfDate = ("0" + date.getDate()).slice(-2),
//       month = ("0" + (date.getMonth() + 1)).slice(-2);
//     setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
//     setSuccess(false);
//   };

//   return (
//     <div>
//       <section>
//         <Title title="Booking" />
//         <div className="booking">
//           <div className="booking-container">
//             <form className="booking-form" onSubmit={submit}>
//               <label className="booking-label">Name</label>
//               <div className="booking-form__container">
//                 <input
//                   type="text"
//                   className="booking-control"
//                   placeholder="Enter your name"
//                   required
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                 ></input>
//               </div>
//               <label className="booking-label">Email Address</label>
//               <div className="booking-form__container">
//                 <input
//                   type="text"
//                   className="booking-control"
//                   placeholder="Enter a valid email"
//                   required
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 ></input>
//               </div>
//             </form>
//             <div className="booking-form__drop">
//               <select
//                 className="booking-select"
//                 placeholder="Select Service"
//                 aria-label="Select Service"
//                 value={lashType}
//                 onChange={(e) => setLashType(e.target.value)}
//               >
//                 <option className="booking-option">Select Service</option>
//                 <option value="Classic Lashes Full Set">
//                   Classic Lashes Full Set
//                 </option>
//                 <option value="Classic Lashes Fill">Classic Lashes Fill</option>
//                 <option value="Hybrid Lashes Full Set">
//                   Hybrid Lashes Full Set
//                 </option>
//                 <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
//                 <option value="Volume Lashes Full Set">
//                   Volume Lashes Full Set
//                 </option>
//                 <option value="Volume Lashes Fill">Volume Lashes Fill</option>
//                 <option value="Russian Lashes Full Set">
//                   Russian Lashes Full Set
//                 </option>
//                 <option value="Russian Lashes Fill">Russian Lashes Fill</option>
//               </select>
//               <label className="booking-label"></label>
//             </div>
//             <div className="booking-form__container">
//               <div className="booking-calendar">
//                 <CalendarContainer>
//                   <Calendar
//                     onClickDay={onChange}
//                     value={date}
//                     required
//                     className="react-calendar"
//                   />
//                 </CalendarContainer>
//               </div>
//             </div>

//             <h5 className="booking-select">Date : {selectedDate}</h5>

//             <TimeSlot></TimeSlot>
//             {/* {successMessage()} */}
//           </div>
//           <input
//             type="submit"
//             value="book Appointment"
//             onClick={submit}
//             className="login-button"
//           />
//         </div>
//         {/* <BookingForm
//           onSubmit={submit}
//           onChange={onChange}
//           isbooked={isbooked}
//           bookAppointment={bookAppointment}
//           lashType={lashType}
//           name={name}
//           email={email}
//           time={time}
//           selectDate={selectDate}
//           selectedDate={selectedDate}
//           setName={setName}
//           setEmail={setEmail}
//           setTime={setTime}
//           setSelectedDate={setSelectedDate}
//           setLashType={setLashType}
//           success={success}
//           setSuccess={setSuccess}
//           setIsBooked={setIsBooked}
//         /> */}
//       </section>
//       <hr />
//     </div>
//   );
// }

// const CalendarContainer = styled.div`
//   max-width: 400px;
//   margin-top: 1.25rem;

//   button {
//     margin: 3px;
//     font-size: 1rem;
//     border: 0;
//     border-radius: 3px;
//     color: #737373;
//     padding: 5px 0;

//     &:hover {
//       background-color: #556b55;
//     }

//     &:active {
//       background-color: #c0c0c0;
//     }
//   }

//   .react-calendar__month-view__days {
//     display: grid !important;
//     grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

//     .react-calendar__tile {
//       max-width: initial !important;
//       font-size: 1rem;
//     }
//   }
// `;