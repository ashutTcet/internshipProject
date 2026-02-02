const express = require('express');
const router = express.Router();
const {
  getMenuItems,
  getMenuItemsByCategory,
  createMenuItem,
} = require('../controllers/menuController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(getMenuItems)
  .post(protect, createMenuItem);

router.get('/:category', getMenuItemsByCategory);

module.exports = router;
