const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add', async (req, res) => {
    const { name, email, image } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    try {
      let user = await User.findOne({ email });
  
      if (!user) {
        user = new User({ name, email, image });
        await user.save();
      }
  
      res.status(200).json(user); // Return existing or new user
    } catch (err) {
      console.error("User save failed:", err.message);
      res.status(400).json({ error: err.message });
    }
  });
  

router.get('/val', async (req, res) => {
    try {
        const saved="success";
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;
