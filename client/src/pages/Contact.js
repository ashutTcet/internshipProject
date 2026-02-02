import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { createBooking, submitContactForm } from '../utils/api';
import '../styles/Contact.css';

const Contact = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [bookingForm, setBookingForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });

  const [contactMessage, setContactMessage] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');
  const [contactLoading, setContactLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleBookingChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    setContactMessage('');

    try {
      await submitContactForm(contactForm);
      setContactMessage('Thank you! We will get back to you soon.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setContactMessage('Failed to submit. Please try again.');
    } finally {
      setContactLoading(false);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setBookingMessage('Please login to make a booking');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setBookingLoading(true);
    setBookingMessage('');

    try {
      await createBooking(bookingForm);
      setBookingMessage('Booking created successfully!');
      setBookingForm({
        name: user.name,
        email: user.email,
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: '',
      });
    } catch (error) {
      setBookingMessage('Failed to create booking. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <div className="container">
          <h1>Contact & Booking</h1>
          <p>Get in touch with us or reserve your table</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Address</h3>
              <p>123 Main Street</p>
              <p>Downtown, City 12345</p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-card">
              <h3>Email</h3>
              <p>info@dailyhearth.com</p>
            </div>
            <div className="info-card">
              <h3>Hours</h3>
              <p>Monday - Sunday</p>
              <p>8:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="forms-section">
        <div className="container">
          <div className="forms-grid">
            {/* Contact Form */}
            <div className="form-container">
              <h2>Contact Us</h2>
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={contactLoading}>
                  {contactLoading ? 'Sending...' : 'Send Message'}
                </button>
                {contactMessage && <p className="form-message">{contactMessage}</p>}
              </form>
            </div>

            {/* Booking Form */}
            <div className="form-container">
              <h2>Book a Table</h2>
              {!user && <p className="info-text">Please login to make a booking</p>}
              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleBookingChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleBookingChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingForm.date}
                      onChange={handleBookingChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={bookingForm.time}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    value={bookingForm.guests}
                    onChange={handleBookingChange}
                    min="1"
                    max="20"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={bookingForm.specialRequests}
                    onChange={handleBookingChange}
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={bookingLoading || !user}>
                  {bookingLoading ? 'Booking...' : 'Book Table'}
                </button>
                {bookingMessage && <p className="form-message">{bookingMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
