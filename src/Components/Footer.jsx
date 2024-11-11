import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copy">
        <p>
          &copy; 2024 <br />
          theburger.com{" "}
        </p>
      </div>
      <div className="icons">
        <FaInstagram />
        <FaXTwitter />
        <FaFacebookSquare />
      </div>
    </div>
  );
};

export default Footer;
