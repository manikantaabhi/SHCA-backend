const connectDB = require('./config/db');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');

const rawOrigins = process.env.ALLOWED_ORIGINS || '';
const allowedOrigins = rawOrigins.split(',').map(origin => origin.trim());


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));



const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const galleryRoutes = require('./routes/galleryRoutes');
app.use('/api/gallery', galleryRoutes);

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);

const inquiryRoutes = require('./routes/inquiryRoutes');
app.use('/api/inquiries', inquiryRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('SHCA Backend is running');
});

connectDB();
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
