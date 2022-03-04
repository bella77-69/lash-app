import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Booking.scss";

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
            >
              <h2>Hello{userName}</h2>
              
              <div className="alert" role="alert">
                Your Appointment
                <span>&nbsp;for {lashName} Booked Successfully</span>
              </div>
              <Link to="/">
                <button onClick={closeModal}>close</button>
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
      <button onClick={bookAppointment}>Book Appointment!!!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Hello{userName}</h2>
        <div className="alert" role="alert">
          Your Appointment Has Been Booked SuccessFully
          <span className="alert-danger">{userName}</span>
        </div>
        <button onClick={closeModal}>close</button>
        Book Appointment
      </Modal>
    </>
  );
}
