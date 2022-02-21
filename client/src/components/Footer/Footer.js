import React from "react";
import Social from "../Social/Social";
import "./Footer.scss";
import { GiPhone, GiEnvelope } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import logo from "../../Assets/Logo/logo.svg";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-left">
        <h3 className="footer-logo">
          Bella<span className="footer-logo__span">Lashes Inc.</span>
        </h3>

        <p class="footer-links">
          <img src={logo} alt="footer-logo" className="footer-img"/>
          {/* <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a> */}
        </p>

        <p class="footer-company">Bella Lashes Inc © 2015</p>
      </div>

      <div class="footer-center">
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
      </div>

      <div class="footer-right">
        <p class="footer-about">
          <span className="footer-questions">Got Questions? Get in touch</span>
          If you'd like more information about any of our lash services, please
          reach out and we will contact you promptly. And while you're at it,
          make sure to register to take advantage of booking your appointments
          online.
        </p>

        <div class="footer-social">
          <Social />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
