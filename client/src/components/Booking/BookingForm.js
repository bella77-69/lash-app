// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./Booking.scss";
// import TimeSlot from "./TimeSlot";
// import BookingModal from "./BookingModal";
// import styled from "styled-components";

// export default function Form({
//   lashType,
//   setLashType,
//   name,
//   setName,
//   email,
//   setEmail,
//   onChange,
// selectDate,
// setSelectDate,
//   selectedDate,
//   bookAppointment,
//   setSelectedDate,
//   setSuccess,
//  time,
//  setTime,
//   submit,
// }) {
//   const successMessage = (bookAppointment) => {
//     return (
//       <>
//         <BookingModal
//            onSubmit={submit}
//           onChange={onChange}
//           // bookAppointment={submit}
//           lashType={lashType}
//           name={name}
//           email={email}
//           time={time}
//           setTime={setTime}
//          selectDate={selectDate}
//           selectedDate={selectedDate}
//           setName={setName}
//           setEmail={setEmail}
//           setSelectedDate={setSelectedDate}
//           setLashTupe={setLashType}
//           setSuccess={setSuccess}
//           bookAppointment={bookAppointment}
//         />
//       </>
//     );
//   };

//   return (
//     <>
//       <div className="booking">
//         <div className="booking-container">
//           <form className="booking-form" onSubmit={submit}>
//             <label className="booking-label">Name</label>
//             <div className="booking-form__container">
//               <input
//                 type="text"
//                 className="booking-control"
//                 placeholder="Enter your name"
//                 required
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               ></input>
//             </div>
//             <label className="booking-label">Email Address</label>
//             <div className="booking-form__container">
//               <input
//                 type="text"
//                 className="booking-control"
//                 placeholder="Enter a valid email"
//                 required
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               ></input>
//             </div>
//           </form>
//           <div className="booking-form__drop">
//             <select
//               className="booking-select"
//               placeholder="Select Service"
//               aria-label="Select Service"
//               value={lashType}
//               onChange={(e) => setLashType(e.target.value)}
//             >
//               <option className="booking-option">Select Service</option>
//               <option value="Classic Lashes Full Set">
//                 Classic Lashes Full Set
//               </option>
//               <option value="Classic Lashes Fill">Classic Lashes Fill</option>
//               <option value="Hybrid Lashes Full Set">
//                 Hybrid Lashes Full Set
//               </option>
//               <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
//               <option value="Volume Lashes Full Set">
//                 Volume Lashes Full Set
//               </option>
//               <option value="Volume Lashes Fill">Volume Lashes Fill</option>
//               <option value="Russian Lashes Full Set">
//                 Russian Lashes Full Set
//               </option>
//               <option value="Russian Lashes Fill">Russian Lashes Fill</option>
//             </select>
//             <label className="booking-label"></label>
//           </div>
//           <div className="booking-form__container">
//             <div className="booking-calendar">
//               <CalendarContainer>
//                 <Calendar
//                   onClickDay={onChange}
//                   value={selectDate}
//                   required
//                   className="react-calendar"
//                 />
//               </CalendarContainer>
//             </div>
//           </div>

//           <h5 className="booking-select">Date : {selectedDate}</h5>

//           <TimeSlot time={time} setTime={setTime}></TimeSlot>
//           {successMessage()}
          
//         </div>
//       </div>
//     </>
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
