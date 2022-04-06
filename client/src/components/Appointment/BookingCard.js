// import React, { useState } from "react";
// import AppointmentForm from "./AppointmentForm";
// import Waiver from "../Waiver/Waiver";
// import { Link } from "react-router-dom";

// const BookingCard = ({ date, time, name, lashType, email }) => {
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [success, setSuccess] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   const successMessage = () => {
//     return (
//       <>
//         {success && (
//           <section className="modal">
//             <AppointmentForm
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//               contentLabel="Example Modal"
//               ariaHideApp={false}
//               date={date}
//               lashType={lashType}
//               name={name}
//               time={time}
//               email={email}
//             >
//               <div className="modal-alert" role="alert">
//                 Your Appointment {email}
//                 <span>
//                   &nbsp;for has been Booked Successfully for {date} at {time}
//                 </span>
//               </div>
//               <Waiver />
//               <Link to="/">
//                 <button onClick={closeModal} className="modal-btn">
//                   close
//                 </button>
//               </Link>
//             </AppointmentForm>
//           </section>
//         )}
//       </>
//     );
//   };

//   const bookAppointment = () => {
//     setSuccess(true);
//     openModal(true);
//   };
//   return (
//     <div>
//       {" "}
//       {successMessage()}
//       <button onClick={bookAppointment} className="btn btn-brand text-uppercase">
//             Book Appointment (booking card component)
//           </button>
//       <AppointmentForm
//         modalIsOpen={modalIsOpen}
//         closeModal={closeModal}
//         date={date}
//         time={time}
//         onClick={bookAppointment}
//       >
//         <button onClick={closeModal}>close</button>
//         Book Appointment (booking card component)
//       </AppointmentForm>
//     </div>
//   );
// };

// export default BookingCard;
