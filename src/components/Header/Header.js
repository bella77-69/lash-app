import React from "react";
import logo from "../../Assets/Logo/logo.png";
import image from "../../Assets/Images/hero.jpg";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
          <div className="header-logo"></div>
        {/* <img className="header-logo" src={logo} alt="lash-logo"></img> */}
        <div className="header-img"></div>
        {/* <img className="header-img" src={image} alt="lash-logo"></img> */}
      </div>
    </section>
  );
}

export default Header;
