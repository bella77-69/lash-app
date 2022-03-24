// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import UserContext from "../../context/userContext";
// import ErrorNotice from "../Misc/ErrorNotice";
// import WaiverQ from "./WaiverQ";
// import "./waiver.scss";

// function Waiver() {
//   const [fname, setFirstName] = useState();
//   const [lname, setLastName] = useState();
//   const [phone, setPhone] = useState();
//   const [date, setBDate] = useState();
//   const [address, setAddress] = useState();
//   const [country, setCountry] = useState();
//   const [postal, setPostalCode] = useState();
//   const [city, setCity] = useState();
//   const [email, setEmail] = useState();
//   const [error, setError] = useState();
//   const { setUserData } = useContext(UserContext);
//   const history = useHistory();
//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const loginUser = { fname, lname, email };
//       const loginResponse = await axios.post(
//         "http://localhost:5000/waiver",
//         loginUser
//       );
//       setUserData({
//         token: loginResponse.data.token,
//         user: loginResponse.data.user,
//       });
//       localStorage.setItem("auth-token", loginResponse.data.token);
//       history.push("/");
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }
//   };
//   return (
//     <div className="waiver">
//       <h2 className="waiver-title">
//         Before submitting, please complete the following information:
//       </h2>
//       <p className="waiver-subtitle">
//         The information from this form will be used in the signing of your
//         document(s). Once you've filled out and verified the applicable
//         information below, you'll have a chance to review your documents prior
//         to signing.
//       </p>
//       {error && (
//         <ErrorNotice message={error} clearError={() => setError(undefined)} />
//       )}
//       <form onSubmit={submit} className="waiver-form">
//         Your Information
//         <label className="waiver-label">First Name </label>
//         <input
//           type="text"
//           id="firstname"
//           onChange={(e) => setFirstName(e.target.value)}
//           className="waiver-input"
//           required="yes"
//         />
//         <label className="waiver-label">Last Name </label>
//         <input
//           type="lastname"
//           id="lastname"
//           onChange={(e) => setLastName(e.target.value)}
//           className="waiverinput"
//         />
//         <label className="waiver-label">Phone </label>
//         <input
//           type="tel"
//           id="phone"
//           onChange={(e) => setPhone(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">Date of Birth </label>
//         <input
//           type="date"
//           id="Month"
//           onChange={(e) => setBDate(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">Street Address </label>
//         <input
//           type="text"
//           id="Month"
//           onChange={(e) => setAddress(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">Country </label>
//         <input
//           type="text"
//           id="country"
//           onChange={(e) => setCountry(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">Postal Code</label>
//         <input
//           type="text"
//           id="postalcode"
//           onChange={(e) => setPostalCode(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">City </label>
//         <input
//           type="text"
//           id="city"
//           onChange={(e) => setCity(e.target.value)}
//           className="waiver-input"
//         />
//         <label className="waiver-label">Email </label>
//         <input
//           type="text"
//           id="email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="waiver-input"
//         />
//       </form>
//       <WaiverQ />
//     </div>
//   );
// }
// export default Waiver;

import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import WaiverQ from "../../components/Waiver/WaiverQ";
import './waiver.scss';

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
          className="waiverinput"
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

        {error && <div>{error}</div>}
          <Button className="waiver-btn" onClick={submitWaiver}></Button>
      </form>
    
      <WaiverQ  onSubmit={submitWaiver}  onClick={submitWaiver}/>
    </div>
  );
}
