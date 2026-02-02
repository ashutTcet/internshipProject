import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to The Daily Hearth</h1>
          <p className="tagline">Where Every Meal Feels Like Home</p>
          <div className="hero-buttons">
            <Link to="/prices" className="btn btn-primary">View Menu</Link>
            <Link to="/contact" className="btn btn-secondary">Book a Table</Link>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            At The Daily Hearth, we believe in the power of good food to bring people together. 
            Our restaurant offers a warm, welcoming atmosphere where you can enjoy delicious, 
            home-cooked meals made with fresh, locally-sourced ingredients.
          </p>
          <p>
            Whether you're joining us for a hearty breakfast, a leisurely lunch, or an elegant dinner, 
            we promise an experience that nourishes both body and soul.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Dine-In Experience</h3>
              <p>Enjoy our cozy atmosphere and exceptional service</p>
              <Link to="/contact" className="btn-link">Book a Table</Link>
            </div>
            
            <div className="service-card">
              <h3>Home Delivery</h3>
              <p>Fresh, hot meals delivered right to your doorstep</p>
              <Link to="/home-services" className="btn-link">Learn More</Link>
            </div>
            
            <div className="service-card">
              <h3>Daily Meal Plans</h3>
              <p>Subscribe to our daily food service for regular meals</p>
              <Link to="/daily-food" className="btn-link">View Plans</Link>
            </div>
            
            <div className="service-card">
              <h3>Multiple Locations</h3>
              <p>Find us at convenient locations across the city</p>
              <Link to="/locations" className="btn-link">Find Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Experience The Daily Hearth?</h2>
          <p>Join us today and discover why our customers keep coming back</p>
          <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
