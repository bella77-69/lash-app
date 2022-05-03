import React from "react";
import "./Header.scss";
import Social from "../Social/Social";
import AuthOptions from "../Auth/AuthOptions";
// import LoginButton from "../Auth/LoginButton";
// import RegisterButton from "../Auth/RegisterButton";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <div className="header-logo"></div>

        <div className="header-img"></div>
      </div>
      <div className="header-social">
        <Social />
        {/* </div>
          <div className="header-login"> */}
        <div className="header-social__wrapper">
          <AuthOptions />
          {/* <LoginButton />
          <RegisterButton /> */}
        </div>
      </div>
    </section>
  );
}

export default Header;
