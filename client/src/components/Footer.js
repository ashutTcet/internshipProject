import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>The Daily Hearth</h3>
          <p>Serving delicious home-cooked meals with love since 2024</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/prices">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/locations">Locations</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@dailyhearth.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Hours: Mon-Sun, 8 AM - 10 PM</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 The Daily Hearth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
