import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";
import WaiverQ from "./WaiverQ";

function Waiver() {
  const [fname, setFirstName] = useState();
  const [mname, setMiddleName] = useState();
  const [lname, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [date, setBDate] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [postal, setPostalCode] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();

  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { fname, mname};
      const loginResponse = await axios.post(
        "http://localhost:5000/users/waiver",
        loginUser
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <h2 className="login-title">
        Before signing, please complete the following information:
      </h2>
      <p className="login-subtitle">
        The information from this form will be used in the signing of your
        document(s). Once you've filled out and verified the applicable
        information below, you'll have a chance to review your documents prior
        to signing.
      </p>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit} className="login-form">Your Information
        <label className="login-label">First Name </label>
        <input
          type="firstname"
          id="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          className="login-input"
          required="yes"
        />
          <label className="login-label">Middle Name </label>
        <input
          type="middlename"
          id="middlename"
          onChange={(e) => setMiddleName(e.target.value)}
          className="login-input"
        />
            <label className="login-label">Last Name </label>
        <input
          type="lastname"
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Phone </label>
        <input
          type="tel"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Date of Birth </label>
        <input
          type="date"
          id="Month"
          onChange={(e) => setBDate(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Street Address </label>
        <input
          type="text"
          id="Month"
          onChange={(e) => setAddress(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Country </label>
        <input
          type="hidden"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Postal Code</label>
        <input
          type="text"
          id="postalcode"
          onChange={(e) => setPostalCode(e.target.value)}
          className="login-input"
        />
           <label className="login-label">City </label>
        <input
          type="text"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          className="login-input"
        />
       
           <label className="login-label">Email </label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
     
      </form>
      <WaiverQ />
    </div>
   
  );
}
export default Waiver;
