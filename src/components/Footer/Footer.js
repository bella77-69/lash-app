import React from "react";
import Social from "../Social/Social";

function Footer() {
  return (
    <div>
      <Social />
      <div className="footer">
        <div className="footer-container">
          <div className="footer-address">
            <div className="mb-2">
              1158 - Main Street <br className="d-sm-none" /> Coquitlam - BC
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-phone">(604) 123-4567</div>
            <div className="footer-email">bellalashesinc@gmail.com</div>
          </div>
        </div>

        <div className="footer-language">
          <select className="footer-container">
            <option value="br">French - French</option>
            <option value="en">ENG - English</option>
          </select>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright"> - www.bellalashesinc.com</span>
        </div>
      </div>
      <div className="footer-bottom">Designed and Developed by Bella77-69</div>
      <div className="footer-copyright">© Bella Lashes Inc. 2018 - </div>
    </div>
  );
}

export default Footer;
