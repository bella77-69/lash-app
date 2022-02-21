import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../Misc/ErrorNotice";
import "./Login.scss";
import PageHero from "../Hero/PageHero";
import Title from "../Title/Title";

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
      <PageHero title='login'/>
      <Title title="Login" />
      <h2 className="login-title">Login</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit} className="login-form">
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
      </form>
    </div>
  );
}
export default Login;
