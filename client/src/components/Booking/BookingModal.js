import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Booking.scss";
import Waiver from "../Waiver/Waiver";

export default function BookingModal({
  userName,
  lashName,
  setUserName,
  setDescription,
  setSelectedDate,
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
              lashName={lashName}
            >
              <div className="modal-alert" role="alert">
                {userName} Your Appointment
                <span>&nbsp;for {lashName} Booked Successfully</span>
              </div>
              <Waiver />
              <Link to="/">
                <button onClick={closeModal} className="modal-btn">close</button>
              </Link>
            </Modal>
          </section>
        )}
      </>
    );
  };
  const bookAppointment = () => {
    setSuccess(true);
    setUserName("");
    setDescription("");
    setSelectedDate("");
    openModal(true);
  };
  return (
    <>
      {" "}
      {successMessage()}
      <button onClick={bookAppointment} className="modal-btn">Book Appointment!!!</button>
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
