import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import "./Buttons.scss";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <nav className="container">
      {userData.user ? (
        <button className="container-button container-button--logout" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
         <button className="container-button container-button--login" onClick={login}>
            Login
          </button>
          <button className="container-button container-button--register" onClick={register}>
            Register
          </button>
         
        </>
      )}
    </nav>
  );
}
export default AuthOptions;
