const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Save inquiry
router.post('/add', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    const saved = await inquiry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all inquiries (optional for admin)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
