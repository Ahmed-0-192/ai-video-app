const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// POST: Add a new video
router.post('/videos', async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const newVideo = new Video({ title, description, url });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: 'Video upload failed' });
  }
});

// GET: Fetch all videos
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

module.exports = router;
