import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";
import "./Register.scss";
import Title from "../Title/Title";
import { FaUser } from "react-icons/fa";

function Register() {
  const [name, setName] = useState();
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
      const newUser = { name, email, password, passwordCheck, displayName };
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
      <Title title="Register" />
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <div className="register-container">
        <div className="register-form">
          <div className="register-box">
            <h4 className="register-user">
              <i className="register-circle">
                <FaUser />
              </i>
            </h4>
          </div>
          <form onSubmit={submit} className="register-forms">
          <label className="register-label">Name: </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="register-input"
            />
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
            <label className="register-label">Re-Enter Password: </label>
            <input
              type="password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              className="register-input register-password"
            />
            <label className="register-label">Display name: </label>
            <input
              type="text"
              id="display-name"
              onChange={(e) => setDisplayName(e.target.value)}
              className="register-input"
            />
            <div className="register-message">
              <div>
                <input
                  className="register-input register-checkbox"
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={(e) => setAcceptedTerms(e.target.value)}
                  required
                />
                I accept the terms of service
              </div>
            </div>
            <input type="submit" value="Register" className="register-button" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
