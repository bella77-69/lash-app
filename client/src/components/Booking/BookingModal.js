import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Booking.scss";
import Waiver from "../Waiver/Waiver";

export default function BookingModal({
  name,
  lashType,
  submitHandler,
  email,
  onClick,
  onSubmit,
}) {
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
              contentLabel="Example Modal"
              ariaHideApp={false}
              lashType={lashType}
              name={name}
            >
              <div className="modal-alert" role="alert">
                {name} Your Appointment has been
                <span>&nbsp;for {lashType} Booked Successfully</span>
              </div>
              <Waiver />
              <Link to="/">
                <button onClick={closeModal} className="modal-btn">
                  close
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
    // setName("");
    // setEmail("");
    // setSelectedDate("");
    openModal(true);
  };
  return (
    <>
      {" "}
      {successMessage()}
      <button onClick={bookAppointment} className="modal-btn">
        Book Appointment!!!
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>close</button>
        Book Appointment
      </Modal>
    </>
  );
}
