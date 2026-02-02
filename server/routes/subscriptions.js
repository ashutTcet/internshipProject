const express = require('express');
const router = express.Router();
const {
  createSubscription,
  getSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription,
} = require('../controllers/subscriptionController');
const { protect } = require('../middleware/auth');

router.route('/')
  .post(protect, createSubscription)
  .get(protect, getSubscriptions);

router.route('/:id')
  .get(protect, getSubscription)
  .put(protect, updateSubscription)
  .delete(protect, deleteSubscription);

module.exports = router;
