import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="main-logo">
        <img src="../../images/main-logo.png" />
      </div>
      <div className="social-media-logo">
        <a href="https://www.instagram.com/">
          <img src="../../images/instagram.png" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="../../images/facebook.png" />
        </a>
      </div>

      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
    </div>
  );
}

export default Footer;
