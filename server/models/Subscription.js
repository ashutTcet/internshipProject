const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  planType: {
    type: String,
    enum: ['lunch', 'dinner', 'both'],
    required: [true, 'Please select a plan type'],
  },
  duration: {
    type: String,
    enum: ['weekly', 'monthly'],
    required: [true, 'Please select a duration'],
  },
  preferences: {
    type: {
      type: String,
      enum: ['veg', 'non-veg', 'both'],
      default: 'both',
    },
    dietaryRestrictions: {
      type: String,
      default: '',
    },
  },
  price: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Please provide start date'],
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'paused', 'cancelled', 'expired'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
