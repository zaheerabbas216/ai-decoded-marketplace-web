import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-title">AI Decoded</p>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
