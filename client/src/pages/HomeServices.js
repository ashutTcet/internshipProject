import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeServices.css';

const HomeServices = () => {
  const deliveryAreas = [
    'Downtown',
    'Uptown',
    'Westside',
    'Eastside',
    'Midtown',
    'Suburbs (within 10 miles)',
  ];

  return (
    <div className="home-services">
      <section className="services-header">
        <div className="container">
          <h1>Home Delivery Service</h1>
          <p>Enjoy The Daily Hearth in the comfort of your home</p>
        </div>
      </section>

      <section className="services-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-block">
              <h2>Why Choose Our Delivery?</h2>
              <ul>
                <li>Fresh, hot meals delivered within 30-45 minutes</li>
                <li>Carefully packaged to maintain quality</li>
                <li>Contactless delivery available</li>
                <li>Real-time order tracking</li>
                <li>Minimum order: $15</li>
                <li>Free delivery on orders over $30</li>
              </ul>
            </div>

            <div className="info-block">
              <h2>Delivery Hours</h2>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong></p>
                <p>Lunch: 11:00 AM - 3:00 PM</p>
                <p>Dinner: 5:00 PM - 9:00 PM</p>
                <br />
                <p><strong>Saturday - Sunday:</strong></p>
                <p>Breakfast: 8:00 AM - 11:00 AM</p>
                <p>Lunch: 11:00 AM - 3:00 PM</p>
                <p>Dinner: 5:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-areas">
        <div className="container">
          <h2>Delivery Areas</h2>
          <p className="subtitle">We currently deliver to the following areas:</p>
          <div className="areas-grid">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="area-card">
                <span className="check-icon">✓</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-policy">
        <div className="container">
          <h2>Delivery Pricing</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Standard Delivery</h3>
              <p className="price">$4.99</p>
              <p>Orders under $30</p>
              <p>45-60 minutes</p>
            </div>
            <div className="pricing-card featured">
              <h3>Free Delivery</h3>
              <p className="price">$0.00</p>
              <p>Orders $30 and above</p>
              <p>45-60 minutes</p>
            </div>
            <div className="pricing-card">
              <h3>Express Delivery</h3>
              <p className="price">$7.99</p>
              <p>Any order amount</p>
              <p>30-40 minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="order-cta">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Browse our menu and place your order now</p>
          <div className="cta-buttons">
            <Link to="/prices" className="btn btn-primary">View Menu</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;
