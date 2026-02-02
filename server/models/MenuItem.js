const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide item name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide item description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide item price'],
  },
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'beverages'],
    required: [true, 'Please provide item category'],
  },
  image: {
    type: String,
    default: '',
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
