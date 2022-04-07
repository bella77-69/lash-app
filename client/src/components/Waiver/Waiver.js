import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import WaiverQ from "../../components/Waiver/WaiverQ";
import "./waiver.scss";
import { Link, useHistory } from "react-router-dom";

export default function Waiver() {
  const [waiverInput, setWaiverInput] = useState({
    email: "",
    fname: "",
    lname: "",
    phone: "",
    dob: "",
    address: "",
    country: "",
    postalCode: "",
    city: "",
  });
  const history = useHistory();
  const [error, setError] = useState(true);
  const baseUrl = "http://localhost:5000";

  const changeHandler = (event) => {
    setError("");
    setWaiverInput({
      ...waiverInput,
      [event.target.name]: event.target.value,
    });
  };

  const validateInput = () => {
    if (
      !waiverInput.email ||
      !waiverInput.fname ||
      !waiverInput.lname ||
      !waiverInput.phone ||
      !waiverInput.dob ||
      !waiverInput.address ||
      !waiverInput.country ||
      !waiverInput.postalCode ||
      !waiverInput.city
    ) {
      setError("All fields are required");
      return false;
    } else {
      return true;
    }
  };

  const submitWaiver = (event) => {
    event.preventDefault();
    if (validateInput()) {
      axios
        .post(`${baseUrl}/waiver/add`, waiverInput)
        .then((response) => {
          console.log("success adding waiver:", response);
          setWaiverInput({
            email: "",
            fname: "",
            lname: "",
            phone: "",
            dob: "",
            address: "",
            country: "",
            postalCode: "",
            city: "",
          });
          history.push("/");
        })
        .catch((error) => {
          console.log("error adding waiver: ", error);
        });
    }
  };

  return (
    <div className="waiver">
      <h2 className="waiver-title">
        Before submitting, please complete the following information:
      </h2>
      <p className="waiver-subtitle">
        The information from this form will be used in the signing of your
        document(s). Once you've filled out and verified the applicable
        information below, you'll have a chance to review your documents prior
        to signing.
      </p>

      <form onSubmit={submitWaiver} className="waiver-form">
        Your Information
        <label className="waiver-label">First Name </label>
        <input
          name="fname"
          value={waiverInput.fname}
          onChange={changeHandler}
          className="waiver-input"
          required="yes"
        />
        <label className="waiver-label">Last Name </label>
        <input
          name="lname"
          value={waiverInput.lname}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Phone </label>
        <input
          type="tel"
          name="phone"
          value={waiverInput.phone}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Date of Birth </label>
        <input
          type="date"
          name="dob"
          value={waiverInput.dob}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Street Address </label>
        <input
          name="address"
          value={waiverInput.address}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Country </label>
        <input
          name="country"
          value={waiverInput.country}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Postal Code</label>
        <input
          name="postalCode"
          value={waiverInput.postalCode}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">City </label>
        <input
          name="city"
          value={waiverInput.city}
          onChange={changeHandler}
          className="waiver-input"
        />
        <label className="waiver-label">Email </label>
        <input
          name="email"
          value={waiverInput.email}
          onChange={changeHandler}
          className="waiver-input"
        />
        <p className="waiver-review">Please review before submitting!</p>
        {error && <div>{error}</div>}
        <Link to="/">
          <Button className="waiver-btn" onClick={submitWaiver}>
            Book Appointment (Waiver com)
          </Button>
        </Link>
      </form>

      {/* <WaiverQ  onSubmit={submitWaiver}  onClick={submitWaiver}/> */}
    </div>
  );
}
