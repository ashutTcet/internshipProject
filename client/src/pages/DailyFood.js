import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { createSubscription } from '../utils/api';
import '../styles/DailyFood.css';

const DailyFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    planType: 'lunch',
    duration: 'monthly',
    preferenceType: 'both',
    dietaryRestrictions: '',
    startDate: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const plans = {
    lunch: { weekly: 500, monthly: 1800 },
    dinner: { weekly: 600, monthly: 2200 },
    both: { weekly: 1000, monthly: 3600 },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculatePrice = () => {
    return plans[formData.planType][formData.duration];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage('Please login to subscribe');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const subscriptionData = {
        planType: formData.planType,
        duration: formData.duration,
        preferences: {
          type: formData.preferenceType,
          dietaryRestrictions: formData.dietaryRestrictions,
        },
        startDate: formData.startDate,
      };

      await createSubscription(subscriptionData);
      setMessage('Subscription created successfully!');
      setFormData({
        planType: 'lunch',
        duration: 'monthly',
        preferenceType: 'both',
        dietaryRestrictions: '',
        startDate: '',
      });
    } catch (error) {
      setMessage('Failed to create subscription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="daily-food">
      <section className="daily-food-header">
        <div className="container">
          <h1>Daily Food Service</h1>
          <p>Subscribe to our daily meal plans for regular, hassle-free dining</p>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Why Subscribe?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Convenience</h3>
              <p>No daily ordering hassle - we deliver your meals automatically</p>
            </div>
            <div className="benefit-card">
              <h3>Cost Savings</h3>
              <p>Save up to 20% compared to individual meal orders</p>
            </div>
            <div className="benefit-card">
              <h3>Customizable</h3>
              <p>Choose your preferences and dietary restrictions</p>
            </div>
            <div className="benefit-card">
              <h3>Flexibility</h3>
              <p>Pause or modify your subscription anytime</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <h2>Our Plans</h2>
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Lunch Only</h3>
              <div className="plan-pricing">
                <p>Weekly: <span className="price">$500</span></p>
                <p>Monthly: <span className="price">$1,800</span></p>
              </div>
              <ul>
                <li>Monday to Friday</li>
                <li>Lunch delivery</li>
                <li>11:30 AM - 1:00 PM</li>
              </ul>
            </div>

            <div className="plan-card">
              <h3>Dinner Only</h3>
              <div className="plan-pricing">
                <p>Weekly: <span className="price">$600</span></p>
                <p>Monthly: <span className="price">$2,200</span></p>
              </div>
              <ul>
                <li>Monday to Friday</li>
                <li>Dinner delivery</li>
                <li>6:00 PM - 8:00 PM</li>
              </ul>
            </div>

            <div className="plan-card featured">
              <div className="badge">Best Value</div>
              <h3>Both Meals</h3>
              <div className="plan-pricing">
                <p>Weekly: <span className="price">$1,000</span></p>
                <p>Monthly: <span className="price">$3,600</span></p>
              </div>
              <ul>
                <li>Monday to Friday</li>
                <li>Lunch & Dinner</li>
                <li>Save $200/month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-form">
        <div className="container">
          <h2>Subscribe Now</h2>
          {!user && <p className="info-text">Please login to subscribe</p>}
          
          <form onSubmit={handleSubmit} className="sub-form">
            <div className="form-row">
              <div className="form-group">
                <label>Plan Type *</label>
                <select
                  name="planType"
                  value={formData.planType}
                  onChange={handleChange}
                  required
                >
                  <option value="lunch">Lunch Only</option>
                  <option value="dinner">Dinner Only</option>
                  <option value="both">Both Meals</option>
                </select>
              </div>

              <div className="form-group">
                <label>Duration *</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Food Preference *</label>
                <select
                  name="preferenceType"
                  value={formData.preferenceType}
                  onChange={handleChange}
                  required
                >
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div className="form-group">
                <label>Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Dietary Restrictions (Optional)</label>
              <textarea
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                rows="3"
                placeholder="E.g., allergies, specific dietary requirements..."
              ></textarea>
            </div>

            <div className="price-summary">
              <h3>Total: ${calculatePrice()}</h3>
              <p>per {formData.duration === 'weekly' ? 'week' : 'month'}</p>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading || !user}>
              {loading ? 'Subscribing...' : 'Subscribe Now'}
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default DailyFood;
