const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Inquiry = require('../models/Inquiry');
const Review = require('../models/Review');

router.get('/stats', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const inquiryCount = await Inquiry.countDocuments();
    const reviewCount = await Review.countDocuments();

    res.json({ userCount, inquiryCount, reviewCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load dashboard stats" });
  }
});

module.exports = router;
