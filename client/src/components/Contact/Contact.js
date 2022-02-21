import React from "react";
import Title from "../Title/Title";
import "./Contact.scss";
import "../Booking/BookingModal";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <Title title="Contact" />
      <h4 className="contact-title">We'd love to hear from you!</h4>
      <form className="contact-form">
        <div className="contact-half contact-left cf">
          <input
            className="contact-input"
            type="text"
            id="input-name"
            placeholder="Name"
          />
          <input
            className="contact-input"
            type="email"
            id="input-email"
            placeholder="Email address"
          />
          <input
            className="contact-input"
            type="text"
            id="input-subject"
            placeholder="Subject"
          />
        </div>
        <div className="contact-half contact-right cf">
          <textarea
            className="contact-textarea"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input className="contact-submit" type="submit" value="Submit" />
      </form>
      <div className="contact-details">
        <Link to="/book-appointment" className="contact-btn">
          Book Appointment{" "}
        </Link>
      </div>
    </div>
  );
}

export default Contact;
