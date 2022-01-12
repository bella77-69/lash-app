import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './Social.scss';

function Social() {
  return (
    <div className="social">
      <p className="social-container">
        <a href="https://www.facebook.com/" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x"  />
        </a>
        <a href="http://www.instagram.com/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
  );
}

export default Social;
