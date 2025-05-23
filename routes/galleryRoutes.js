const express = require('express');
const router = express.Router();
const GalleryImage = require('../models/galleryImage');

// Add image metadata
router.post('/add', async (req, res) => {
  try {
        console.log("here is uplodaed: ",req.body);

    const img = new GalleryImage(req.body);
    const saved = await img.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Upload failed:", err.message, err.response?.data);
    res.status(400).json({ error: err.message });
  }
});

// Get all images
router.get('/', async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
