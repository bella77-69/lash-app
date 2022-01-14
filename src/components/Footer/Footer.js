import React from "react";
import Social from "../Social/Social";
import './Footer.scss';

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
            <div className="footer-email">lashnbella@gmail.com</div>
          </div>
      

        {/* <div className="footer-language">
          <select className="footer-container">
            <option value="br">French - French</option>
            <option value="en">ENG - English</option>
          </select>
        </div> */}
        <div className="footer-container">
          <span className="footer-copyright">www.bellalashesinc.com</span>
        </div>
      
      <div className="footer-container">Designed and Developed by Bella77-69</div>
      <div className="footer-container">- © Bella Lashes Inc. 2018 - </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;
