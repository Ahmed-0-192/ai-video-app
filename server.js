const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/Video');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ POST route to save video data
app.post('/api/videos', async (req, res) => {
  try {
    const { title, description } = req.body;
    const video = new Video({ title, description });
    const savedVideo = await video.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save video' });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
