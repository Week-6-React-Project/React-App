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
        <img src="../../images/instagram.png" />
        <img src="../../images/facebook.png" />
      </div>

      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
    </div>
  );
}

export default Footer;
