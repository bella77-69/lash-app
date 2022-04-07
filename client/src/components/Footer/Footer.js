import React from "react";
import Social from "../Social/Social";
import "./Footer.scss";
import { GiPhone, GiEnvelope } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import logo from "../../Assets/Logo/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">
          Bella<span className="footer-logo__span">Lashes Inc.</span>
        </h3>

        <p className="footer-links">
          <img src={logo} alt="footer-logo" className="footer-img" />
        </p>

        <p className="footer-company">Bella Lashes Inc © 2015</p>
      </div>

      <div className="footer-center">
        <div className="footer-icons">
          <ImLocation />
          <p className="footer-info">
            <span className="footer-address">1158 - Main Street </span>{" "}
            Coquitlam, BC
          </p>
        </div>

        <div>
          <GiPhone />
          <p className="footer-info">1.604.123.4567</p>
        </div>

        <div>
          <GiEnvelope />
          <p className="footer-info">
            <a href="mailto:lashnbella@gmail.com" className="footer-contact">
              lashnbella@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <Social />
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-about">Got Questions? Get in touch</p>
        <span className="footer-questions">
          If you'd like more information about any of our lash services, please
          reach out and we will contact you promptly. And while you're at it,
          make sure to check out our facebook page, where we regularly post
          specials.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
