import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Set base URL
axios.defaults.baseURL = API_URL;

// Bookings API
export const createBooking = async (bookingData) => {
  const res = await axios.post('/api/bookings', bookingData);
  return res.data;
};

export const getBookings = async () => {
  const res = await axios.get('/api/bookings');
  return res.data;
};

export const updateBooking = async (id, bookingData) => {
  const res = await axios.put(`/api/bookings/${id}`, bookingData);
  return res.data;
};

export const deleteBooking = async (id) => {
  const res = await axios.delete(`/api/bookings/${id}`);
  return res.data;
};

// Subscriptions API
export const createSubscription = async (subscriptionData) => {
  const res = await axios.post('/api/subscriptions', subscriptionData);
  return res.data;
};

export const getSubscriptions = async () => {
  const res = await axios.get('/api/subscriptions');
  return res.data;
};

export const updateSubscription = async (id, subscriptionData) => {
  const res = await axios.put(`/api/subscriptions/${id}`, subscriptionData);
  return res.data;
};

export const deleteSubscription = async (id) => {
  const res = await axios.delete(`/api/subscriptions/${id}`);
  return res.data;
};

// Contact API
export const submitContactForm = async (contactData) => {
  const res = await axios.post('/api/contact', contactData);
  return res.data;
};

// Menu API
export const getMenuItems = async (category = null) => {
  const url = category ? `/api/menu?category=${category}` : '/api/menu';
  const res = await axios.get(url);
  return res.data;
};

export const getMenuByCategory = async (category) => {
  const res = await axios.get(`/api/menu/${category}`);
  return res.data;
};
