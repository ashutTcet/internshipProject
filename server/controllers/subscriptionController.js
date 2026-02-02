const Subscription = require('../models/Subscription');

// Calculate price based on plan type and duration
const calculatePrice = (planType, duration) => {
  const prices = {
    lunch: { weekly: 500, monthly: 1800 },
    dinner: { weekly: 600, monthly: 2200 },
    both: { weekly: 1000, monthly: 3600 },
  };
  return prices[planType][duration];
};

// Calculate end date based on duration
const calculateEndDate = (startDate, duration) => {
  const date = new Date(startDate);
  if (duration === 'weekly') {
    date.setDate(date.getDate() + 7);
  } else {
    date.setMonth(date.getMonth() + 1);
  }
  return date;
};

// @desc    Create new subscription
// @route   POST /api/subscriptions
// @access  Private
exports.createSubscription = async (req, res) => {
  try {
    const { planType, duration, preferences, startDate } = req.body;

    const price = calculatePrice(planType, duration);
    const endDate = calculateEndDate(startDate, duration);

    const subscription = await Subscription.create({
      user: req.user.id,
      planType,
      duration,
      preferences,
      price,
      startDate,
      endDate,
    });

    res.status(201).json({
      success: true,
      subscription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all subscriptions for user
// @route   GET /api/subscriptions
// @access  Private
exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user.id }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single subscription
// @route   GET /api/subscriptions/:id
// @access  Private
exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found',
      });
    }

    // Make sure user owns subscription
    if (subscription.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      });
    }

    res.status(200).json({
      success: true,
      subscription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update subscription
// @route   PUT /api/subscriptions/:id
// @access  Private
exports.updateSubscription = async (req, res) => {
  try {
    let subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found',
      });
    }

    // Make sure user owns subscription
    if (subscription.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      });
    }

    subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      subscription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete subscription
// @route   DELETE /api/subscriptions/:id
// @access  Private
exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found',
      });
    }

    // Make sure user owns subscription
    if (subscription.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      });
    }

    await subscription.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Subscription deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
