require('dotenv').config();

const { PORT, NODE_ENV } = process.env;

const path = require('path');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const htmlFilePath = path.resolve(__dirname, '..', 'client', 'index.html');

  res.sendFile(htmlFilePath);
});

app.listen(PORT, () => {
  if (NODE_ENV === 'development') {
    console.log(`Server running on http://localhost:${PORT}/`);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});