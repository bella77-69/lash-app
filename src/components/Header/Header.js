import React from "react";
import logo from '../../Assets/Logo/logo.png'
import Social from "../Social/Social";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <img className="header-img" src={logo} alt="lash-logo" className="header-logo"></img>
      </div>
      {/* <div className="header-social">
          <Social />

      </div> */}
    </section>
  );
}

export default Header;
