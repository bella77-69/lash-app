import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import './Social.scss';

function Social() {
  return (
    <div className="social">
        <a href="https://www.facebook.com/" className="social-icon">
          <FaFacebook />
        </a>
        <a href="http://www.instagram.com/" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://wwww.twitter.com" className="social-icon">
          <FaTwitter />
        </a>
    </div>
  );
}

export default Social;
