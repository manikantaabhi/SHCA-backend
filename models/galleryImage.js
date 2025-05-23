const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);
