const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});