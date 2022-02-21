import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";
import "./Register.scss";
import PageHero from "../Hero/PageHero";
import Title from "../Title/Title";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await axios.post("http://localhost:5000/users/register", newUser);
      const loginResponse = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password,
          acceptedTerms,
        }
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
    <div className="register">
      <PageHero title='register'/>
      <Title title="Register" />
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit} className="register-form">
        <label className="register-label">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <label className="register-label">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          className="register-input"
        />
        <label className="register-label">Display name: </label>
        <input
          type="text"
          // placeholder="display name"
          id="dsplay-name"
          onChange={(e) => setDisplayName(e.target.value)}
          className="register-input"
        />
         <label className="register-label">Accepted Terms </label>
        <input className="register-input"
            name="acceptedTerms"
            type="checkbox"
            onChange={e => setAcceptedTerms(e.target.value)}
            required />
          I accept the terms of service
      
       
        <input type="submit" value="Register" className="register-btn register-btn__primary" />
      </form>
    </div>
  );
}
export default Register;
