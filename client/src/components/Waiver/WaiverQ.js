import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";

function WaiverQ() {
  const [services, setServices] = useState();
  const [allergies, setAllergies] = useState();
  const [waiver, setWaiver] = useState();

  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefalut();
    try {
      const loginUser = { waiver, services, allergies };
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
    <div>
      <p className="login-subtitle"></p>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit} className="login-form">
        Services
        <label className="login-label">
          Have you ever received this service before? (Individual or strip
          eyelash extenstions?){" "}
        </label>
        <input
          type="text"
          placeholder="services"
          id="services"
          onChange={(e) => setServices(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Services Continued </label>
        If YES, how was that experience for you? Did you have any discomfort,
        irritation or reactions?
        <input
          type="text"
          placeholder="services continued"
          id="servicescont"
          onChange={(e) => setServices(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Allergies</label>
        Are you allergic or sensitive to Latex, Bananas, Nail polish, Kiwi,
        Strawberries, Nuts?
        <input
          type="text"
          placeholder="Yes or No"
          id="allergies"
          onChange={(e) => setAllergies(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Allergies Continued</label>
        Do you have any food or skin allergies or sensitivities?
        <input
          type="text"
          id="allergiescontinued"
          placeholder="Allergies Continued"
          onChange={(e) => setAllergies(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Allergies Continued</label>
        Do you have any conditions, or complications internally? ie. glucose
        intolerant, diabetes, irritable bowel syndrome etc. PLEASE LIST ANY AND
        ALL.
        <input
          type="text"
          id="allergiescontinued2"
          placeholder="Allergies Continued(2)"
          onChange={(e) => setAllergies(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Eye Illness or Surgeries</label>
        Do you have, or are you being treated for any eye illness or surgery?
        Please explain.
        <input
          type="text"
          id="allergiescontinued2"
          placeholder="Allergies Continued(2)"
          onChange={(e) => setAllergies(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Pregnancy</label>
        Are you pregnant? If so, which trimester? Have you had lash extensions
        during pregnancy?
        <input
          type="text"
          id="pregnancy"
          placeholder="Pregnancy"
          onChange={(e) => setWaiver(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Lash Habits</label>
        Do you habitually rub, pull, or pick your lashes for any reason?
        <input
          type="text"
          id="lashhabits"
          placeholder="Lash Habits"
          onChange={(e) => setWaiver(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Eye Habits</label>
        Are you able to keep your eyes closed for up to 2 hours or longer?
        <input
          type="text"
          id="eyehabits"
          placeholder="Eye Habits"
          onChange={(e) => setWaiver(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Details</label>
        Is there anything else we should know?
        <input
          type="text"
          id="details"
          placeholder="Details"
          onChange={(e) => setWaiver(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Permission to Use Pictures/Photos</label>
        Do we have your permission to use photos we may take for social media or
        advertising? If so, please list your instagram name or social media
        handle so that we can tag you (if you chose so:)
        <input
          type="text"
          id="permission"
          placeholder="Permission to Use Pictures/Photos"
          onChange={(e) => setWaiver(e.target.value)}
          className="login-input"
        />
        <p>
          This form and process is powered by Waiversign on behalf of Blella
          Lashes Inc. Bella Lashes Inc. will collect and use your data in
          accordance with their Privacy Policy and/or Terms of Service. Please
          direct any questions about their Privacy Policy and/or Terms of
          Service or the use and collection of your data to
          lashnbella@gmail.com.
        </p>
        <input
          type="submit"
          value="Next"
          className="login-btn login-btn__primary"
        />
        <input
          type="submit"
          value="back"
          className="login-btn login-btn__primary"
        />
      </form>
    </div>
  );
}

export default WaiverQ;
