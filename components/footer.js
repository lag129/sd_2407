"use strict";

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>&copy; 2024 チーム東北工大. </p>
      <nav>
        <ul>
          <li className = {classes.text}><a href="#">About</a></li>
          <li className = {classes.text}><a href="#">Contact</a></li>
          <li className = {classes.text}><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;