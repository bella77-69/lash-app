import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";
import "./Login.scss";
import Title from "../Title/Title";
import Social from "../Social/Social";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse = await axios.post(
        "http://localhost:5000/users/login",
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
      <Title title="Login" />
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <div className="login-container">
        <div className="login-form">
          <div className="login-box">
            <h4 className="login-user">
              <i className="login-circle">
                <FaUser />
              </i>
            </h4>
          </div>
          <form onSubmit={submit} className="login-forms">
            <label className="login-label">Email: </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              placeholder="Email"
            />

            <label className="login-label">Password: </label>

            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              placeholder="Password"
            />
            <input type="submit" value="Login" className="login-button" />
            <div className="login-message">
              <div>
                <input type="checkbox" className="login-checkbox" /> Remember ME
              </div>
              <div>
                <Link to="/reset-password" className="login-reset">
                  Forgot your password
                </Link>
              </div>
            </div>
          </form>
          <div className="login-social">
            <i className="login-social__social">
              <Social />
            </i>
          </div>
        </div>
      </div>

      {/* <div className="login-container">
      <form onSubmit={submit} className="login-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
        <label className="login-label">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <input type="submit" value="Login" className="login-btn login-btn__primary" />
        <Social />
      </form>
   
      </div>
    </div> */}
    </div>
  );
}
export default Login;
