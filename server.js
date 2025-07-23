
const express = require('express');
const app = express();
const port = 3000;
const videoRoutes = require('./routes/videoRoutes');
app.use('/api/videos', videoRoutes);

app.get('/', (req, res) => {
  res.send('Hello from AI Video App!');
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
