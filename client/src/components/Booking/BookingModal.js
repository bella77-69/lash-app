import { useState } from "react";

const BookingModal = () => {
  const [open, onOpenModal] = useState(false);
  const [close, onCloseModal] = useState(false);

  const openModal = () => {
    onOpenModal(true);
  };

  const closeModal = () => {
    onCloseModal(true);
    onOpenModal(false);
  };

  return { open, close, openModal, closeModal };
  <div></div>;
};

export default BookingModal;
