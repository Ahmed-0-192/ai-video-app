const express = require('express');
const router = express.Router();
console.log("✅ videoRoutes file loaded");
router.get('/test', (req, res) => {
  res.send('Video route working perfectly!');
});

router.post('/upload', (req, res) => {
  res.send('Video uploaded successfully!');
});
module.exports = router;