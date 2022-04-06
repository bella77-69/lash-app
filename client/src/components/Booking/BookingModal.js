import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Booking.scss";
import Waiver from "../Waiver/Waiver";

export default function BookingModal({ name, lashType, time, date, submitHandler }) {
  const [success, setSuccess] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const successMessage = () => {
    return (
      <>
        {success && (
          <section className="modal">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              closeModal={closeModal}
              ariaHideApp={false}
              lashType={lashType}
              name={name}
              time={time}
              date={date}
            >
              <div className="modal-alert" role="alert">
                {name} Your Appointment
                <span>
                  &nbsp; at {time} on {date.toDateString()} has been Booked
                  Successfully
                </span>
              </div>
              <Waiver lashType={lashType} name={name} time={time} date={date} />
              <Link to="/book-appointment">
                <button onClick={closeModal} className="modal-btn">
                 Go Back
                </button>
              </Link>
            </Modal>
          </section>
        )}
      </>
    );
  };
  const bookAppointment = () => {
    setSuccess(true);
    openModal(true);
  };
  return (
    <>
      {" "}
      {successMessage()}
      <button onClick={bookAppointment} className="modal-btn">
        Book Appointment!!! (booking modal component)
      </button>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        date={date}
        time={time}
     
      >
        <button onClick={closeModal}>Go Back</button>
        <button>Book Appointment</button>
      </Modal>
    </>
  );
}
